use worker::*;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct ResolveRequest {
    product_id: Option<String>,
    name: Option<String>,
    category: String, // "windows" | "office" | "software"
}

pub async fn resolve_link(req: Request, env: &Env) -> Result<Response> {
    let url = req.url()?;
    let id = url.query_pairs().find(|(k, _)| k == "id").map(|(_, v)| v.to_string());
    let name = url.query_pairs().find(|(k, _)| k == "name").map(|(_, v)| v.to_string());
    let language = url.query_pairs().find(|(k, _)| k == "language").map(|(_, v)| v.to_string()).unwrap_or_else(|| "English".to_string());
    let category = url.query_pairs().find(|(k, _)| k == "category").map(|(_, v)| v.to_string()).unwrap_or_else(|| "software".to_string());
    let hide = url.query_pairs().any(|(k, _)| k == "hide");

    match category.as_str() {
        "windows" => resolve_windows(id, Some(language), hide, env).await,
        "office" => resolve_office(id, Some(language), hide, env).await,
        "software" => resolve_general_software(name, hide, env).await,
        _ => Response::error("Invalid category", 400),
    }
}

async fn resolve_windows(id: Option<String>, language: Option<String>, hide: bool, env: &Env) -> Result<Response> {
    let id = match id {
        Some(i) => i,
        None => return Response::error("Missing product ID", 400),
    };

    let lang = language.unwrap_or_else(|| "English".to_string());
    
    let redirect_url = format!(
        "https://www.microsoft.com/software-download/download/pruredirect?productID={}&language={}",
        id, 
        urlencoding::encode(&lang)
    );
    
    if hide {
        let code = super::links::create_short_link(redirect_url, env).await?;
        let short_url = format!("/{}", code);
        let mut headers = Headers::new();
        headers.set("Location", &short_url).unwrap();
        headers.set("Access-Control-Allow-Origin", "*").unwrap();
        Ok(Response::empty()?.with_status(302).with_headers(headers))
    } else {
        let mut headers = Headers::new();
        headers.set("Location", &redirect_url).unwrap();
        headers.set("Access-Control-Allow-Origin", "*").unwrap();
        Ok(Response::empty()?.with_status(302).with_headers(headers))
    }
}

async fn resolve_office(id: Option<String>, language: Option<String>, hide: bool, env: &Env) -> Result<Response> {
    let id = match id {
        Some(i) => i,
        None => return Response::error("Missing product ID", 400),
    };
    
    let lang = language.unwrap_or_else(|| "en-US".to_string());

    let redirect_url = format!(
        "https://c2rsetup.officeapps.live.com/c2r/download.aspx?ProductreleaseID={}&platform=x64&language={}&version=O16GA",
        id,
        urlencoding::encode(&lang)
    );
    
    if hide {
        let code = super::links::create_short_link(redirect_url, env).await?;
        let short_url = format!("/{}", code);
        let mut headers = Headers::new();
        headers.set("Location", &short_url).unwrap();
        headers.set("Access-Control-Allow-Origin", "*").unwrap();
        Ok(Response::empty()?.with_status(302).with_headers(headers))
    } else {
        let mut headers = Headers::new();
        headers.set("Location", &redirect_url).unwrap();
        headers.set("Access-Control-Allow-Origin", "*").unwrap();
        Ok(Response::empty()?.with_status(302).with_headers(headers))
    }
}

async fn resolve_general_software(name: Option<String>, hide: bool, env: &Env) -> Result<Response> {
    let name = match name {
        Some(n) => n.to_lowercase(),
        None => return Response::error("Missing software name", 400),
    };

    let target_url = match name.as_str() {
        "unikey" => "https://sourceforge.net/projects/unikey/files/latest/download",
        "winrar" => "https://www.rarlab.com/rar/winrar-x64-624.exe",
        "7zip" => "https://www.7-zip.org/a/7z2301-x64.exe",
        "chrome" => "https://www.google.com/chrome/browser/desktop/index.html?system=true&standalone=1",
        _ => return Response::error("Software not found in database", 404),
    };

    if hide {
        let code = super::links::create_short_link(target_url.to_string(), env).await?;
        let short_url = format!("/{}", code);
        let mut headers = Headers::new();
        headers.set("Location", &short_url).unwrap();
        headers.set("Access-Control-Allow-Origin", "*").unwrap();
        Ok(Response::empty()?.with_status(302).with_headers(headers))
    } else {
        let mut headers = Headers::new();
        headers.set("Location", target_url).unwrap();
        headers.set("Access-Control-Allow-Origin", "*").unwrap();
        Ok(Response::empty()?.with_status(302).with_headers(headers))
    }
}
