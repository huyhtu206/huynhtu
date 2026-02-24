use serde::Serialize;

#[derive(Serialize)]
pub struct SoftwareItem {
    pub id: &'static str,
    pub title: &'static str,
    pub version: &'static str,
    pub description: &'static str,
    pub category: &'static str,
    pub platforms: &'static [&'static str],
    pub link: &'static str,
    pub size: &'static str,
}

/// Migrated from frontend SOFTWARE_DATABASE in constants.ts
/// Add more items here as needed
pub static SOFTWARE_DATA: &[SoftwareItem] = &[
    SoftwareItem {
        id: "vlc",
        title: "VLC Media Player",
        version: "3.0.21",
        description: "Trình phát đa phương tiện mạnh mẽ, hỗ trợ mọi định dạng video/audio.",
        category: "Multimedia",
        platforms: &["windows", "mac", "linux"],
        link: "https://www.videolan.org/vlc/",
        size: "42 MB",
    },
    SoftwareItem {
        id: "vscode",
        title: "Visual Studio Code",
        version: "1.87",
        description: "Trình soạn thảo code mạnh mẽ từ Microsoft với hàng nghìn extension.",
        category: "Development",
        platforms: &["windows", "mac", "linux"],
        link: "https://code.visualstudio.com/",
        size: "90 MB",
    },
    SoftwareItem {
        id: "7zip",
        title: "7-Zip",
        version: "24.06",
        description: "Công cụ nén/giải nén file miễn phí, hỗ trợ 7z, ZIP, RAR và nhiều định dạng.",
        category: "Utilities",
        platforms: &["windows"],
        link: "https://www.7-zip.org/",
        size: "1.5 MB",
    },
    SoftwareItem {
        id: "firefox",
        title: "Mozilla Firefox",
        version: "124.0",
        description: "Trình duyệt web bảo mật cao, mã nguồn mở từ Mozilla Foundation.",
        category: "Web Browsers",
        platforms: &["windows", "mac", "linux"],
        link: "https://www.mozilla.org/firefox/",
        size: "55 MB",
    },
];
