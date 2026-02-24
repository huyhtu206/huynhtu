use serde::Serialize;

#[derive(Serialize)]
pub struct NavItem {
    pub id: &'static str,
    pub title: &'static str,
    #[serde(rename = "type")]
    pub item_type: &'static str,  // "folder" | "page"
    #[serde(skip_serializing_if = "Option::is_none")]
    pub children: Option<&'static [NavItem]>,
}

pub static NAVIGATION_DATA: &[NavItem] = &[
    NavItem {
        id: "folder-1",
        title: "Windows",
        item_type: "folder",
        children: Some(&[
            NavItem { id: "windows-11", title: "Windows 11", item_type: "page", children: None },
            NavItem { id: "windows-10", title: "Windows 10", item_type: "page", children: None },
            NavItem { id: "windows-ltsc", title: "Windows LTSC", item_type: "page", children: None },
            NavItem { id: "windows-server", title: "Windows Server", item_type: "page", children: None },
        ]),
    },
    NavItem {
        id: "folder-2",
        title: "Office",
        item_type: "folder",
        children: Some(&[
            NavItem { id: "office-c2r", title: "Office C2R", item_type: "page", children: None },
            NavItem { id: "office-msi", title: "Office MSI VL", item_type: "page", children: None },
            NavItem { id: "office-mac", title: "Office cho Mac", item_type: "page", children: None },
        ]),
    },
    NavItem {
        id: "sponsor",
        title: "Ủng hộ / Tài trợ",
        item_type: "page",
        children: None,
    },
];
