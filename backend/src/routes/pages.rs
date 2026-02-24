use worker::*;

/// Handle GET /api/pages/:slug
/// Returns a simple JSON descriptor for each page slug.
/// For pages with complex block data, the frontend continues using
/// constants.ts until a full migration is complete.
pub fn handle(slug: &str) -> Result<Response> {
    let body = match slug {
        "sponsor" => r#"{"id":"sponsor","title":"Ủng hộ / Tài trợ","description":"Giúp chúng tôi nâng cấp lưu trữ và cải thiện tốc độ tải xuống."}"#,
        "office-msi" => r#"{"id":"office-msi","title":"Office MSI Volume License","description":"Bộ cài Office truyền thống (Vĩnh viễn)."}"#,
        "office-mac" => r#"{"id":"office-mac","title":"Office for MacOS","description":"Bộ cài Office và công cụ kích hoạt cho Macbook."}"#,
        "office-c2r" => r#"{"id":"office-c2r","title":"Microsoft Office C2R","description":"Click-to-Run Office downloads."}"#,
        _ => return Response::error("Page not found", 404),
    };

    let mut resp = Response::ok(body)?;
    resp.headers_mut().set("Content-Type", "application/json")?;
    resp.headers_mut().set("Access-Control-Allow-Origin", "*")?;
    Ok(resp)
}
