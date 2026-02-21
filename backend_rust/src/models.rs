use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct FAQItem {
    pub question: String,
    pub answer: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct WindowsFile {
    pub language: String,
    pub arch: String,
    pub sha256: String,
    pub link: String,
    pub filename: String,
    pub version: Option<String>,
    pub build_number: Option<String>,
    pub release_date: Option<String>,
    pub size: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct WindowsRelease {
    pub id: String,
    pub title: Option<String>,
    pub files: Vec<WindowsFile>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct WindowsItem {
    pub id: String,
    pub name: String,
    pub releases: Option<Vec<WindowsRelease>>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct WindowsSubcategory {
    pub id: String,
    pub title: String,
    pub items: Vec<WindowsItem>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct WindowsMenuItem {
    pub id: String,
    pub title: String,
    pub faqs: Vec<FAQItem>,
    pub subcategories: Vec<WindowsSubcategory>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct OfficeProduct {
    pub id: String,
    pub name: String,
    pub included_apps: Vec<String>,
    pub links: OfficeLinks,
    pub is_new: Option<bool>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct OfficeLinks {
    pub online_x64: Option<String>,
    pub online_x86: Option<String>,
    pub offline: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct OfficeVersion {
    pub id: String,
    pub title: String,
    pub description: Option<String>,
    pub generation: Option<String>,
    pub products: Vec<OfficeProduct>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct OfficeLanguage {
    pub code: String,
    pub name: String,
    pub region: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct SoftwareItem {
    pub id: String,
    pub title: String,
    pub version: String,
    pub versions: Option<Vec<String>>,
    pub size: String,
    pub description: String,
    pub link: String,
    pub icon: Option<String>,
    pub category: Option<String>,
    pub author: Option<String>,
    pub downloads: Option<String>,
    pub tags: Option<Vec<String>>,
    pub platforms: Vec<String>,
    pub commands: Option<SoftwareCommands>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct SoftwareCommands {
    pub windows: Option<String>,
    pub mac: Option<String>,
    pub linux: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct GhostItem {
    pub id: String,
    pub title: String,
    pub version: String,
    pub author: String,
    pub description: String,
    pub tags: Vec<String>,
    pub arch: String,
    pub boot: String,
    pub files: Vec<GhostFile>,
    pub software_list: Vec<String>,
    pub features: Vec<String>,
    pub image: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct GhostFile {
    pub r#type: String, // 'type' is a reserved keyword in Rust
    pub size: String,
    pub link: String,
    pub md5: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct NewsItem {
    pub id: String,
    pub title: String,
    pub date: String,
    pub excerpt: String,
    pub category: String,
    pub image: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct ServiceItem {
    pub id: String,
    pub title: String,
    pub description: String,
    pub price: String,
    pub icon: String,
}
