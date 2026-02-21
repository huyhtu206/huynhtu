import { OfficeLanguage, OfficeVersion } from '../types';

export const OFFICE_LANGUAGES: OfficeLanguage[] = [
    { code: 'en-us', name: 'English', region: 'United States' },
    { code: 'ar-sa', name: 'Arabic', region: 'Saudi Arabia' },
    { code: 'bg-bg', name: 'Bulgarian', region: 'Bulgaria' },
    { code: 'cs-cz', name: 'Czech', region: 'Czech Republic' },
    { code: 'da-dk', name: 'Danish', region: 'Denmark' },
    { code: 'de-de', name: 'German', region: 'Germany' },
    { code: 'el-gr', name: 'Greek', region: 'Greece' },
    { code: 'en-gb', name: 'English', region: 'United Kingdom' },
    { code: 'es-es', name: 'Spanish', region: 'Spain' },
    { code: 'es-mx', name: 'Spanish', region: 'Mexico' },
    { code: 'et-ee', name: 'Estonian', region: 'Estonia' },
    { code: 'fi-fi', name: 'Finnish', region: 'Finland' },
    { code: 'fr-ca', name: 'French', region: 'Canada' },
    { code: 'fr-fr', name: 'French', region: 'France' },
    { code: 'he-il', name: 'Hebrew', region: 'Israel' },
    { code: 'hi-in', name: 'Hindi', region: 'India' },
    { code: 'hr-hr', name: 'Croatian', region: 'Croatia' },
    { code: 'hu-hu', name: 'Hungarian', region: 'Hungary' },
    { code: 'id-id', name: 'Indonesian', region: 'Indonesia' },
    { code: 'it-it', name: 'Italian', region: 'Italy' },
    { code: 'ja-jp', name: 'Japanese', region: 'Japan' },
    { code: 'kk-kz', name: 'Kazakh', region: 'Kazakhstan' },
    { code: 'ko-kr', name: 'Korean', region: 'Korea' },
    { code: 'lt-lt', name: 'Lithuanian', region: 'Lithuania' },
    { code: 'lv-lv', name: 'Latvian', region: 'Latvia' },
    { code: 'ms-my', name: 'Malay', region: 'Malaysia' },
    { code: 'nb-no', name: 'Norwegian', region: 'Bokmål' },
    { code: 'nl-nl', name: 'Dutch', region: 'Netherlands' },
    { code: 'pl-pl', name: 'Polish', region: 'Poland' },
    { code: 'pt-br', name: 'Portuguese', region: 'Brazil' },
    { code: 'pt-pt', name: 'Portuguese', region: 'Portugal' },
    { code: 'ro-ro', name: 'Romanian', region: 'Romania' },
    { code: 'ru-ru', name: 'Russian', region: 'Russia' },
    { code: 'sk-sk', name: 'Slovak', region: 'Slovakia' },
    { code: 'sl-si', name: 'Slovenian', region: 'Slovenia' },
    { code: 'sr-latn-rs', name: 'Serbian', region: 'Latin' },
    { code: 'sv-se', name: 'Swedish', region: 'Sweden' },
    { code: 'th-th', name: 'Thai', region: 'Thailand' },
    { code: 'tr-tr', name: 'Turkish', region: 'Turkey' },
    { code: 'uk-ua', name: 'Ukrainian', region: 'Ukraine' },
    { code: 'vi-vn', name: 'Vietnamese', region: 'Vietnam' },
    { code: 'zh-cn', name: 'Chinese', region: 'Simplified' },
    { code: 'zh-tw', name: 'Chinese', region: 'Traditional' },
];

export const OFFICE_VERSIONS: OfficeVersion[] = [
    {
        id: 'm365',
        title: 'Microsoft 365 / Sub',
        products: [
            { id: '0365ProPlusRetail', name: '0365ProPlusRetail', isNew: true, includedApps: ['Access', 'Excel', 'Lync', 'OneNote', 'Outlook', 'PowerPoint', 'Publisher', 'Word', 'OneDrive'], links: { online_x64: '#', online_x86: '#', offline: '#' } },
            { id: '0365AppsBasicRetail', name: '0365AppsBasicRetail', includedApps: ['Excel', 'OneNote', 'PowerPoint', 'Word', 'OneDrive'], links: { online_x64: '#', online_x86: '#', offline: 'NA' } },
            { id: '0365BusinessRetail', name: '0365BusinessRetail', includedApps: ['Access', 'Excel', 'Lync', 'OneNote', 'Outlook', 'PowerPoint', 'Publisher', 'Word', 'OneDrive'], links: { online_x64: '#', online_x86: '#', offline: '#' } },
            { id: '0365EduCloudRetail', name: '0365EduCloudRetail', includedApps: ['Excel', 'OneNote', 'PowerPoint', 'Word', 'OneDrive'], links: { online_x64: '#', online_x86: '#', offline: 'NA' } },
            { id: '0365HomePremRetail', name: '0365HomePremRetail', includedApps: ['Access', 'Excel', 'OneNote', 'Outlook', 'PowerPoint', 'Publisher', 'Word', 'OneDrive'], links: { online_x64: '#', online_x86: '#', offline: '#' } },
        ]
    },
    {
        id: 'office-2024',
        title: 'Office 2024',
        products: [
            { id: 'ProPlus2024Retail', name: 'ProPlus2024Retail', includedApps: ['Access', 'Excel', 'OneNote', 'Outlook', 'PowerPoint', 'Word'], links: { online_x64: '#', online_x86: '#', offline: '#' } },
            { id: 'ProjectPro2024Retail', name: 'ProjectPro2024Retail', includedApps: ['Project'], links: { online_x64: '#', online_x86: '#', offline: '#' } },
            { id: 'VisioPro2024Retail', name: 'VisioPro2024Retail', includedApps: ['Visio'], links: { online_x64: '#', online_x86: '#', offline: '#' } },
        ]
    },
    {
        id: 'office-2021',
        title: 'Office 2021',
        products: [
            { id: 'ProPlus2021Retail', name: 'ProPlus2021Retail', includedApps: ['Access', 'Excel', 'OneNote', 'Outlook', 'PowerPoint', 'Word'], links: { online_x64: '#', online_x86: '#', offline: '#' } },
        ]
    },
    {
        id: 'office-2019',
        title: 'Office 2019',
        products: [
            { id: 'ProPlus2019Retail', name: 'ProPlus2019Retail', includedApps: ['Access', 'Excel', 'OneNote', 'Outlook', 'PowerPoint', 'Word'], links: { online_x64: '#', online_x86: '#', offline: '#' } },
        ]
    },
    {
        id: 'office-2016',
        title: 'Office 2016',
        products: [
            { id: 'ProPlusRetail', name: 'ProPlusRetail', includedApps: ['Access', 'Excel', 'OneNote', 'Outlook', 'PowerPoint', 'Word'], links: { online_x64: '#', online_x86: '#', offline: '#' } },
        ]
    },
    {
        id: 'office-2013',
        title: 'Office 2013',
        products: [
            { id: 'ProPlusRetail', name: 'ProPlusRetail', includedApps: ['Access', 'Excel', 'OneNote', 'Outlook', 'PowerPoint', 'Word'], links: { online_x64: '#', online_x86: '#', offline: '#' } },
        ]
    }
];

export const OFFICE_MSI_VERSIONS: OfficeVersion[] = [
    {
        id: 'msi-2016',
        title: 'Office 2016',
        products: [
            { id: 'msi-2016-proplus', name: 'Office 2016 Professional Plus', isNew: false, includedApps: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Publisher', 'Access', 'Skype for Business'], links: { online_x64: '#', online_x86: '#', offline: '#' } },
            { id: 'msi-2016-project', name: 'Office 2016 Project Professional', isNew: false, includedApps: ['Project'], links: { online_x64: '#', online_x86: '#', offline: '#' } },
            { id: 'msi-2016-visio', name: 'Office 2016 Visio Professional', isNew: false, includedApps: ['Visio'], links: { online_x64: '#', online_x86: '#', offline: '#' } }
        ]
    },
    {
        id: 'msi-2013',
        title: 'Office 2013',
        products: [
            { id: 'msi-2013-proplus', name: 'Office 2013 Professional Plus', isNew: false, includedApps: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Publisher', 'Access', 'Lync'], links: { online_x64: '#', online_x86: '#', offline: '#' } }
        ]
    },
    {
        id: 'msi-2010',
        title: 'Office 2010',
        products: [
            { id: 'msi-2010-proplus', name: 'Office 2010 Professional Plus', isNew: false, includedApps: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Publisher', 'Access', 'Communicator'], links: { online_x64: '#', online_x86: '#', offline: '#' } }
        ]
    }
];

export const OFFICE_MAC_VERSIONS: OfficeVersion[] = [
    {
        id: 'mac-sequoia',
        title: 'Tahoe, Sequoia, Sonoma',
        products: [
            { id: 'mac-suite-teams', name: 'Office suite (with Teams)', isNew: true, includedApps: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'OneNote', 'Teams'], links: { online_x64: 'NA', online_x86: 'NA', offline: 'https://go.microsoft.com/fwlink/p/?linkid=2009112' } },
            { id: 'mac-suite-no-teams', name: 'Office suite (without Teams)', isNew: false, includedApps: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'OneNote'], links: { online_x64: 'NA', online_x86: 'NA', offline: 'https://go.microsoft.com/fwlink/p/?linkid=525133' } },
            { id: 'mac-word', name: 'Word', isNew: false, includedApps: ['Word'], links: { online_x64: 'NA', online_x86: 'NA', offline: 'https://go.microsoft.com/fwlink/p/?linkid=525134' } },
            { id: 'mac-excel', name: 'Excel', isNew: false, includedApps: ['Excel'], links: { online_x64: 'NA', online_x86: 'NA', offline: 'https://go.microsoft.com/fwlink/p/?linkid=525135' } },
            { id: 'mac-ppt', name: 'PowerPoint', isNew: false, includedApps: ['PowerPoint'], links: { online_x64: 'NA', online_x86: 'NA', offline: 'https://go.microsoft.com/fwlink/p/?linkid=525136' } },
            { id: 'mac-outlook', name: 'Outlook', isNew: false, includedApps: ['Outlook'], links: { online_x64: 'NA', online_x86: 'NA', offline: 'https://go.microsoft.com/fwlink/p/?linkid=525137' } },
            { id: 'mac-onenote', name: 'OneNote', isNew: false, includedApps: ['OneNote'], links: { online_x64: 'NA', online_x86: 'NA', offline: 'https://go.microsoft.com/fwlink/p/?linkid=820886' } },
        ]
    },
    {
        id: 'mac-ventura',
        title: 'Ventura',
        products: [{ id: 'mac-suite-13', name: 'Office suite', isNew: false, includedApps: ['All Apps'], links: { online_x64: 'NA', online_x86: 'NA', offline: 'https://go.microsoft.com/fwlink/p/?linkid=2009112' } }]
    },
    {
        id: 'mac-monterey',
        title: 'Monterey',
        products: [{ id: 'mac-suite-12', name: 'Office suite', isNew: false, includedApps: ['All Apps'], links: { online_x64: 'NA', online_x86: 'NA', offline: 'https://go.microsoft.com/fwlink/p/?linkid=2009112' } }]
    },
    {
        id: 'mac-bigsur',
        title: 'Big Sur',
        products: [{ id: 'mac-suite-11', name: 'Office suite', isNew: false, includedApps: ['All Apps'], links: { online_x64: 'NA', online_x86: 'NA', offline: 'https://go.microsoft.com/fwlink/p/?linkid=2009112' } }]
    },
    {
        id: 'mac-catalina',
        title: 'Catalina',
        products: [{ id: 'mac-suite-1015', name: 'Office suite', isNew: false, includedApps: ['All Apps'], links: { online_x64: 'NA', online_x86: 'NA', offline: 'https://go.microsoft.com/fwlink/p/?linkid=2009112' } }]
    },
    {
        id: 'mac-mojave',
        title: 'Mojave',
        products: [{ id: 'mac-suite-1014', name: 'Office suite', isNew: false, includedApps: ['All Apps'], links: { online_x64: 'NA', online_x86: 'NA', offline: 'https://go.microsoft.com/fwlink/p/?linkid=2009112' } }]
    },
    {
        id: 'mac-highsierra',
        title: 'High Sierra',
        products: [{ id: 'mac-suite-1013', name: 'Office suite', isNew: false, includedApps: ['All Apps'], links: { online_x64: 'NA', online_x86: 'NA', offline: 'https://go.microsoft.com/fwlink/p/?linkid=2009112' } }]
    },
    {
        id: 'mac-sierra',
        title: 'Sierra',
        products: [{ id: 'mac-suite-1012', name: 'Office suite', isNew: false, includedApps: ['All Apps'], links: { online_x64: 'NA', online_x86: 'NA', offline: 'https://go.microsoft.com/fwlink/p/?linkid=2009112' } }]
    },
    {
        id: 'mac-elcapitan',
        title: 'El Capitan, Yosemite',
        products: [{ id: 'mac-suite-1011', name: 'Office suite', isNew: false, includedApps: ['All Apps'], links: { online_x64: 'NA', online_x86: 'NA', offline: 'https://go.microsoft.com/fwlink/p/?linkid=2009112' } }]
    }
];
