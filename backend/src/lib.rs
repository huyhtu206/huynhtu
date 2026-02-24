use worker::*;

mod data;
mod routes;

// Add CORS headers to every response
fn cors_headers() -> Headers {
    let mut headers = Headers::new();
    headers.set("Access-Control-Allow-Origin", "*").unwrap();
    headers.set("Access-Control-Allow-Methods", "GET, OPTIONS").unwrap();
    headers.set("Access-Control-Allow-Headers", "Content-Type").unwrap();
    headers.set("Content-Type", "application/json").unwrap();
    headers
}

fn json_response(body: &str, status: u16) -> Result<Response> {
    let mut resp = Response::ok(body)?;
    *resp.headers_mut() = cors_headers();
    Ok(resp.with_status(status))
}

fn not_found(msg: &str) -> Result<Response> {
    json_response(&format!(r#"{{"error":"{}"}}"#, msg), 404)
}

#[event(fetch)]
pub async fn main(req: Request, env: Env, _ctx: Context) -> Result<Response> {
    // Handle CORS preflight
    if req.method() == Method::Options {
        return Response::empty()
            .map(|mut r| { *r.headers_mut() = cors_headers(); r });
    }

    let url = req.url()?;
    let path = url.path();

    // Route: Redirect for short links (e.g., api.huynhtu.com/abc12345)
    // Anything that doesn't start with /api/ and is longer than /
    if !path.starts_with("/api/") && path.len() > 1 {
        return routes::links::handle_redirect(req, env).await;
    }

    // Route: GET /api/navigation
    if path == "/api/navigation" {
        let json = serde_json::to_string(&data::navigation::NAVIGATION_DATA).unwrap_or_default();
        return json_response(&json, 200);
    }

    // Route: GET /api/software
    if path == "/api/software" {
        let json = serde_json::to_string(&data::software::SOFTWARE_DATA).unwrap_or_default();
        return json_response(&json, 200);
    }

    // Route: GET /api/news
    if path == "/api/news" {
        let json = serde_json::to_string(&data::news::NEWS_DATA).unwrap_or_default();
        return json_response(&json, 200);
    }

    // Route: GET /api/office/msi
    if path == "/api/office/msi" {
        let json = serde_json::to_string(&data::office::MSI_DATA).unwrap_or_default();
        return json_response(&json, 200);
    }

    // Route: GET /api/office/mac
    if path == "/api/office/mac" {
        let json = serde_json::to_string(&data::office::MAC_DATA).unwrap_or_default();
        return json_response(&json, 200);
    }

    // Route: GET /api/pages/:slug
    if path.starts_with("/api/pages/") {
        let slug = &path["/api/pages/".len()..];
        return routes::pages::handle(slug);
    }

    // Route: GET /api/catalog/search?q=...
    if path == "/api/catalog/search" {
        let query = url.query_pairs().find(|(k, _)| k == "q").map(|(_, v)| v.to_string()).unwrap_or_default();
        return routes::catalog::search_catalog(&query).await;
    }

    // Route: GET /api/catalog/download?id=...
    if path == "/api/catalog/download" {
        let id = url.query_pairs().find(|(k, _)| k == "id").map(|(_, v)| v.to_string()).unwrap_or_default();
        let hide = url.query_pairs().any(|(k, _)| k == "hide");
        return routes::catalog::get_download_link(&id, hide, &env).await;
    }

    // Route: GET /api/download/resolve?...
    if path == "/api/download/resolve" {
        return routes::download::resolve_link(req, &env).await;
    }

    // Route: GET /api/download/driver?...
    if path == "/api/download/driver" {
        return routes::drivers::handle_driver_request(req, &env).await;
    }

    not_found("Route not found")
}
