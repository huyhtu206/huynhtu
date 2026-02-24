use serde::Serialize;

#[derive(Serialize)]
pub struct NewsItem {
    pub id: &'static str,
    pub title: &'static str,
    pub date: &'static str,
    pub summary: &'static str,
    pub category: &'static str,
}

pub static NEWS_DATA: &[NewsItem] = &[
    NewsItem {
        id: "win11-24h2",
        title: "Windows 11 24H2 phát hành chính thức",
        date: "2024-10-15",
        summary: "Microsoft chính thức phát hành Windows 11 phiên bản 24H2 với nhiều cải tiến hiệu suất.",
        category: "Windows",
    },
    NewsItem {
        id: "office-2024-release",
        title: "Microsoft Office 2024 ra mắt",
        date: "2024-10-03",
        summary: "Microsoft phát hành Office 2024 với nhiều tính năng AI mới nhúng trong Word, Excel và PowerPoint.",
        category: "Office",
    },
    NewsItem {
        id: "macos-sequoia",
        title: "macOS Sequoia chính thức ra mắt",
        date: "2024-09-16",
        summary: "Apple phát hành macOS Sequoia với iPhone Mirroring và cải tiến Stage Manager.",
        category: "MacOS",
    },
];
