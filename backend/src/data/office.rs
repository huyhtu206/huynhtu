use serde::Serialize;

#[derive(Serialize)]
pub struct ActivationKey {
    pub product: &'static str,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub label: Option<&'static str>,
    pub key: &'static str,
}

#[derive(Serialize)]
pub struct ActivationHeader {
    pub label: &'static str,
    pub key: &'static str,
}

#[derive(Serialize)]
pub struct ActivationSection {
    pub title: &'static str,
    pub headers: &'static [ActivationHeader],
    pub items: &'static [ActivationKey],
}

// Office MSI VL data — matches OFFICE_MSI_KEYS_DATA in constants.ts
pub static MSI_DATA: &[ActivationSection] = &[
    ActivationSection {
        title: "Office 2016 Professional Plus",
        headers: &[
            ActivationHeader { label: "Ngôn ngữ", key: "product" },
            ActivationHeader { label: "Kiến trúc", key: "label" },
            ActivationHeader { label: "Tải xuống", key: "key" },
        ],
        items: &[
            ActivationKey { product: "English", label: Some("x64"), key: "SW_DVD5_Office_Professional_Plus_2016_64Bit_English_MLF_X20-42432.ISO" },
            ActivationKey { product: "English", label: Some("x32"), key: "SW_DVD5_Office_Professional_Plus_2016_W32_English_MLF_X20-41353.ISO" },
            ActivationKey { product: "Vietnamese", label: Some("x64"), key: "SW_DVD5_Office_Professional_Plus_2016_64Bit_Vietnamese_MLF_X20-42465.ISO" },
            ActivationKey { product: "Vietnamese", label: Some("x32"), key: "SW_DVD5_Office_Professional_Plus_2016_W32_Vietnamese_MLF_X20-41349.ISO" },
        ],
    },
    ActivationSection {
        title: "Office 2013 Professional Plus",
        headers: &[
            ActivationHeader { label: "Sản phẩm", key: "product" },
            ActivationHeader { label: "Kiến trúc", key: "label" },
            ActivationHeader { label: "Tải xuống", key: "key" },
        ],
        items: &[
            ActivationKey { product: "Office Professional Plus 2013 SP1", label: Some("x64"), key: "SW_DVD5_Office_Professional_Plus_2013w_SP1_64Bit_English_MLF_X19-35976.ISO" },
            ActivationKey { product: "Office Professional Plus 2013 SP1", label: Some("x32"), key: "SW_DVD5_Office_Professional_Plus_2013w_SP1_W32_English_MLF_X19-35821.ISO" },
        ],
    },
];

// Office Mac data — matches OFFICE_MAC_APP_DATA in constants.ts
pub static MAC_DATA: &[ActivationSection] = &[
    ActivationSection {
        title: "Generation - 2021 / 2024",
        headers: &[
            ActivationHeader { label: "Ứng dụng", key: "product" },
            ActivationHeader { label: "Tải xuống", key: "ticketLink" },
        ],
        items: &[
            ActivationKey { product: "Office suite (with Teams)", label: None, key: "https://go.microsoft.com/fwlink/p/?linkid=2009112" },
            ActivationKey { product: "Word", label: None, key: "https://go.microsoft.com/fwlink/p/?linkid=525134" },
            ActivationKey { product: "Excel", label: None, key: "https://go.microsoft.com/fwlink/p/?linkid=525135" },
            ActivationKey { product: "PowerPoint", label: None, key: "https://go.microsoft.com/fwlink/p/?linkid=525136" },
            ActivationKey { product: "Outlook", label: None, key: "https://go.microsoft.com/fwlink/p/?linkid=525137" },
            ActivationKey { product: "OneNote", label: None, key: "https://go.microsoft.com/fwlink/p/?linkid=820886" },
        ],
    },
];
