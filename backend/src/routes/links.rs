use worker::*;
use rand::Rng;
use rand::distributions::Alphanumeric;

/// Generates a random 8-character code and stores the mapping in KV.
/// Returns the generated code.
pub async fn create_short_link(target_url: String, env: &Env) -> Result<String> {
    let kv = env.kv("LINKS")?;
    
    // Generate a random 8-character alphanumeric string
    let code: String = rand::thread_rng()
        .sample_iter(&Alphanumeric)
        .take(8)
        .map(char::from)
        .collect();
    
    // Store in KV (no expiration for now, or could set expiration if "limited")
    kv.put(&code, &target_url)?.execute().await?;
    
    Ok(code)
}

/// Resolves a short code from KV and redirects to the target URL.
pub async fn handle_redirect(req: Request, env: Env) -> Result<Response> {
    let url = req.url()?;
    let path = url.path();
    
    // Path is expected to be "/[code]"
    let code = path.trim_start_matches('/');
    
    if code.is_empty() {
        return Response::error("Missing code", 400);
    }

    let kv = env.kv("LINKS")?;
    match kv.get(code).text().await? {
        Some(target_url) => {
            // Instead of redirecting 302, we proxy the content
            // to hide the origin domain (cubbit) and avoid binding issues.
            
            // Build request with explicit redirect follow
            let mut init = RequestInit::new();
            init.with_method(Method::Get);
            init.with_redirect(RequestRedirect::Follow);
            
            let request = Request::new_with_init(&target_url, &init)?;
            let response = Fetch::Request(request).send().await?;
            
            // Extract the stream and headers
            let mut new_headers = response.headers().clone();
            
            // Force download headers to prevent XML display issues
            let filename = target_url.split('/').last().unwrap_or("file").split('?').next().unwrap_or("file");
            new_headers.set("Content-Disposition", &format!("attachment; filename=\"{}\"", filename)).unwrap();
            new_headers.set("Content-Type", "application/octet-stream").unwrap();
            new_headers.set("Access-Control-Allow-Origin", "*").unwrap();
            
            // Cleanup origin headers
            new_headers.delete("x-amz-request-id").unwrap();
            new_headers.delete("x-amz-id-2").unwrap();
            new_headers.delete("Server").unwrap();
            
            // If the response was a redirect that got followed, the status might be 200.
            // If it's still a 30x or anything else, we return it as is but with our forced headers.
            let status = if response.status_code() >= 300 && response.status_code() < 400 {
                200 // Mask redirect as success if content is being served
            } else {
                response.status_code()
            };

            Ok(Response::from_body(response.body().clone())?.with_status(status).with_headers(new_headers))
        },
        None => Response::error("Short link not found or expired", 404),
    }
}
