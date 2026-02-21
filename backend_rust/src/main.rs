use axum::{
    routing::get,
    Json, Router,
};
use std::net::SocketAddr;
use tower_http::cors::CorsLayer;
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

mod models;
use models::*;

#[tokio::main]
async fn main() {
    // Initialize tracing
    tracing_subscriber::registry()
        .with(tracing_subscriber::fmt::layer())
        .init();

    // Build our application with a route
    let app = Router::new()
        .route("/api/windows", get(get_windows))
        .route("/api/office/c2r", get(get_office_c2r))
        .route("/api/office/msi", get(get_office_msi))
        .route("/api/office/mac", get(get_office_mac))
        .route("/api/office/languages", get(get_office_languages))
        .route("/api/software", get(get_software))
        .route("/api/software/ghost", get(get_ghost))
        .route("/api/software/news", get(get_news))
        .route("/api/software/services", get(get_services))
        .layer(CorsLayer::permissive());

    // Run it with hyper
    let addr = SocketAddr::from(([127, 0, 0, 1], 5000));
    tracing::info!("listening on {}", addr);
    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn load_json<T: serde::de::DeserializeOwned>(path: &str) -> Vec<T> {
    let data = std::fs::read_to_string(path).unwrap_or_else(|_| "[]".to_string());
    serde_json::from_str(&data).unwrap_or_default()
}

async fn get_windows() -> Json<Vec<WindowsMenuItem>> {
    Json(load_json("data/windows.json").await)
}

async fn get_office_c2r() -> Json<Vec<OfficeVersion>> {
    Json(load_json("data/office_c2r.json").await)
}

async fn get_office_msi() -> Json<Vec<OfficeVersion>> {
    Json(load_json("data/office_msi.json").await)
}

async fn get_office_mac() -> Json<Vec<OfficeVersion>> {
    Json(load_json("data/office_mac.json").await)
}

async fn get_office_languages() -> Json<Vec<OfficeLanguage>> {
    Json(load_json("data/languages.json").await)
}

async fn get_software() -> Json<Vec<SoftwareItem>> {
    Json(load_json("data/software.json").await)
}

async fn get_ghost() -> Json<Vec<GhostItem>> {
    Json(load_json("data/ghost.json").await)
}

async fn get_news() -> Json<Vec<NewsItem>> {
    Json(load_json("data/news.json").await)
}

async fn get_services() -> Json<Vec<ServiceItem>> {
    Json(load_json("data/services.json").await)
}
