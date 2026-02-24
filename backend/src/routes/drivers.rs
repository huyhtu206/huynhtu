use worker::*;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct DriverPatternRequest {
    pub vendor: String,
    pub version: String,
    pub model_type: Option<String>, // e.g. "desktop", "mobile"
    pub os: Option<String>,         // e.g. "win10-win11-64bit"
}

pub async fn handle_driver_request(req: Request, env: &Env) -> Result<Response> {
    let url = req.url()?;
    let vendor = url.query_pairs().find(|(k, _)| k == "vendor").map(|(_, v)| v.to_string().to_uppercase());
    let version = url.query_pairs().find(|(k, _)| k == "version").map(|(_, v)| v.to_string());
    let model = url.query_pairs().find(|(k, _)| k == "model").map(|(_, v)| v.to_string());
    let osid = url.query_pairs().find(|(k, _)| k == "osid").map(|(_, v)| v.to_string()).unwrap_or_else(|| "45".to_string()); // Default Win10 x64
    let check = url.query_pairs().any(|(k, _)| k == "check");
    let hide = url.query_pairs().any(|(k, _)| k == "hide");

    let vendor = match vendor {
        Some(v) => v,
        None => return Response::error("Missing vendor", 400),
    };
    
    // For ASUS/LENOVO, version might be optional if we just want the latest
    let version_str = version.as_deref().unwrap_or("latest");

    let download_url = match vendor.as_str() {
        "NVIDIA" => format!(
            "https://us.download.nvidia.com/Windows/{}/{}-desktop-win10-win11-64bit-international-dch-whql.exe",
            version_str, version_str
        ),
        "AMD" => format!(
            "https://drivers.amd.com/drivers/whql-amd-software-adrenalin-edition-{}-win10-win11-oct2024.exe",
            version_str
        ),
        "INTEL_GFX" => format!(
            "https://downloadmirror.intel.com/823385/gfx_win_101.{}.exe",
            version_str
        ),
        "INTEL_WIFI" => format!(
            "https://downloadmirror.intel.com/820549/WiFi-{}-Driver64-Win10-Win11.exe",
            version_str
        ),
        "ASUS" => {
            let m = model.as_deref().unwrap_or("X541UA");
            let api_url = format!(
                "https://www.asus.com/support/api/product.asmx/GetPDDrivers?cpu=&osid={}&website=vn&model={}",
                osid, m
            );
            
            // Try to resolve the actual link from ASUS API
            match resolve_vendor_api(&api_url, "ASUS").await {
                Ok(url) => url,
                Err(_) => api_url, // Fallback to API URL if resolution fails
            }
        },
        "LENOVO" => {
            let m = model.as_deref().unwrap_or("");
            format!("https://pcsupport.lenovo.com/vn/vi/products/{}/downloads/driver-list", m)
        },
        "HP_UPD" => format!(
            "https://ftp.hp.com/pub/softlib/software13/upd-pcl6-x64-{}.exe",
            version_str
        ),
        "REALTEK" => format!(
            "https://cdn.realtek.com/pc/audio/High_Definition_Audio_LinK_{}.zip",
            version_str
        ),
        _ => return Response::error("Vendor not supported for patterns", 404),
    };

    if check {
        // Perform HEAD request to check if version exists
        let mut request_init = RequestInit::new();
        request_init.with_method(Method::Head);
        
        let fetch_req = Request::new_with_init(&download_url, &request_init)?;
        let resp = Fetch::Request(fetch_req).send().await?;
        
        let exists = resp.status_code() == 200;
        return Response::from_json(&serde_json::json!({
            "vendor": vendor,
            "version": version_str,
            "url": download_url,
            "exists": exists,
            "status": resp.status_code()
        }));
    }

    if hide {
        let code = super::links::create_short_link(download_url, env).await?;
        let short_url = format!("/{}", code);
        let mut headers = Headers::new();
        headers.set("Location", &short_url).unwrap();
        headers.set("Access-Control-Allow-Origin", "*").unwrap();
        return Ok(Response::empty()?.with_status(302).with_headers(headers));
    }

    // Redirect to the generated link
    let mut headers = Headers::new();
    headers.set("Location", &download_url).unwrap();
    headers.set("Access-Control-Allow-Origin", "*").unwrap();
    
    Ok(Response::empty()?.with_status(302).with_headers(headers))
}

async fn resolve_vendor_api(api_url: &str, vendor: &str) -> Result<String> {
    let mut request_init = RequestInit::new();
    request_init.with_method(Method::Get);
    request_init.with_redirect(RequestRedirect::Follow);
    
    let fetch_req = Request::new_with_init(api_url, &request_init)?;
    let mut resp = Fetch::Request(fetch_req).send().await?;
    
    if resp.status_code() != 200 {
        return Err(worker::Error::from("API request failed"));
    }

    match vendor {
        "ASUS" => {
            let json: serde_json::Value = resp.json().await?;
            // Asus structure: Result.Obj[].Files[].DownloadUrl.Global
            let download_url = json["Result"]["Obj"][0]["Files"][0]["DownloadUrl"]["Global"]
                .as_str()
                .ok_or_else(|| worker::Error::from("Download link not found in ASUS API"))?;
            Ok(download_url.to_string())
        },
        "LENOVO" => {
            let text = resp.text().await?;
            // A crude but effective way to find a download link in HTML:
            // Look for "https://download.lenovo.com/pccbbs/...exe"
            // Or "https://download.lenovo.com/consumer/...exe"
            
            let re_pattern = vec![
                "https://download.lenovo.com/pccbbs/",
                "https://download.lenovo.com/consumer/",
                "https://download.lenovo.com/km/media/attachment/"
            ];
            
            for p in re_pattern {
                if let Some(start) = text.find(p) {
                    let rest = &text[start..];
                    if let Some(end) = rest.find(".exe") {
                        return Ok(rest[..end + 4].to_string());
                    }
                }
            }
            
            Err(worker::Error::from("No direct download link found for Lenovo"))
        },
        _ => Err(worker::Error::from("Vendor resolution not implemented")),
    }
}
