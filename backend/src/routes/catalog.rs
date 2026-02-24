use scraper::{Html, Selector};
use serde::{Deserialize, Serialize};
use worker::*;

#[derive(Serialize, Deserialize, Debug)]
pub struct CatalogResult {
    pub id: String,
    pub name: String,
    pub brand: String,
    pub device: String,
    pub version: String,
    pub date: String,
    pub size: String,
}

pub async fn search_catalog(query: &str) -> Result<Response> {
    let url = format!("https://www.catalog.update.microsoft.com/Search.aspx?q={}", query);
    let mut resp = Fetch::Url(url.parse().unwrap()).send().await?;
    let html_text = resp.text().await?;
    
    let document = Html::parse_document(&html_text);
    let row_selector = Selector::parse("#ctl00_mainBody_updateItems tr").unwrap();
    let cell_selector = Selector::parse("td").unwrap();
    let id_selector = Selector::parse("a").unwrap();

    let mut results = Vec::new();

    for row in document.select(&row_selector).skip(1) { // Skip header
        let cells: Vec<_> = row.select(&cell_selector).collect();
        if cells.len() >= 8 {
            let title_link = cells[1].select(&id_selector).next();
            if let Some(link) = title_link {
                let id_attr = link.value().attr("id").unwrap_or("");
                let update_id = id_attr.replace("_link", "");
                
                results.push(CatalogResult {
                    id: update_id,
                    name: cells[1].text().collect::<String>().trim().to_string(),
                    brand: cells[2].text().collect::<String>().trim().to_string(),
                    device: cells[3].text().collect::<String>().trim().to_string(),
                    version: cells[5].text().collect::<String>().trim().to_string(),
                    date: cells[6].text().collect::<String>().trim().to_string(),
                    size: cells[7].text().collect::<String>().trim().to_string(),
                });
            }
        }
    }

    let json = serde_json::to_string(&results).unwrap();
    let mut headers = Headers::new();
    headers.set("Access-Control-Allow-Origin", "*").unwrap();
    headers.set("Content-Type", "application/json").unwrap();
    
    Ok(Response::ok(json)?.with_headers(headers))
}

pub async fn get_download_link(update_id: &str, hide: bool, env: &Env) -> Result<Response> {
    // The download links are found by posting to the Download.aspx page
    // For simplicity, we first try to get the download dialog page
    let url = "https://www.catalog.update.microsoft.com/DownloadDialog.aspx";
    let body = format!("updateID={}", update_id);
    
    let mut headers = Headers::new();
    headers.set("Content-Type", "application/x-www-form-urlencoded").unwrap();
    
    let mut resp = Fetch::Request(Request::new_with_init(
        url,
        &RequestInit {
            method: Method::Post,
            body: Some(body.into()),
            headers,
            ..Default::default()
        }
    )?).send().await?;
    
    let html_text = resp.text().await?;
    
    // Extract URIs from the response. Typically they are inside a script or as plain links
    // The Catalog uses JS to open links, but the URIs are present in the HTML
    let document = Html::parse_document(&html_text);
    let link_selector = Selector::parse("a").unwrap();
    
    let mut links = Vec::new();
    for link in document.select(&link_selector) {
        if let Some(href) = link.value().attr("href") {
            if href.contains("download.windowsupdate.com") {
                links.push(href.to_string());
            }
        }
    }

    // In some cases, links are in JavaScript strings like [ { 'uri': '...' } ]
    if links.is_empty() {
        // Simple regex-like search for URIs if scraper fails
        let re_links: Vec<&str> = html_text.split("'uri':'").skip(1).collect();
        for s in re_links {
            if let Some(end) = s.find("'") {
                links.push(s[..end].to_string());
            }
        }
    }

    let mut final_links = Vec::new();

    if hide {
        for link in links {
            if let Ok(code) = super::links::create_short_link(link, env).await {
                final_links.push(format!("/{}", code));
            }
        }
    } else {
        final_links = links;
    }

    let json = serde_json::to_string(&final_links).unwrap();
    let mut headers = Headers::new();
    headers.set("Access-Control-Allow-Origin", "*").unwrap();
    headers.set("Content-Type", "application/json").unwrap();
    
    Ok(Response::ok(json)?.with_headers(headers))
}
