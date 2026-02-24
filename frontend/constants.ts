import { DocPage, NavItem, ServiceItem, NewsItem, DownloadItem, GhostItem, WindowsEdition, DocSectionType, OfficeDownloaderData, ActivationSection } from './types';
import { DriverItem, DriverPlatform } from './components/DriverPage';


// --- NAVIGATION STRUCTURE ---
export const NAVIGATION: NavItem[] = [
    {
        id: 'folder-1',
        title: 'Windows & Office',
        pages: [
            { id: 'win-11', title: 'Windows 11' },
            { id: 'win-10', title: 'Windows 10' },
            { id: 'win-81', title: 'Windows 8.1' },
            { id: 'win-7', title: 'Windows 7' },
            { id: 'win-vista', title: 'Windows Vista' },
            { id: 'win-xp', title: 'Windows XP' },
            { id: 'win-ltsc', title: 'Windows LTSC' },
            { id: 'win-server', title: 'Windows Server' },
            { id: 'win-arm', title: 'Windows ARM64' },
            { id: 'office-c2r', title: 'Office C2R' },
            { id: 'office-msi', title: 'Office MSI VL' },
            { id: 'office-mac', title: 'Office for MacOS' },
        ]
    },
    {
        id: 'folder-other-os',
        title: 'Hệ điều hành khác',
        pages: [
            { id: 'os-android', title: 'Android x86' },
            { id: 'os-chrome', title: 'Chrome OS' },
        ]
    },
    {
        id: 'folder-storage',
        title: 'Kho dữ liệu',
        pages: [
            { id: 'data-iso', title: 'Kho ISO Gốc' },
            { id: 'data-soft', title: 'Kho Phần Mềm' },
        ]
    },
    {
        id: 'folder-drivers',
        title: 'Driver',
        pages: [
            { id: 'driver-windows', title: 'Driver Windows' },
            { id: 'driver-mac', title: 'Driver MacOS' },
            { id: 'driver-linux', title: 'Driver Linux' },
            { id: 'driver-printer', title: 'Driver Máy in' },
        ]
    },
    { id: 'sponsor', title: 'Ủng hộ / Tài trợ' },

    {
        id: 'folder-faq',
        title: 'Hỏi đáp (FAQ)',
        pages: [
            { id: 'faq-general', title: 'Câu hỏi chung' },
            { id: 'faq-install', title: 'Cài đặt' },
        ]
    },
    {
        id: 'folder-docs',
        title: 'Tài liệu',
        pages: [
            { id: 'docs-start', title: 'Bắt đầu' },
            { id: 'docs-api', title: 'API Reference' },
        ]
    },
    {
        id: 'folder-2',
        title: 'Ghost OS',
        pages: [
            { id: 'ghost-11', title: 'Ghost Windows 11' },
            { id: 'ghost-10', title: 'Ghost Windows 10' },
            { id: 'ghost-8', title: 'Ghost Windows 8.1/8' },
            { id: 'ghost-7', title: 'Ghost Windows 7' },
            { id: 'ghost-vista', title: 'Ghost Windows Vista' },
            { id: 'ghost-xp', title: 'Ghost Windows XP' },
        ]
    },
    {
        id: 'folder-3',
        title: 'Phần mềm',
        pages: [
            { id: 'sw-win', title: 'Phần Mềm Windows' },
            { id: 'sw-mac', title: 'Phần Mềm MacOS' },
            { id: 'sw-linux', title: 'Phần Mềm Linux' },
        ]
    },
    {
        id: 'folder-activation',
        title: 'Kích hoạt bản quyền',
        pages: [
            { id: 'act-hwid', title: 'HWID' },
            { id: 'act-ohook', title: 'Ohook' },
            { id: 'act-unsupported', title: 'Sản phẩm không còn hỗ trợ' },
        ]
    },
    {
        id: 'folder-8',
        title: 'Thủ thuật',
        pages: [
            { id: 'tip-win', title: 'Thủ Thuật Windows' },
            { id: 'tip-mac', title: 'Thủ Thuật MacOS' },
            { id: 'tip-office', title: 'Thủ Thuật Office' },
            { id: 'tip-browser', title: 'Thủ Thuật Trình Duyệt' },
            { id: 'tip-mobile', title: 'Thủ Thuật Điện Thoại' },
        ]
    },
    {
        id: 'folder-10',
        title: 'Tin tức',
        pages: [
            { id: 'news-tech', title: 'Tin Tức Công Nghệ' },
            { id: 'news-review', title: 'Đánh Giá & So Sánh' },
            { id: 'news-new', title: 'Phần Mềm Mới Ra Mắt' },
            { id: 'news-site', title: 'Thông Báo Website' },
        ]
    }
];

// --- LIST DATA ---

export const SERVICES_LIST: ServiceItem[] = [
    {
        title: 'Cài Win Online',
        description: 'Hỗ trợ cài đặt Windows, Office và phần mềm qua UltraView/TeamViewer.',
        price: '100.000đ / máy',
        features: ['Bảo hành 1 tháng', 'Cài đầy đủ driver', 'Tối ưu hóa hệ thống', 'Hỗ trợ 24/7'],
        icon: 'remote',
        link: '#'
    },
    {
        title: 'Build PC Gaming/Work',
        description: 'Tư vấn cấu hình máy tính theo nhu cầu và ngân sách tối ưu nhất.',
        price: 'Miễn phí tư vấn',
        features: ['Tối ưu hiệu năng/giá', 'Hỗ trợ lắp đặt tận nơi', 'Cài sẵn Windows & Soft', 'Bảo hành chính hãng'],
        icon: 'cpu',
        link: '#'
    },
    {
        title: 'Mua Key Bản Quyền',
        description: 'Cung cấp key Windows, Office, Kaspersky, IDM chính hãng giá rẻ.',
        price: 'Từ 150.000đ',
        features: ['Bảo hành vĩnh viễn', 'Kích hoạt online', 'Hỗ trợ lỗi 1 đổi 1', 'Uy tín chất lượng'],
        icon: 'key',
        link: '#'
    }
];

export const NEWS_LIST: NewsItem[] = [
    {
        id: 'win11-tpm-bypass',
        title: 'Hướng dẫn cài đặt Windows 11 không cần TPM 2.0',
        date: '24/10/2023',
        category: 'Thủ thuật',
        author: 'HuynhTu',
        tags: ['Windows 11', 'Tips', 'Installation'],
        summary: 'Cách vượt qua yêu cầu phần cứng khắt khe của Microsoft để cài Win 11 trên máy tính đời cũ một cách an toàn.',
        content: `
        <p>Windows 11 có những yêu cầu phần cứng khá khắt khe, đặc biệt là chip TPM 2.0. Tuy nhiên, với những máy tính đời cũ, bạn hoàn toàn có thể cài đặt hệ điều hành mới nhất này bằng một số thủ thuật đơn giản.</p>
        
        <h3>Cách 1: Sử dụng Rufus</h3>
        <p>Rufus là công cụ tạo USB Boot phổ biến nhất hiện nay. Phiên bản mới của Rufus đã tích hợp sẵn tính năng loại bỏ kiểm tra TPM 2.0 và Secure Boot.</p>
        <ol>
            <li>Tải file ISO Windows 11 mới nhất.</li>
            <li>Mở Rufus, chọn file ISO.</li>
            <li>Trong phần <strong>Image Option</strong>, chọn <strong>Extended Windows 11 Installation (no TPM / no Secure Boot)</strong>.</li>
            <li>Bấm Start để bắt đầu tạo USB.</li>
        </ol>

        <h3>Cách 2: Chỉnh sửa Registry trong quá trình cài đặt</h3>
        <p>Khi màn hình cài đặt báo lỗi "This PC can't run Windows 11", hãy làm như sau:</p>
        <ul>
            <li>Nhấn <strong>Shift + F10</strong> để mở CMD.</li>
            <li>Gõ <code>regedit</code> và nhấn Enter.</li>
            <li>Truy cập: <code>HKEY_LOCAL_MACHINE\\SYSTEM\\Setup</code></li>
            <li>Tạo key mới tên <code>LabConfig</code>.</li>
            <li>Tạo các giá trị DWORD: <code>BypassTPMCheck</code>, <code>BypassSecureBootCheck</code> và đặt giá trị là 1.</li>
        </ul>
        <p>Chúc các bạn thành công!</p>
      `,
        image: 'https://images.unsplash.com/photo-1633113088947-013686e5d90c?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'top-antivirus-2024',
        title: 'Top 5 phần mềm diệt virus miễn phí tốt nhất 2024',
        date: '20/10/2023',
        category: 'Bảo mật',
        author: 'Admin',
        tags: ['Security', 'Antivirus', 'Free'],
        summary: 'Đánh giá chi tiết các phần mềm bảo vệ máy tính của bạn mà không tốn phí bản quyền hàng năm.',
        content: `
        <p>Bảo vệ máy tính không nhất thiết phải tốn kém. Dưới đây là danh sách các phần mềm diệt virus miễn phí tốt nhất năm 2024:</p>
        <h3>1. Kaspersky Free</h3>
        <p>Được đánh giá cao nhất về khả năng phát hiện malware với engine giống hệt bản trả phí. Nhẹ và ít quảng cáo.</p>
        <h3>2. Bitdefender Antivirus Free</h3>
        <p>Giao diện cực kỳ đơn giản, "cài và quên". Tự động quét và bảo vệ thời gian thực.</p>
        <h3>3. Avast Free Antivirus</h3>
        <p>Nhiều tính năng đi kèm nhưng hơi nặng máy và nhiều pop-up quảng cáo.</p>
      `,
        image: 'https://images.unsplash.com/photo-1563206767-5b1d97289374?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'win11-moment-4',
        title: 'Microsoft ra mắt bản cập nhật Moment 4 cho Windows 11',
        date: '15/10/2023',
        category: 'Tin tức',
        author: 'Microsoft',
        tags: ['News', 'Update', 'Windows'],
        summary: 'Tích hợp Copilot AI, cải tiến File Explorer và nhiều tính năng mới giúp nâng cao hiệu suất làm việc.',
        content: `
        <p>Bản cập nhật Moment 4 mang đến hàng loạt thay đổi đáng giá:</p>
        <ul>
            <li><strong>Windows Copilot:</strong> Trợ lý AI tích hợp sâu vào hệ thống.</li>
            <li><strong>File Explorer mới:</strong> Giao diện hiện đại hơn, hỗ trợ thư viện ảnh tốt hơn.</li>
            <li><strong>Paint:</strong> Hỗ trợ layer và tách nền bằng AI.</li>
        </ul>
      `,
        image: 'https://images.unsplash.com/photo-1642132652859-3ef5a9290377?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'optimize-ssd',
        title: 'Cách tối ưu hóa SSD để máy tính chạy nhanh hơn',
        date: '10/10/2023',
        category: 'Phần cứng',
        author: 'TechGuru',
        tags: ['Hardware', 'SSD', 'Optimization'],
        summary: 'Những thiết lập quan trọng giúp kéo dài tuổi thọ và tăng tốc độ ổ cứng SSD của bạn.',
        content: `
        <p>SSD đã nhanh, nhưng cấu hình sai có thể làm giảm tuổi thọ của nó.</p>
        <ol>
            <li>Bật TRIM: Đảm bảo lệnh TRIM đang hoạt động để SSD xóa dữ liệu rác hiệu quả.</li>
            <li>Tắt Defragmentation: Không bao giờ chống phân mảnh SSD như HDD truyền thống.</li>
            <li>Cập nhật Firmware: Luôn giữ Firmware của SSD ở bản mới nhất từ nhà sản xuất.</li>
        </ol>
      `,
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800'
    }
];

export const SOFTWARE_DATABASE: DownloadItem[] = [
    // Essentials / Utilities
    {
        title: 'Unikey', version: '4.6 RC2', size: '1 MB', description: 'Bộ gõ tiếng Việt nhẹ, ổn định.', link: 'https://www.unikey.org/', icon: 'keyboard', category: 'Utilities',
        platforms: ['windows', 'linux'], commands: { windows: 'winget install Unikey.Unikey' }
    },
    {
        title: 'WinRAR', version: '6.24', size: '5 MB', description: 'Trình giải nén file mạnh mẽ.', link: 'https://www.rarlab.com/', icon: 'archive', category: 'Utilities',
        platforms: ['windows'], commands: { windows: 'winget install RARLab.WinRAR' }
    },
    {
        title: '7-Zip', version: '23.01', size: '1.5 MB', description: 'Phần mềm nén và giải nén miễn phí.', link: 'https://www.7-zip.org/', icon: 'archive', category: 'Utilities',
        platforms: ['windows', 'linux'], commands: { windows: 'winget install 7zip.7zip' }
    },
    // Communication
    {
        title: 'AnyDesk', version: 'Latest', size: '5 MB', description: 'Điều khiển máy tính từ xa.', link: 'https://anydesk.com/', icon: 'monitor', category: 'Communication',
        platforms: ['windows', 'mac', 'linux']
    },
    {
        title: 'UltraViewer', version: '6.6', size: '3 MB', description: 'Phần mềm điều khiển máy tính Việt Nam.', link: 'https://ultraviewer.net/', icon: 'monitor', category: 'Communication',
        platforms: ['windows']
    },
    {
        title: 'Zoom', version: 'Latest', size: '80 MB', description: 'Nền tảng họp trực tuyến.', link: '#', icon: 'monitor', category: 'Communication',
        platforms: ['windows', 'mac', 'linux']
    },
    {
        title: 'Zalo', version: 'Latest', size: '90 MB', description: 'Ứng dụng nhắn tin phổ biến.', link: 'https://zalo.me/pc', icon: 'music', category: 'Communication',
        platforms: ['windows', 'mac']
    },
    // Browsers
    {
        title: 'Google Chrome', version: 'Latest', size: 'Installer', description: 'Trình duyệt web phổ biến nhất.', link: 'https://www.google.com/chrome/', icon: 'globe', category: 'Web Browsers',
        platforms: ['windows', 'mac', 'linux']
    },
    {
        title: 'Firefox', version: 'Latest', size: 'Installer', description: 'Trình duyệt web mã nguồn mở.', link: '#', icon: 'globe', category: 'Web Browsers',
        platforms: ['windows', 'mac', 'linux']
    },
    // Multimedia
    {
        title: 'VLC Player', version: '3.0.18', size: '40 MB', description: 'Trình phát đa phương tiện mã nguồn mở.', link: 'https://www.videolan.org/', icon: 'play', category: 'Multimedia',
        platforms: ['windows', 'mac', 'linux']
    },
    // Graphics
    {
        title: 'Adobe Photoshop', version: '2024', size: '4 GB', description: 'Phần mềm chỉnh sửa ảnh chuyên nghiệp.', link: '#', icon: 'image', category: 'Graphics',
        platforms: ['windows', 'mac']
    },
    // Security
    {
        title: 'Kaspersky Free', version: 'Latest', size: '3 MB', description: 'Phần mềm diệt Virus miễn phí.', link: '#', icon: 'shield', category: 'Security',
        platforms: ['windows']
    }
];

export const GHOST_OS_DATABASE: GhostItem[] = [
    {
        id: 'ghost-win11-v4',
        title: 'Ghost Win 11 Pro 23H2 (No Soft)',
        version: 'v4.0',
        author: 'HuynhTu',
        description: 'Bản Ghost Win 11 nhẹ mượt nhất, giữ nguyên Store và Defender.',
        tags: ['Win 11', 'Lite', 'Gaming'],
        arch: 'x64',
        boot: 'UEFI',
        files: [{ type: 'TIB', size: '4.8 GB', link: '#', md5: 'A1B2...' }],
        softwareList: ['WinRAR', 'Unikey'],
        features: ['Tối ưu hóa RAM'],
        image: 'https://images.unsplash.com/photo-1633113088947-013686e5d90c?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 'ghost-win10-full',
        title: 'Ghost Win 10 Pro 22H2 Full Soft',
        version: 'v5.2',
        author: 'HuynhTu',
        description: 'Bản ổn định nhất cho văn phòng, tích hợp sẵn Office 2021.',
        tags: ['Win 10', 'Full Soft'],
        arch: 'x64',
        boot: 'Both',
        files: [{ type: 'TIB', size: '6.5 GB', link: '#', md5: '1234...' }],
        softwareList: ['Office 2021', 'Chrome'],
        features: ['Tắt Update'],
        image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=600'
    }
];

// --- WINDOWS DATA ---
const WIN11_EDITIONS: WindowsEdition[] = [
    {
        id: 'consumer-25h2',
        title: 'Windows 11 Consumer',
        subTitle: '25H2',
        msProductId: 2307,
        buildVersion: 'Updated Feb 2026',
        isoList: [
            { language: 'Arabic', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'ar-sa_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Bulgarian', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'bg-bg_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Czech', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'cs-cz_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Danish', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'da-dk_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'German', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'de-de_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Greek', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'el-gr_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'English-United Kingdom', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'en-gb_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'English', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'en-us_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Spanish', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'es-es_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Spanish-Mexico', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'es-mx_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Estonian', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'et-ee_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Finnish', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'fi-fi_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'French-Canada', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'fr-ca_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'French', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'fr-fr_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Hebrew', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'he-il_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Croatian', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'hr-hr_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Hungarian', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'hu-hu_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Italian', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'it-it_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Japanese', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'ja-jp_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Korean', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'ko-kr_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Lithuanian', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'lt-lt_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Latvian', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'lv-lv_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Norwegian-Bokmal', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'nb-no_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Dutch-Netherlands', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'nl-nl_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Polish', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'pl-pl_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Portuguese-Brazil', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'pt-br_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Portuguese-Portugal', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'pt-pt_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Romanian', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'ro-ro_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Russian', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'ru-ru_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Slovak', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'sk-sk_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Slovenian', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'sl-si_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Serbian-Latin', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'sr-latn-rs_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Swedish', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'sv-se_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Thai', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'th-th_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Turkish', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'tr-tr_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Ukranian', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'uk-ua_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Chinese-Simplified', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'zh-cn_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
            { language: 'Chinese-Traditional', arch: 'x64', version: '25H2', sha256: 'c975b6ac', filename: 'zh-tw_windows_11_consumer_editions_version_25h2_updated_feb_2026_x64_dvd_c975b6ac.iso', link: '#' },
        ]
    },
    {
        id: 'business-25h2',
        title: 'Windows 11 Business',
        subTitle: '25H2',
        msProductId: 2307,
        buildVersion: 'Updated Feb 2026',
        isoList: [
            { language: 'English', arch: 'x64', version: '25H2', sha256: 'B1C2D3...', filename: 'en-us_windows_11_business_editions_version_25h2_updated_feb_2026_x64_dvd.iso', link: '#' },
            { language: 'English', arch: 'arm64', version: '25H2', sha256: 'E5F6G7...', filename: 'en-us_windows_11_business_editions_version_25h2_arm64.iso', link: '#' },
        ]
    },
    {
        id: 'consumer-26h1',
        title: 'Windows 11 Consumer',
        subTitle: '26H1',
        buildVersion: 'Preview Release',
        isoList: [
            { language: 'English', arch: 'x64', version: '26H1', sha256: 'P1R2E3...', filename: 'en-us_windows_11_consumer_editions_version_26h1_preview_x64.iso', link: '#' },
        ]
    },
    {
        id: 'business-26h1',
        title: 'Windows 11 Business',
        subTitle: '26H1',
        buildVersion: 'Preview Release',
        isoList: [
            { language: 'English', arch: 'x64', version: '26H1', sha256: 'B6U7S8...', filename: 'en-us_windows_11_business_editions_version_26h1_preview_x64.iso', link: '#' },
        ]
    }
];

const WIN10_EDITIONS: WindowsEdition[] = [
    {
        id: 'consumer',
        title: 'Windows 10 Consumer',
        subTitle: '22H2',
        msProductId: 1904,
        buildVersion: 'Build - 19045.6456 (Oct 2025)',
        isoList: [
            { language: 'English', arch: 'x64', version: '22H2', sha256: '38efd00d...', filename: 'en-us_windows_10_consumer_editions_version_22h2_updated_oct_2025_x64_dvd_38efd00d.iso', link: '#' },
            { language: 'English', arch: 'x86', version: '22H2', sha256: '38efd00d...', filename: 'en-us_windows_10_consumer_editions_version_22h2_updated_oct_2025_x86_dvd_38efd00d.iso', link: '#' },
            { language: 'Vietnamese', arch: 'x64', version: '22H2', sha256: 'e5f6g7h8...', filename: 'vi_windows_10_consumer_editions_version_22h2.iso', link: '#' },
        ]
    },
    {
        id: 'business',
        title: 'Windows 10 Business',
        subTitle: '22H2',
        buildVersion: 'Build - 19045.6456',
        isoList: [
            { language: 'English', arch: 'x64', version: '22H2', sha256: 'W10BUS64', filename: 'en-us_windows_10_business_editions_version_22h2_updated_oct_2025_x64.iso', link: '#' },
            { language: 'English', arch: 'x86', version: '22H2', sha256: 'W10BUS86', filename: 'en-us_windows_10_business_editions_version_22h2_updated_oct_2025_x86.iso', link: '#' },
        ]
    },
    {
        id: 'ltsc',
        title: 'Windows 10 LTSC',
        subTitle: '2021',
        buildVersion: 'Build - 19044.1288',
        isoList: [
            { language: 'English', arch: 'x64', version: '2021', sha256: 'LTSC2021', filename: 'en-us_windows_10_enterprise_ltsc_2021_x64_dvd.iso', link: '#' },
        ]
    }
];

const WIN7_EDITIONS: WindowsEdition[] = [
    {
        id: 'sp1-n-embedded',
        title: 'Windows 7 SP1',
        subTitle: 'N / Embedded Standard',
        buildVersion: 'Build - 7601 (Service Pack 1)',
        isoList: [
            { language: 'English', arch: 'x64', version: 'SP1', sha256: '677332', filename: 'en_windows_7_ultimate_with_sp1_x64_dvd_u_677332.iso', link: '#' },
            { language: 'English', arch: 'x86', version: 'SP1', sha256: '677460', filename: 'en_windows_7_ultimate_with_sp1_x86_dvd_u_677460.iso', link: '#' },
        ]
    },
    {
        id: 'main-sp1',
        title: 'Windows 7 Retail',
        subTitle: 'Ultimate / Ent / Pro / Home / Starter',
        buildVersion: 'Build - 7601',
        isoList: [
            { language: 'Arabic', arch: 'x64', version: 'SP1', sha256: '677345', filename: 'ar_windows_7_ultimate_with_sp1_x64_dvd_u_677345.iso', link: '#' },
            { language: 'Arabic', arch: 'x86', version: 'SP1', sha256: '677448', filename: 'ar_windows_7_ultimate_with_sp1_x86_dvd_u_677448.iso', link: '#' },
            { language: 'Bulgarian', arch: 'x64', version: 'SP1', sha256: '677363', filename: 'bg_windows_7_ultimate_with_sp1_x64_dvd_u_677363.iso', link: '#' },
            { language: 'Bulgarian', arch: 'x86', version: 'SP1', sha256: '677450', filename: 'bg_windows_7_ultimate_with_sp1_x86_dvd_u_677450.iso', link: '#' },
            { language: 'Chinese - Hong Kong SAR', arch: 'x64', version: 'SP1', sha256: '677411', filename: 'hk_windows_7_ultimate_with_sp1_x64_dvd_u_677411.iso', link: '#' },
            { language: 'Chinese - Hong Kong SAR', arch: 'x86', version: 'SP1', sha256: '677487', filename: 'hk_windows_7_ultimate_with_sp1_x86_dvd_u_677487.iso', link: '#' },
            { language: 'Chinese - Simplified', arch: 'x64', version: 'SP1', sha256: '677408', filename: 'cn_windows_7_ultimate_with_sp1_x64_dvd_u_677408.iso', link: '#' },
            { language: 'Chinese - Simplified', arch: 'x86', version: 'SP1', sha256: '677486', filename: 'cn_windows_7_ultimate_with_sp1_x86_dvd_u_677486.iso', link: '#' },
            { language: 'Chinese - Traditional', arch: 'x64', version: 'SP1', sha256: '677414', filename: 'tw_windows_7_ultimate_with_sp1_x64_dvd_u_677414.iso', link: '#' },
            { language: 'Chinese - Traditional', arch: 'x86', version: 'SP1', sha256: '677488', filename: 'tw_windows_7_ultimate_with_sp1_x86_dvd_u_677488.iso', link: '#' },
            { language: 'Croatian', arch: 'x64', version: 'SP1', sha256: '677324', filename: 'hr_windows_7_ultimate_with_sp1_x64_dvd_u_677324.iso', link: '#' },
            { language: 'Croatian', arch: 'x86', version: 'SP1', sha256: '677438', filename: 'hr_windows_7_ultimate_with_sp1_x86_dvd_u_677438.iso', link: '#' },
            { language: 'Czech', arch: 'x64', version: 'SP1', sha256: '677376', filename: 'cs_windows_7_ultimate_with_sp1_x64_dvd_u_677376.iso', link: '#' },
            { language: 'Czech', arch: 'x86', version: 'SP1', sha256: '677452', filename: 'cs_windows_7_ultimate_with_sp1_x86_dvd_u_677452.iso', link: '#' },
            { language: 'Danish', arch: 'x64', version: 'SP1', sha256: '677294', filename: 'da_windows_7_ultimate_with_sp1_x64_dvd_u_677294.iso', link: '#' },
            { language: 'Danish', arch: 'x86', version: 'SP1', sha256: '677454', filename: 'da_windows_7_ultimate_with_sp1_x86_dvd_u_677454.iso', link: '#' },
            { language: 'Dutch', arch: 'x64', version: 'SP1', sha256: '677325', filename: 'nl_windows_7_ultimate_with_sp1_x64_dvd_u_677325.iso', link: '#' },
            { language: 'Dutch', arch: 'x86', version: 'SP1', sha256: '677453', filename: 'nl_windows_7_ultimate_with_sp1_x86_dvd_u_677453.iso', link: '#' },
            { language: 'English', arch: 'x64', version: 'SP1', sha256: '677332', filename: 'en_windows_7_ultimate_with_sp1_x64_dvd_u_677332.iso', link: '#' },
            { language: 'English', arch: 'x86', version: 'SP1', sha256: '677460', filename: 'en_windows_7_ultimate_with_sp1_x86_dvd_u_677460.iso', link: '#' },
            { language: 'Estonian', arch: 'x64', version: 'SP1', sha256: '677368', filename: 'et_windows_7_ultimate_with_sp1_x64_dvd_u_677368.iso', link: '#' },
            { language: 'Estonian', arch: 'x86', version: 'SP1', sha256: '677464', filename: 'et_windows_7_ultimate_with_sp1_x86_dvd_u_677464.iso', link: '#' },
            { language: 'Finnish', arch: 'x64', version: 'SP1', sha256: '677378', filename: 'fi_windows_7_ultimate_with_sp1_x64_dvd_u_677378.iso', link: '#' },
            { language: 'Finnish', arch: 'x86', version: 'SP1', sha256: '677466', filename: 'fi_windows_7_ultimate_with_sp1_x86_dvd_u_677466.iso', link: '#' },
            { language: 'French', arch: 'x64', version: 'SP1', sha256: '677299', filename: 'fr_windows_7_ultimate_with_sp1_x64_dvd_u_677299.iso', link: '#' },
            { language: 'French', arch: 'x86', version: 'SP1', sha256: '677434', filename: 'fr_windows_7_ultimate_with_sp1_x86_dvd_u_677434.iso', link: '#' },
            { language: 'German', arch: 'x64', version: 'SP1', sha256: '677306', filename: 'de_windows_7_ultimate_with_sp1_x64_dvd_u_677306.iso', link: '#' },
            { language: 'German', arch: 'x86', version: 'SP1', sha256: '677456', filename: 'de_windows_7_ultimate_with_sp1_x86_dvd_u_677456.iso', link: '#' },
            { language: 'Greek', arch: 'x64', version: 'SP1', sha256: '677318', filename: 'el_windows_7_ultimate_with_sp1_x64_dvd_u_677318.iso', link: '#' },
            { language: 'Greek', arch: 'x86', version: 'SP1', sha256: '677458', filename: 'el_windows_7_ultimate_with_sp1_x86_dvd_u_677458.iso', link: '#' },
            { language: 'Hebrew', arch: 'x64', version: 'SP1', sha256: '677312', filename: 'he_windows_7_ultimate_with_sp1_x64_dvd_u_677312.iso', link: '#' },
            { language: 'Hebrew', arch: 'x86', version: 'SP1', sha256: '677436', filename: 'he_windows_7_ultimate_with_sp1_x86_dvd_u_677436.iso', link: '#' },
            { language: 'Hungarian', arch: 'x64', version: 'SP1', sha256: '677338', filename: 'hu_windows_7_ultimate_with_sp1_x64_dvd_u_677338.iso', link: '#' },
            { language: 'Hungarian', arch: 'x86', version: 'SP1', sha256: '677441', filename: 'hu_windows_7_ultimate_with_sp1_x86_dvd_u_677441.iso', link: '#' },
            { language: 'Italian', arch: 'x64', version: 'SP1', sha256: '677356', filename: 'it_windows_7_ultimate_with_sp1_x64_dvd_u_677356.iso', link: '#' },
            { language: 'Italian', arch: 'x86', version: 'SP1', sha256: '677443', filename: 'it_windows_7_ultimate_with_sp1_x86_dvd_u_677443.iso', link: '#' },
            { language: 'Japanese', arch: 'x64', version: 'SP1', sha256: '677372', filename: 'ja_windows_7_ultimate_with_sp1_x64_dvd_u_677372.iso', link: '#' },
            { language: 'Japanese', arch: 'x86', version: 'SP1', sha256: '677445', filename: 'ja_windows_7_ultimate_with_sp1_x86_dvd_u_677445.iso', link: '#' },
            { language: 'Korean', arch: 'x64', version: 'SP1', sha256: '677502', filename: 'ko_windows_7_ultimate_k_with_sp1_x64_dvd_u_677502.iso', link: '#' },
            { language: 'Korean', arch: 'x86', version: 'SP1', sha256: '677508', filename: 'ko_windows_7_ultimate_k_with_sp1_x86_dvd_u_677508.iso', link: '#' },
            { language: 'Latvian', arch: 'x64', version: 'SP1', sha256: '677302', filename: 'lv_windows_7_ultimate_with_sp1_x64_dvd_u_677302.iso', link: '#' },
            { language: 'Latvian', arch: 'x86', version: 'SP1', sha256: '677449', filename: 'lv_windows_7_ultimate_with_sp1_x86_dvd_u_677449.iso', link: '#' },
            { language: 'Lithuanian', arch: 'x64', version: 'SP1', sha256: '677379', filename: 'lt_windows_7_ultimate_with_sp1_x64_dvd_u_677379.iso', link: '#' },
            { language: 'Lithuanian', arch: 'x86', version: 'SP1', sha256: '677447', filename: 'lt_windows_7_ultimate_with_sp1_x86_dvd_u_677447.iso', link: '#' },
            { language: 'Norwegian', arch: 'x64', version: 'SP1', sha256: '677314', filename: 'no_windows_7_ultimate_with_sp1_x64_dvd_u_677314.iso', link: '#' },
            { language: 'Norwegian', arch: 'x86', version: 'SP1', sha256: '677451', filename: 'no_windows_7_ultimate_with_sp1_x86_dvd_u_677451.iso', link: '#' },
            { language: 'Polish', arch: 'x64', version: 'SP1', sha256: '677341', filename: 'pl_windows_7_ultimate_with_sp1_x64_dvd_u_677341.iso', link: '#' },
            { language: 'Polish', arch: 'x86', version: 'SP1', sha256: '677455', filename: 'pl_windows_7_ultimate_with_sp1_x86_dvd_u_677455.iso', link: '#' },
            { language: 'Portuguese - Brazil', arch: 'x64', version: 'SP1', sha256: '677358', filename: 'pt_windows_7_ultimate_with_sp1_x64_dvd_u_677358.iso', link: '#' },
            { language: 'Portuguese - Brazil', arch: 'x86', version: 'SP1', sha256: '677457', filename: 'pt_windows_7_ultimate_with_sp1_x86_dvd_u_677457.iso', link: '#' },
            { language: 'Portuguese - Portugal', arch: 'x64', version: 'SP1', sha256: '677373', filename: 'pp_windows_7_ultimate_with_sp1_x64_dvd_u_677373.iso', link: '#' },
            { language: 'Portuguese - Portugal', arch: 'x86', version: 'SP1', sha256: '677459', filename: 'pp_windows_7_ultimate_with_sp1_x86_dvd_u_677459.iso', link: '#' },
            { language: 'Romanian', arch: 'x64', version: 'SP1', sha256: '677380', filename: 'ro_windows_7_ultimate_with_sp1_x64_dvd_u_677380.iso', link: '#' },
            { language: 'Romanian', arch: 'x86', version: 'SP1', sha256: '677461', filename: 'ro_windows_7_ultimate_with_sp1_x86_dvd_u_677461.iso', link: '#' },
            { language: 'Russian', arch: 'x64', version: 'SP1', sha256: '677391', filename: 'ru_windows_7_ultimate_with_sp1_x64_dvd_u_677391.iso', link: '#' },
            { language: 'Russian', arch: 'x86', version: 'SP1', sha256: '677463', filename: 'ru_windows_7_ultimate_with_sp1_x86_dvd_u_677463.iso', link: '#' },
            { language: 'Serbian', arch: 'x64', version: 'SP1', sha256: '677398', filename: 'sr_windows_7_ultimate_with_sp1_x64_dvd_u_677398.iso', link: '#' },
            { language: 'Serbian', arch: 'x86', version: 'SP1', sha256: '677468', filename: 'sr_windows_7_ultimate_with_sp1_x86_dvd_u_677468.iso', link: '#' },
            { language: 'Slovak', arch: 'x64', version: 'SP1', sha256: '677393', filename: 'sk_windows_7_ultimate_with_sp1_x64_dvd_u_677393.iso', link: '#' },
            { language: 'Slovak', arch: 'x86', version: 'SP1', sha256: '677465', filename: 'sk_windows_7_ultimate_with_sp1_x86_dvd_u_677465.iso', link: '#' },
            { language: 'Slovenian', arch: 'x64', version: 'SP1', sha256: '677396', filename: 'sl_windows_7_ultimate_with_sp1_x64_dvd_u_677396.iso', link: '#' },
            { language: 'Slovenian', arch: 'x86', version: 'SP1', sha256: '677467', filename: 'sl_windows_7_ultimate_with_sp1_x86_dvd_u_677467.iso', link: '#' },
            { language: 'Spanish', arch: 'x64', version: 'SP1', sha256: '677350', filename: 'es_windows_7_ultimate_with_sp1_x64_dvd_u_677350.iso', link: '#' },
            { language: 'Spanish', arch: 'x86', version: 'SP1', sha256: '677462', filename: 'es_windows_7_ultimate_with_sp1_x86_dvd_u_677462.iso', link: '#' },
            { language: 'Swedish', arch: 'x64', version: 'SP1', sha256: '677400', filename: 'sv_windows_7_ultimate_with_sp1_x64_dvd_u_677400.iso', link: '#' },
            { language: 'Swedish', arch: 'x86', version: 'SP1', sha256: '677482', filename: 'sv_windows_7_ultimate_with_sp1_x86_dvd_u_677482.iso', link: '#' },
            { language: 'Thai', arch: 'x64', version: 'SP1', sha256: '677402', filename: 'th_windows_7_ultimate_with_sp1_x64_dvd_u_677402.iso', link: '#' },
            { language: 'Thai', arch: 'x86', version: 'SP1', sha256: '677483', filename: 'th_windows_7_ultimate_with_sp1_x86_dvd_u_677483.iso', link: '#' },
            { language: 'Turkish', arch: 'x64', version: 'SP1', sha256: '677404', filename: 'tr_windows_7_ultimate_with_sp1_x64_dvd_u_677404.iso', link: '#' },
            { language: 'Turkish', arch: 'x86', version: 'SP1', sha256: '677484', filename: 'tr_windows_7_ultimate_with_sp1_x86_dvd_u_677484.iso', link: '#' },
            { language: 'Ukrainian', arch: 'x64', version: 'SP1', sha256: '677406', filename: 'uk_windows_7_ultimate_with_sp1_x64_dvd_u_677406.iso', link: '#' },
            { language: 'Ukrainian', arch: 'x86', version: 'SP1', sha256: '677485', filename: 'uk_windows_7_ultimate_with_sp1_x86_dvd_u_677485.iso', link: '#' },
        ]
    }
];

const WIN81_EDITIONS: WindowsEdition[] = [
    {
        id: 'update-3-n-embedded',
        title: 'Windows 8.1 Update 3',
        subTitle: 'N / Embedded version',
        buildVersion: 'Build - 9600 (Nov 2014)',
        isoList: [
            { language: 'Arabic', arch: 'x64', version: 'Update 3', sha256: '6051471', filename: 'ar_windows_8.1_with_update_x64_dvd_6051471.iso', link: '#' },
            { language: 'Arabic', arch: 'x86', version: 'Update 3', sha256: '6051513', filename: 'ar_windows_8.1_with_update_x86_dvd_6051513.iso', link: '#' },
            { language: 'Bulgarian', arch: 'x64', version: 'Update 3', sha256: '6051472', filename: 'bg_windows_8.1_with_update_x64_dvd_6051472.iso', link: '#' },
            { language: 'Bulgarian', arch: 'x86', version: 'Update 3', sha256: '6051520', filename: 'bg_windows_8.1_with_update_x86_dvd_6051520.iso', link: '#' },
            { language: 'Chinese - Hong Kong SAR', arch: 'x64', version: 'Update 3', sha256: '6051474', filename: 'hk_windows_8.1_with_update_x64_dvd_6051474.iso', link: '#' },
            { language: 'Chinese - Hong Kong SAR', arch: 'x86', version: 'Update 3', sha256: '6051524', filename: 'hk_windows_8.1_with_update_x86_dvd_6051524.iso', link: '#' },
            { language: 'Chinese - Simplified', arch: 'x64', version: 'Update 3', sha256: '6051473', filename: 'cn_windows_8.1_with_update_x64_dvd_6051473.iso', link: '#' },
            { language: 'Chinese - Simplified', arch: 'x86', version: 'Update 3', sha256: '6051523', filename: 'cn_windows_8.1_with_update_x86_dvd_6051523.iso', link: '#' },
            { language: 'Chinese - Traditional', arch: 'x64', version: 'Update 3', sha256: '6051475', filename: 'tw_windows_8.1_with_update_x64_dvd_6051475.iso', link: '#' },
            { language: 'Chinese - Traditional', arch: 'x86', version: 'Update 3', sha256: '6051525', filename: 'tw_windows_8.1_with_update_x86_dvd_6051525.iso', link: '#' },
            { language: 'Croatian', arch: 'x64', version: 'Update 3', sha256: '6051476', filename: 'hr_windows_8.1_with_update_x64_dvd_6051476.iso', link: '#' },
            { language: 'Croatian', arch: 'x86', version: 'Update 3', sha256: '6051529', filename: 'hr_windows_8.1_with_update_x86_dvd_6051529.iso', link: '#' },
            { language: 'Czech', arch: 'x64', version: 'Update 3', sha256: '6051477', filename: 'cs_windows_8.1_with_update_x64_dvd_6051477.iso', link: '#' },
            { language: 'Czech', arch: 'x86', version: 'Update 3', sha256: '6051535', filename: 'cs_windows_8.1_with_update_x86_dvd_6051535.iso', link: '#' },
            { language: 'Danish', arch: 'x64', version: 'Update 3', sha256: '6051478', filename: 'da_windows_8.1_with_update_x64_dvd_6051478.iso', link: '#' },
            { language: 'Danish', arch: 'x86', version: 'Update 3', sha256: '6051541', filename: 'da_windows_8.1_with_update_x86_dvd_6051541.iso', link: '#' },
            { language: 'Dutch', arch: 'x64', version: 'Update 3', sha256: '6051479', filename: 'nl_windows_8.1_with_update_x64_dvd_6051479.iso', link: '#' },
            { language: 'Dutch', arch: 'x86', version: 'Update 3', sha256: '6051545', filename: 'nl_windows_8.1_with_update_x86_dvd_6051545.iso', link: '#' },
            { language: 'English', arch: 'x64', version: 'Update 3', sha256: '6051480', filename: 'en_windows_8.1_with_update_x64_dvd_6051480.iso', link: '#' },
            { language: 'English', arch: 'x86', version: 'Update 3', sha256: '6051550', filename: 'en_windows_8.1_with_update_x86_dvd_6051550.iso', link: '#' },
            { language: 'English - United Kingdom', arch: 'x64', version: 'Update 3', sha256: '6051481', filename: 'en-gb_windows_8.1_with_update_x64_dvd_6051481.iso', link: '#' },
            { language: 'English - United Kingdom', arch: 'x86', version: 'Update 3', sha256: '6051555', filename: 'en-gb_windows_8.1_with_update_x86_dvd_6051555.iso', link: '#' },
            { language: 'Estonian', arch: 'x64', version: 'Update 3', sha256: '6051482', filename: 'et_windows_8.1_with_update_x64_dvd_6051482.iso', link: '#' },
            { language: 'Estonian', arch: 'x86', version: 'Update 3', sha256: '6051565', filename: 'et_windows_8.1_with_update_x86_dvd_6051565.iso', link: '#' },
            { language: 'Finnish', arch: 'x64', version: 'Update 3', sha256: '6051483', filename: 'fi_windows_8.1_with_update_x64_dvd_6051483.iso', link: '#' },
            { language: 'Finnish', arch: 'x86', version: 'Update 3', sha256: '6051575', filename: 'fi_windows_8.1_with_update_x86_dvd_6051575.iso', link: '#' },
            { language: 'French', arch: 'x64', version: 'Update 3', sha256: '6051484', filename: 'fr_windows_8.1_with_update_x64_dvd_6051484.iso', link: '#' },
            { language: 'French', arch: 'x86', version: 'Update 3', sha256: '6051583', filename: 'fr_windows_8.1_with_update_x86_dvd_6051583.iso', link: '#' },
            { language: 'German', arch: 'x64', version: 'Update 3', sha256: '6051485', filename: 'de_windows_8.1_with_update_x64_dvd_6051485.iso', link: '#' },
            { language: 'German', arch: 'x86', version: 'Update 3', sha256: '6051588', filename: 'de_windows_8.1_with_update_x86_dvd_6051588.iso', link: '#' },
            { language: 'Greek', arch: 'x64', version: 'Update 3', sha256: '6051486', filename: 'el_windows_8.1_with_update_x64_dvd_6051486.iso', link: '#' },
            { language: 'Greek', arch: 'x86', version: 'Update 3', sha256: '6051592', filename: 'el_windows_8.1_with_update_x86_dvd_6051592.iso', link: '#' },
            { language: 'Hebrew', arch: 'x64', version: 'Update 3', sha256: '6051487', filename: 'he_windows_8.1_with_update_x64_dvd_6051487.iso', link: '#' },
            { language: 'Hebrew', arch: 'x86', version: 'Update 3', sha256: '6051597', filename: 'he_windows_8.1_with_update_x86_dvd_6051597.iso', link: '#' },
            { language: 'Hungarian', arch: 'x64', version: 'Update 3', sha256: '6051488', filename: 'hu_windows_8.1_with_update_x64_dvd_6051488.iso', link: '#' },
            { language: 'Hungarian', arch: 'x86', version: 'Update 3', sha256: '6051602', filename: 'hu_windows_8.1_with_update_x86_dvd_6051602.iso', link: '#' },
            { language: 'Italian', arch: 'x64', version: 'Update 3', sha256: '6051489', filename: 'it_windows_8.1_with_update_x64_dvd_6051489.iso', link: '#' },
            { language: 'Italian', arch: 'x86', version: 'Update 3', sha256: '6051607', filename: 'it_windows_8.1_with_update_x86_dvd_6051607.iso', link: '#' },
            { language: 'Japanese', arch: 'x64', version: 'Update 3', sha256: '6051490', filename: 'ja_windows_8.1_with_update_x64_dvd_6051490.iso', link: '#' },
            { language: 'Japanese', arch: 'x86', version: 'Update 3', sha256: '6051612', filename: 'ja_windows_8.1_with_update_x86_dvd_6051612.iso', link: '#' },
            { language: 'Korean', arch: 'x64', version: 'Update 3', sha256: '6051491', filename: 'ko_windows_8.1_with_update_x64_dvd_6051491.iso', link: '#' },
            { language: 'Korean', arch: 'x86', version: 'Update 3', sha256: '6051617', filename: 'ko_windows_8.1_with_update_x86_dvd_6051617.iso', link: '#' },
            { language: 'Latvian', arch: 'x64', version: 'Update 3', sha256: '6051492', filename: 'lv_windows_8.1_with_update_x64_dvd_6051492.iso', link: '#' },
            { language: 'Latvian', arch: 'x86', version: 'Update 3', sha256: '6051621', filename: 'lv_windows_8.1_with_update_x86_dvd_6051621.iso', link: '#' },
            { language: 'Lithuanian', arch: 'x64', version: 'Update 3', sha256: '6051493', filename: 'lt_windows_8.1_with_update_x64_dvd_6051493.iso', link: '#' },
            { language: 'Lithuanian', arch: 'x86', version: 'Update 3', sha256: '6051625', filename: 'lt_windows_8.1_with_update_x86_dvd_6051625.iso', link: '#' },
            { language: 'Norwegian', arch: 'x64', version: 'Update 3', sha256: '6051494', filename: 'nb_windows_8.1_with_update_x64_dvd_6051494.iso', link: '#' },
            { language: 'Norwegian', arch: 'x86', version: 'Update 3', sha256: '6051631', filename: 'nb_windows_8.1_with_update_x86_dvd_6051631.iso', link: '#' },
            { language: 'Polish', arch: 'x64', version: 'Update 3', sha256: '6051495', filename: 'pl_windows_8.1_with_update_x64_dvd_6051495.iso', link: '#' },
            { language: 'Polish', arch: 'x86', version: 'Update 3', sha256: '6051637', filename: 'pl_windows_8.1_with_update_x86_dvd_6051637.iso', link: '#' },
            { language: 'Portuguese - Brazil', arch: 'x64', version: 'Update 3', sha256: '6051496', filename: 'pt_windows_8.1_with_update_x64_dvd_6051496.iso', link: '#' },
            { language: 'Portuguese - Brazil', arch: 'x86', version: 'Update 3', sha256: '6051647', filename: 'pt_windows_8.1_with_update_x86_dvd_6051647.iso', link: '#' },
            { language: 'Portuguese - Portugal', arch: 'x64', version: 'Update 3', sha256: '6051497', filename: 'pp_windows_8.1_with_update_x64_dvd_6051497.iso', link: '#' },
            { language: 'Portuguese - Portugal', arch: 'x86', version: 'Update 3', sha256: '6051655', filename: 'pp_windows_8.1_with_update_x86_dvd_6051655.iso', link: '#' },
            { language: 'Romanian', arch: 'x64', version: 'Update 3', sha256: '6051498', filename: 'ro_windows_8.1_with_update_x64_dvd_6051498.iso', link: '#' },
            { language: 'Romanian', arch: 'x86', version: 'Update 3', sha256: '6051661', filename: 'ro_windows_8.1_with_update_x86_dvd_6051661.iso', link: '#' },
            { language: 'Russian', arch: 'x64', version: 'Update 3', sha256: '6051499', filename: 'ru_windows_8.1_with_update_x64_dvd_6051499.iso', link: '#' },
            { language: 'Russian', arch: 'x86', version: 'Update 3', sha256: '6051662', filename: 'ru_windows_8.1_with_update_x86_dvd_6051662.iso', link: '#' },
            { language: 'Serbian', arch: 'x64', version: 'Update 3', sha256: '6051500', filename: 'sr-latn_windows_8.1_with_update_x64_dvd_6051500.iso', link: '#' },
            { language: 'Serbian', arch: 'x86', version: 'Update 3', sha256: '6051663', filename: 'sr-latn_windows_8.1_with_update_x86_dvd_6051663.iso', link: '#' },
            { language: 'Slovak', arch: 'x64', version: 'Update 3', sha256: '6051501', filename: 'sk_windows_8.1_with_update_x64_dvd_6051501.iso', link: '#' },
            { language: 'Slovak', arch: 'x86', version: 'Update 3', sha256: '6051664', filename: 'sk_windows_8.1_with_update_x86_dvd_6051664.iso', link: '#' },
            { language: 'Slovenian', arch: 'x64', version: 'Update 3', sha256: '6051502', filename: 'sl_windows_8.1_with_update_x64_dvd_6051502.iso', link: '#' },
            { language: 'Slovenian', arch: 'x86', version: 'Update 3', sha256: '6051665', filename: 'sl_windows_8.1_with_update_x86_dvd_6051665.iso', link: '#' },
            { language: 'Spanish', arch: 'x64', version: 'Update 3', sha256: '6051503', filename: 'es_windows_8.1_with_update_x64_dvd_6051503.iso', link: '#' },
            { language: 'Spanish', arch: 'x86', version: 'Update 3', sha256: '6051666', filename: 'es_windows_8.1_with_update_x86_dvd_6051666.iso', link: '#' },
            { language: 'Swedish', arch: 'x64', version: 'Update 3', sha256: '6051504', filename: 'sv_windows_8.1_with_update_x64_dvd_6051504.iso', link: '#' },
            { language: 'Swedish', arch: 'x86', version: 'Update 3', sha256: '6051667', filename: 'sv_windows_8.1_with_update_x86_dvd_6051667.iso', link: '#' },
            { language: 'Thai', arch: 'x64', version: 'Update 3', sha256: '6051506', filename: 'th_windows_8.1_with_update_x64_dvd_6051506.iso', link: '#' },
            { language: 'Thai', arch: 'x86', version: 'Update 3', sha256: '6051668', filename: 'th_windows_8.1_with_update_x86_dvd_6051668.iso', link: '#' },
            { language: 'Turkish', arch: 'x64', version: 'Update 3', sha256: '6051507', filename: 'tr_windows_8.1_with_update_x64_dvd_6051507.iso', link: '#' },
            { language: 'Turkish', arch: 'x86', version: 'Update 3', sha256: '6051669', filename: 'tr_windows_8.1_with_update_x86_dvd_6051669.iso', link: '#' },
            { language: 'Ukrainian', arch: 'x64', version: 'Update 3', sha256: '6051508', filename: 'uk_windows_8.1_with_update_x64_dvd_6051508.iso', link: '#' },
            { language: 'Ukrainian', arch: 'x86', version: 'Update 3', sha256: '6051671', filename: 'uk_windows_8.1_with_update_x86_dvd_6051671.iso', link: '#' },
        ]
    },
    {
        id: 'core-pro-ent',
        title: 'Windows 8.1 Core',
        subTitle: 'Pro / Enterprise / VL',
        buildVersion: 'Build - 9600',
        isoList: [
            { language: 'English', arch: 'x64', version: 'Update 3', sha256: '6051480', filename: 'en_windows_8.1_with_update_x64_dvd_6051480.iso', link: '#' },
            { language: 'English', arch: 'x86', version: 'Update 3', sha256: '6051550', filename: 'en_windows_8.1_with_update_x86_dvd_6051550.iso', link: '#' },
        ]
    }
];

const WINVISTA_EDITIONS: WindowsEdition[] = [
    {
        id: 'ultimate',
        title: 'Windows Vista Ultimate',
        subTitle: 'SP2',
        buildVersion: 'Build - 6002 (Service Pack 2)',
        isoList: [
            { language: 'English', arch: 'x64', version: 'SP2', sha256: 'a1b2c3...', filename: 'en_windows_vista_with_sp2_x64_dvd_342267.iso', link: '#' },
            { language: 'English', arch: 'x86', version: 'SP2', sha256: 'd4e5f6...', filename: 'en_windows_vista_with_sp2_x86_dvd_342261.iso', link: '#' },
        ]
    }
];

const WINXP_EDITIONS: WindowsEdition[] = [
    {
        id: 'pro-sp3',
        title: 'Windows XP Professional',
        subTitle: 'SP3',
        buildVersion: 'Build - 2600 (Service Pack 3)',
        isoList: [
            { language: 'English', arch: 'x86', version: 'SP3', sha256: 'XP_PRO_SP3', filename: 'en_windows_xp_professional_with_service_pack_3_x86_cd_x14-80428.iso', link: '#' },
        ]
    }
];

const WINSERVER_EDITIONS: WindowsEdition[] = [
    {
        id: 'server-2022',
        title: 'Windows Server 2022',
        subTitle: 'LTSC',
        buildVersion: 'Build - 20348',
        isoList: [
            { language: 'English', arch: 'x64', version: '2022', sha256: 'SERVER_2022', filename: 'en-us_windows_server_2022_x64_dvd.iso', link: '#' },
        ]
    },
    {
        id: 'server-2019',
        title: 'Windows Server 2019',
        subTitle: 'LTSC',
        buildVersion: 'Build - 17763',
        isoList: []
    }
];

const WINARM_EDITIONS: WindowsEdition[] = [
    {
        id: 'win11-arm',
        title: 'Windows 11 ARM64',
        subTitle: '23H2',
        buildVersion: 'VHDL / ISO',
        isoList: [
            { language: 'English', arch: 'arm64', version: '23H2', sha256: 'ARM64_11', filename: 'SW_DVD9_Win_Pro_11_23H2_64ARM_English.ISO', link: '#' },
        ]
    }
];

// --- MACOS DATA ---
const MACOS_SEQUOIA_EDITIONS: WindowsEdition[] = [
    {
        id: 'installer',
        title: 'macOS Sequoia Installer',
        subTitle: '15.0',
        buildVersion: 'Build - 24A335',
        isoList: [
            { language: 'Multilingual', arch: 'Universal', version: '15.0', sha256: 'a1b2c3...', filename: 'InstallAssistant_15.0.pkg', link: '#' },
        ]
    },
    {
        id: 'recovery',
        title: 'macOS Sequoia Recovery',
        subTitle: '15.0',
        buildVersion: 'Build - 24A335',
        isoList: [
            { language: 'Multilingual', arch: 'Universal', version: '15.0', sha256: 'd4e5f6...', filename: 'BaseSystem.dmg', link: '#' },
        ]
    }
];

const MACOS_SONOMA_EDITIONS: WindowsEdition[] = [
    {
        id: 'installer',
        title: 'macOS Sonoma Installer',
        subTitle: '14.4',
        buildVersion: 'Build - 23E214',
        isoList: [
            { language: 'Multilingual', arch: 'Universal', version: '14.4', sha256: 'b2c3d4...', filename: 'InstallAssistant_14.4.pkg', link: '#' },
        ]
    }
];

// --- LINUX DATA ---
const UBUNTU_EDITIONS: WindowsEdition[] = [
    {
        id: 'desktop',
        title: 'Ubuntu Desktop',
        subTitle: '24.04 LTS',
        buildVersion: 'Noble Numbat',
        isoList: [
            { language: 'Multilingual', arch: 'x64', version: '24.04', sha256: 'e5f6g7...', filename: 'ubuntu-24.04-desktop-amd64.iso', link: '#' },
            { language: 'Multilingual', arch: 'arm64', version: '24.04', sha256: 'g7h8i9...', filename: 'ubuntu-24.04-desktop-arm64.iso', link: '#' },
        ]
    },
    {
        id: 'server',
        title: 'Ubuntu Server',
        subTitle: '24.04 LTS',
        buildVersion: 'Noble Numbat',
        isoList: [
            { language: 'Multilingual', arch: 'x64', version: '24.04', sha256: 'h8i9j0...', filename: 'ubuntu-24.04-live-server-amd64.iso', link: '#' },
        ]
    }
];

const LINUX_MINT_EDITIONS: WindowsEdition[] = [
    {
        id: 'cinnamon',
        title: 'Linux Mint Cinnamon',
        subTitle: '21.3',
        buildVersion: 'Virginia',
        isoList: [
            { language: 'Multilingual', arch: 'x64', version: '21.3', sha256: 'i9j0k1...', filename: 'linuxmint-21.3-cinnamon-64bit.iso', link: '#' },
        ]
    },
    {
        id: 'mate',
        title: 'Linux Mint MATE',
        subTitle: '21.3',
        buildVersion: 'Virginia',
        isoList: [
            { language: 'Multilingual', arch: 'x64', version: '21.3', sha256: 'j0k1l2...', filename: 'linuxmint-21.3-mate-64bit.iso', link: '#' },
        ]
    }
];

// --- OFFICE DATA ---
const OFFICE_LANGUAGES = [
    { label: 'English [en-US]', value: 'en-US' },
    { label: 'Arabic [ar-SA]', value: 'ar-SA' },
    { label: 'Bulgarian [bg-BG]', value: 'bg-BG' },
    { label: 'Czech [cs-CZ]', value: 'cs-CZ' },
    { label: 'Danish [da-DK]', value: 'da-DK' },
    { label: 'German [de-DE]', value: 'de-DE' },
    { label: 'Greek [el-GR]', value: 'el-GR' },
    { label: 'English UK [en-GB]', value: 'en-GB' },
    { label: 'Spanish [es-ES]', value: 'es-ES' },
    { label: 'Spanish Mexico [es-MX]', value: 'es-MX' },
    { label: 'Estonian [et-EE]', value: 'et-EE' },
    { label: 'Finnish [fi-FI]', value: 'fi-FI' },
    { label: 'French Canada [fr-CA]', value: 'fr-CA' },
    { label: 'French [fr-FR]', value: 'fr-FR' },
    { label: 'Hebrew [he-IL]', value: 'he-IL' },
    { label: 'Hindi [hi-IN]', value: 'hi-IN' },
    { label: 'Croatian [hr-HR]', value: 'hr-HR' },
    { label: 'Hungarian [hu-HU]', value: 'hu-HU' },
    { label: 'Indonesian [id-ID]', value: 'id-ID' },
    { label: 'Italian [it-IT]', value: 'it-IT' },
    { label: 'Japanese [ja-JP]', value: 'ja-JP' },
    { label: 'Kazakh [kk-KZ]', value: 'kk-KZ' },
    { label: 'Korean [ko-KR]', value: 'ko-KR' },
    { label: 'Lithuanian [lt-LT]', value: 'lt-LT' },
    { label: 'Latvian [lv-LV]', value: 'lv-LV' },
    { label: 'Malay (Latin) [ms-MY]', value: 'ms-MY' },
    { label: 'Norwegian Bokmal [nb-NO]', value: 'nb-NO' },
    { label: 'Dutch [nl-NL]', value: 'nl-NL' },
    { label: 'Polish [pl-PL]', value: 'pl-PL' },
    { label: 'Portuguese (Brazil) [pt-BR]', value: 'pt-BR' },
    { label: 'Portuguese (Portugal) [pt-PT]', value: 'pt-PT' },
    { label: 'Romanian [ro-RO]', value: 'ro-RO' },
    { label: 'Russian [ru-RU]', value: 'ru-RU' },
    { label: 'Slovak [sk-SK]', value: 'sk-SK' },
    { label: 'Slovenian [sl-SI]', value: 'sl-SI' },
    { label: 'Serbian (Latin, Serbia) [sr-latn-CS] Old', value: 'sr-latn-CS' },
    { label: 'Serbian (Latin, Serbia) [sr-latn-RS]', value: 'sr-latn-RS' },
    { label: 'Swedish [sv-SE]', value: 'sv-SE' },
    { label: 'Thai [th-TH]', value: 'th-TH' },
    { label: 'Turkish [tr-TR]', value: 'tr-TR' },
    { label: 'Ukrainian [uk-UA]', value: 'uk-UA' },
    { label: 'Vietnamese [vi-VN]', value: 'vi-VN' },
    { label: 'Chinese (Simplified) [zh-CN]', value: 'zh-CN' },
    { label: 'Chinese (Traditional) [zh-TW]', value: 'zh-TW' }
];

const OFFICE_C2R_DATA: OfficeDownloaderData = {
    languages: OFFICE_LANGUAGES,
    categories: [
        {
            id: 'm365',
            title: 'Microsoft 365',
            subTitle: 'Subscription',
            buildVersion: 'Build - 16.0.x',
            description: 'Phiên bản Office luôn được cập nhật các tính năng AI và bảo mật mới nhất từ Microsoft.',
            products: [
                { productId: 'O365ProPlusRetail', includedApps: 'Access, Excel, Lync, OneNote, Outlook, PowerPoint, Publisher, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'O365AppsBasicRetail', includedApps: 'Excel, OneNote, PowerPoint, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'O365BusinessRetail', includedApps: 'Access, Excel, Lync, OneNote, Outlook, PowerPoint, Publisher, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'O365EduCloudRetail', includedApps: 'Excel, OneNote, PowerPoint, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'O365HomePremRetail', includedApps: 'Access, Excel, OneNote, Outlook, PowerPoint, Publisher, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'O365SmallBusPremRetail', includedApps: 'Access, Excel, Lync, OneNote, Outlook, PowerPoint, Publisher, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'ProjectProRetail', includedApps: 'Project', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'VisioProRetail', includedApps: 'Visio, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' }
            ]
        },
        {
            id: '2024',
            title: 'Office 2024',
            subTitle: 'LTSC / Retail',
            buildVersion: 'Build - 2408',
            description: 'Phiên bản Office mới nhất không cần trả phí hàng tháng.',
            products: [
                { productId: 'Access2024Retail', includedApps: 'Access', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'Excel2024Retail', includedApps: 'Excel, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'Home2024Retail', includedApps: 'Excel, OneNote, PowerPoint, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'HomeBusiness2024Retail', includedApps: 'Excel, OneNote, Outlook, PowerPoint, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'Outlook2024Retail', includedApps: 'Outlook', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'PowerPoint2024Retail', includedApps: 'PowerPoint, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProjectPro2024Retail', includedApps: 'Project', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProjectStd2024Retail', includedApps: 'Project', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProPlus2024Retail', includedApps: 'Access, Excel, OneNote, Outlook, PowerPoint, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'VisioPro2024Retail', includedApps: 'Visio, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'VisioStd2024Retail', includedApps: 'Visio, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'Word2024Retail', includedApps: 'Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' }
            ]
        },
        {
            id: '2021',
            title: 'Office 2021',
            subTitle: 'LTSC / Retail',
            buildVersion: 'Build - 2108',
            description: 'Ổn định và đầy đủ tính năng cho công việc.',
            products: [
                { productId: 'Access2021Retail', includedApps: 'Access', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'Excel2021Retail', includedApps: 'Excel, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'HomeBusiness2021Retail', includedApps: 'Excel, OneNote, Outlook, PowerPoint, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'HomeStudent2021Retail', includedApps: 'Excel, OneNote, PowerPoint, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'OneNote2021Retail', includedApps: 'OneNote', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'Outlook2021Retail', includedApps: 'Outlook', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'Personal2021Retail', includedApps: 'Excel, Outlook, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'PowerPoint2021Retail', includedApps: 'PowerPoint, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'Professional2021Retail', includedApps: 'Access, Excel, OneNote, Outlook, PowerPoint, Publisher, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProjectPro2021Retail', includedApps: 'Project', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProjectStd2021Retail', includedApps: 'Project', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProPlus2021Retail', includedApps: 'Access, Excel, OneNote, Outlook, PowerPoint, Publisher, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'Publisher2021Retail', includedApps: 'Publisher, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'SkypeforBusiness2021Retail', includedApps: 'Lync, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'Standard2021Retail', includedApps: 'Excel, OneNote, Outlook, PowerPoint, Publisher, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'VisioPro2021Retail', includedApps: 'Visio, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'VisioStd2021Retail', includedApps: 'Visio, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'Word2021Retail', includedApps: 'Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' }
            ]
        },
        {
            id: '2019',
            title: 'Office 2019',
            subTitle: 'Retail',
            buildVersion: 'Build - 1808',
            description: 'Phiên bản kế thừa của Office 2016.',
            products: [
                { productId: 'Access2019Retail', includedApps: 'Access', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'AccessRuntime2019Retail', includedApps: 'Access', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'Excel2019Retail', includedApps: 'Excel, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'HomeBusiness2019Retail', includedApps: 'Excel, OneNote, Outlook, PowerPoint, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'HomeStudent2019Retail', includedApps: 'Excel, OneNote, PowerPoint, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'Outlook2019Retail', includedApps: 'Outlook', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'Personal2019Retail', includedApps: 'Excel, Outlook, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'PowerPoint2019Retail', includedApps: 'PowerPoint, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'Professional2019Retail', includedApps: 'Access, Excel, OneNote, Outlook, PowerPoint, Publisher, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProjectPro2019Retail', includedApps: 'Project', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProjectStd2019Retail', includedApps: 'Project', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProPlus2019Retail', includedApps: 'Access, Excel, Lync, OneNote, Outlook, PowerPoint, Publisher, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'Publisher2019Retail', includedApps: 'Publisher, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'SkypeforBusiness2019Retail', includedApps: 'Lync, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'SkypeforBusinessEntry2019Retail', includedApps: 'Lync, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'Standard2019Retail', includedApps: 'Excel, OneNote, Outlook, PowerPoint, Publisher, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'VisioPro2019Retail', includedApps: 'Visio, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'VisioStd2019Retail', includedApps: 'Visio, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'Word2019Retail', includedApps: 'Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' }
            ]
        },
        {
            id: '2016',
            title: 'Office 2016',
            subTitle: 'Retail',
            buildVersion: 'Build - 16.0.4266',
            description: 'Phiên bản cổ điển ổn định.',
            products: [
                { productId: 'AccessRetail', includedApps: 'Access', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'AccessRuntimeRetail', includedApps: 'Access', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'ExcelRetail', includedApps: 'Excel, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'HomeBusinessPipcRetail', includedApps: 'Excel, OneNote, Outlook, PowerPoint, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'HomeBusinessRetail', includedApps: 'Excel, OneNote, Outlook, PowerPoint, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'HomeStudentRetail', includedApps: 'Excel, OneNote, PowerPoint, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'HomeStudentVNextRetail', includedApps: 'Excel, OneNote, PowerPoint, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'OneNoteFreeRetail', includedApps: 'OneNote', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'OneNoteRetail', includedApps: 'OneNote', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'OutlookRetail', includedApps: 'Outlook', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'PersonalPipcRetail', includedApps: 'Excel, Outlook, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'PersonalRetail', includedApps: 'Excel, Outlook, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'PowerPointRetail', includedApps: 'PowerPoint, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProfessionalPipcRetail', includedApps: 'Access, Excel, OneNote, Outlook, PowerPoint, Publisher, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'ProfessionalRetail', includedApps: 'Access, Excel, OneNote, Outlook, PowerPoint, Publisher, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProjectProRetail', includedApps: 'Project', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProjectStdRetail', includedApps: 'Project', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProPlusRetail', includedApps: 'Access, Excel, Lync, OneNote, Outlook, PowerPoint, Publisher, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'PublisherRetail', includedApps: 'Publisher, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'SkypeforBusinessEntryRetail', includedApps: 'Lync, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'SkypeforBusinessRetail', includedApps: 'Lync, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'SkypeServiceBypassRetail', includedApps: 'Lync, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'StandardRetail', includedApps: 'Excel, OneNote, Outlook, PowerPoint, Publisher, Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'VisioProRetail', includedApps: 'Visio, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'VisioStdRetail', includedApps: 'Visio, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'WordRetail', includedApps: 'Word, OneDrive', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' }
            ]
        },
        {
            id: '2013',
            title: 'Office 2013',
            subTitle: 'Retail',
            buildVersion: 'Build - 15.0',
            description: 'Dành cho các máy tính cấu hình thấp.',
            products: [
                { productId: 'AccessRetail', includedApps: 'Access', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ExcelRetail', includedApps: 'Excel', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'GrooveRetail', includedApps: 'Groove', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'HomeBusinessPipcRetail', includedApps: 'Excel, OneNote, Outlook, PowerPoint, Word', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'HomeBusinessRetail', includedApps: 'Excel, OneNote, Outlook, PowerPoint, Word', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'HomeStudentRetail', includedApps: 'Excel, OneNote, PowerPoint, Word', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'InfoPathRetail', includedApps: 'InfoPath', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'LyncAcademicRetail', includedApps: 'Lync', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'LyncEntryRetail', includedApps: 'Lync', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'LyncRetail', includedApps: 'Lync', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'O365BusinessRetail', includedApps: 'Excel, Groove, OneNote, Outlook, PowerPoint, Publisher, Word', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'O365HomePremRetail', includedApps: 'Access, Excel, OneNote, Outlook, PowerPoint, Publisher, Word', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'O365ProPlusRetail', includedApps: 'Access, Excel, Groove, InfoPath, Lync, OneNote, Outlook, PowerPoint, Publisher, Word', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'O365SmallBusPremRetail', includedApps: 'Access, Excel, Groove, InfoPath, Lync, OneNote, Outlook, PowerPoint, Publisher, Word', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'OneNoteFreeRetail', includedApps: 'OneNote', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'OneNoteRetail', includedApps: 'OneNote', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'OutlookRetail', includedApps: 'Outlook', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'PersonalPipcRetail', includedApps: 'Excel, Outlook, Word', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'PersonalRetail', includedApps: 'Excel, Outlook, Word', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'PowerPointRetail', includedApps: 'PowerPoint', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProfessionalPipcRetail', includedApps: 'Access, Excel, OneNote, Outlook, PowerPoint, Publisher, Word', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'ProfessionalRetail', includedApps: 'Access, Excel, OneNote, Outlook, PowerPoint, Publisher, Word', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProjectProRetail', includedApps: 'Project', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProjectStdRetail', includedApps: 'Project', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'ProPlusRetail', includedApps: 'Access, Excel, Groove, InfoPath, Lync, OneNote, Outlook, PowerPoint, Publisher, Word', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'PublisherRetail', includedApps: 'Publisher', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'SPDRetail', includedApps: 'SharePointDesigner', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'StandardRetail', includedApps: 'Excel, Groove, OneNote, Outlook, PowerPoint, Publisher, Word', onlineX64: '#', onlineX32: '#', offlineX32X64: 'NA' },
                { productId: 'VisioProRetail', includedApps: 'Visio', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'VisioStdRetail', includedApps: 'Visio', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' },
                { productId: 'WordRetail', includedApps: 'Word', onlineX64: '#', onlineX32: '#', offlineX32X64: '#' }
            ]
        }
    ]
};

// --- PAGES DATA GENERATION ---

// Helper to create a generic page content
const createPage = (id: string, title: string, desc: string, type: DocSectionType, content?: any): DocPage => {
    return {
        id,
        title,
        description: desc,
        headings: [],
        blocks: [
            {
                type: type,
                content: content || 'Nội dung đang được cập nhật...'
            }
        ]
    };
};

// Base DOCS_DATA with Home
export const OHOOK_KEYS_DATA: ActivationSection[] = [
    {
        title: 'Office 365',
        headers: [
            { label: 'Office Product', key: 'product' },
            { label: 'Generated Generic Key', key: 'key' }
        ],
        items: [
            { product: 'O365AppsBasicRetail', key: '3HYJN-9KG99-F8VG9-V3DT8-JFMHV' },
            { product: 'O365BusinessRetail', key: 'Y9NF9-M2QWD-FF6RJ-QJW36-RRF2T' },
            { product: 'O365EduCloudRetail', key: 'W62NQ-267QR-RTF74-PF2MH-JQMTH' },
            { product: 'O365HomePremRetail', key: '3NMDC-G7C3W-68RGP-CB4MH-4CXCH' },
            { product: 'O365ProPlusRetail', key: 'H8DN8-Y2YP3-CR9JT-DHDR9-C7GP3' },
            { product: 'O365SmallBusPremRetail', key: '2QCNB-RMDKJ-GC8PB-7QGQV-7QTQJ' },
        ]
    },
    {
        title: 'Office 2016',
        headers: [
            { label: 'Office Product', key: 'product' },
            { label: 'Generated Generic Key', key: 'key' }
        ],
        items: [
            { product: 'AccessRetail', key: 'WHK4N-YQGHB-XWXCC-G3HYC-6JF94' },
            { product: 'AccessRuntimeRetail', key: 'RNB7V-P48F4-3FYY6-2P3R3-63BQV' },
            { product: 'AccessVolume', key: 'JJ2Y4-N8KM3-Y8KY3-Y22FR-R3KVK' },
            { product: 'ExcelRetail', key: 'RKJBN-VWTM2-BDKXX-RKQFD-JTYQ2' },
            { product: 'ExcelVolume', key: 'FVGNR-X82B2-6PRJM-YT4W7-8HV36' },
            { product: 'HomeBusinessPipcRetail', key: '2WQNF-GBK4B-XVG6F-BBMX7-M4F2Y' },
            { product: 'HomeBusinessRetail', key: 'HM6FM-NVF78-KV9PM-F36B8-D9MXD' },
            { product: 'HomeStudentARMRetail', key: 'PBQPJ-NC22K-69MXD-KWMRF-WFG77' },
            { product: 'HomeStudentPlusARMRetail', key: '6F2NY-7RTX4-MD9KM-TJ43H-94TBT' },
            { product: 'HomeStudentRetail', key: 'PNPRV-F2627-Q8JVC-3DGR9-WTYRK' },
            { product: 'HomeStudentVNextRetail', key: 'YWD4R-CNKVT-VG8VJ-9333B-RC3B8' },
            { product: 'MondoRetail', key: 'VNWHF-FKFBW-Q2RGD-HYHWF-R3HH2' },
            { product: 'MondoVolume', key: 'FMTQQ-84NR8-2744R-MXF4P-PGYR3' },
            { product: 'OneNoteFreeRetail', key: 'XYNTG-R96FY-369HX-YFPHY-F9CPM' },
            { product: 'OneNoteRetail', key: 'FXF6F-CNC26-W643C-K6KB7-6XXW3' },
            { product: 'OneNoteVolume', key: '9TYVN-D76HK-BVMWT-Y7G88-9TPPV' },
            { product: 'OutlookRetail', key: '7N4KG-P2QDH-86V9C-DJFVF-369W9' },
            { product: 'OutlookVolume', key: '7QPNR-3HFDG-YP6T9-JQCKQ-KKXXC' },
            { product: 'PersonalPipcRetail', key: '9CYB3-NFMRW-YFDG6-XC7TF-BY36J' },
            { product: 'PersonalRetail', key: 'FT7VF-XBN92-HPDJV-RHMBY-6VKBF' },
            { product: 'PowerPointRetail', key: 'N7GCB-WQT7K-QRHWG-TTPYD-7T9XF' },
            { product: 'PowerPointVolume', key: 'X3RT9-NDG64-VMK2M-KQ6XY-DPFGV' },
            { product: 'ProPlusRetail', key: 'GM43N-F742Q-6JDDK-M622J-J8GDV' },
            { product: 'ProPlusVolume', key: 'FNVK8-8DVCJ-F7X3J-KGVQB-RC2QY' },
            { product: 'ProfessionalPipcRetail', key: 'CF9DD-6CNW2-BJWJQ-CVCFX-Y7TXD' },
            { product: 'ProfessionalRetail', key: 'NXFTK-YD9Y7-X9MMJ-9BWM6-J2QVH' },
            { product: 'ProjectProRetail', key: 'WPY8N-PDPY4-FC7TF-KMP7P-KWYFY' },
            { product: 'ProjectProVolume', key: 'PKC3N-8F99H-28MVY-J4RYY-CWGDH' },
            { product: 'ProjectProXVolume', key: 'JBNPH-YF2F7-Q9Y29-86CTG-C9YGV' },
            { product: 'ProjectStdRetail', key: 'NTHQT-VKK6W-BRB87-HV346-Y96W8' },
            { product: 'ProjectStdVolume', key: '4TGWV-6N9P6-G2H8Y-2HWKB-B4G93' },
            { product: 'ProjectStdXVolume', key: 'N3W2Q-69MBT-27RD9-BH8V3-JT2C8' },
            { product: 'PublisherRetail', key: 'WKWND-X6G9G-CDMTV-CPGYJ-6MVBF' },
            { product: 'PublisherVolume', key: '9QVN2-PXXRX-8V4W8-Q7926-TJGD8' },
            { product: 'SkypeServiceBypassRetail', key: '6MDN4-WF3FV-4WH3Q-W699V-RGCMY' },
            { product: 'SkypeforBusinessEntryRetail', key: '4N4D8-3J7Y3-YYW7C-73HD2-V8RHY' },
            { product: 'SkypeforBusinessRetail', key: 'PBJ79-77NY4-VRGFG-Y8WYC-CKCRC' },
            { product: 'SkypeforBusinessVolume', key: 'DMTCJ-KNRKR-JV8TQ-V2CR2-VFTFH' },
            { product: 'StandardRetail', key: '2FPWN-4H6CM-KD8QQ-8HCHC-P9XYW' },
            { product: 'StandardVolume', key: 'WHGMQ-JNMGT-MDQVF-WDR69-KQBWC' },
            { product: 'VisioProRetail', key: 'NVK2G-2MY4G-7JX2P-7D6F2-VFQBR' },
            { product: 'VisioProVolume', key: 'NRKT9-C8GP2-XDYXQ-YW72K-MG92B' },
            { product: 'VisioProXVolume', key: 'G98Q2-B6N77-CFH9J-K824G-XQCC4' },
            { product: 'VisioStdRetail', key: 'NCRB7-VP48F-43FYY-62P3R-367WK' },
            { product: 'VisioStdVolume', key: 'XNCJB-YY883-JRW64-DPXMX-JXCR6' },
            { product: 'VisioStdXVolume', key: 'B2HTN-JPH8C-J6Y6V-HCHKB-43MGT' },
            { product: 'WordRetail', key: 'P8K82-NQ7GG-JKY8T-6VHVY-88GGD' },
            { product: 'WordVolume', key: 'YHMWC-YN6V9-WJPXD-3WQKP-TMVCV' },
        ]
    },
    {
        title: 'Office 2019',
        headers: [
            { label: 'Office Product', key: 'product' },
            { label: 'Generated Generic Key', key: 'key' }
        ],
        items: [
            { product: 'Access2019Retail', key: 'WRYJ6-G3NP7-7VH94-8X7KP-JB7HC' },
            { product: 'Access2019Volume', key: '6FWHX-NKYXK-BW34Q-7XC9F-Q9PX7' },
            { product: 'AccessRuntime2019Retail', key: 'FGQNJ-JWJCG-7Q8MG-RMRGJ-9TQVF' },
            { product: 'Excel2019Retail', key: 'KBPNW-64CMM-8KWCB-23F44-8B7HM' },
            { product: 'Excel2019Volume', key: '8NT4X-GQMCK-62X4P-TW6QP-YKPYF' },
            { product: 'HomeBusiness2019Retail', key: 'QBN2Y-9B284-9KW78-K48PB-R62YT' },
            { product: 'HomeStudentARM2019Retail', key: 'DJTNY-4HDWM-TDWB2-8PWC2-W2RRT' },
            { product: 'HomeStudentPlusARM2019Retail', key: 'NM8WT-CFHB2-QBGXK-J8W6J-GVK8F' },
            { product: 'HomeStudent2019Retail', key: 'XNWPM-32XQC-Y7QJC-QGGBV-YY7JK' },
            { product: 'Outlook2019Retail', key: 'WR43D-NMWQQ-HCQR2-VKXDR-37B7H' },
            { product: 'Outlook2019Volume', key: 'RN3QB-GT6D7-YB3VH-F3RPB-3GQYB' },
            { product: 'Personal2019Retail', key: 'NMBY8-V3CV7-BX6K6-2922Y-43M7T' },
            { product: 'PowerPoint2019Retail', key: 'HN27K-JHJ8R-7T7KK-WJYC3-FM7MM' },
            { product: 'PowerPoint2019Volume', key: '29GNM-VM33V-WR23K-HG2DT-KTQYR' },
            { product: 'ProPlus2019Retail', key: 'BN4XJ-R9DYY-96W48-YK8DM-MY7PY' },
            { product: 'ProPlus2019Volume', key: 'T8YBN-4YV3X-KK24Q-QXBD7-T3C63' },
            { product: 'Professional2019Retail', key: '9NXDK-MRY98-2VJV8-GF73J-TQ9FK' },
            { product: 'ProjectPro2019Retail', key: 'JDTNC-PP77T-T9H2W-G4J2J-VH8JK' },
            { product: 'ProjectPro2019Volume', key: 'TBXBD-FNWKJ-WRHBD-KBPHH-XD9F2' },
            { product: 'ProjectStd2019Retail', key: 'R3JNT-8PBDP-MTWCK-VD2V8-HMKF9' },
            { product: 'ProjectStd2019Volume', key: 'RBRFX-MQNDJ-4XFHF-7QVDR-JHXGC' },
            { product: 'Publisher2019Retail', key: '4QC36-NW3YH-D2Y9D-RJPC7-VVB9D' },
            { product: 'Publisher2019Volume', key: 'K8F2D-NBM32-BF26V-YCKFJ-29Y9W' },
            { product: 'SkypeforBusiness2019Retail', key: 'JBDKF-6NCD6-49K3G-2TV79-BKP73' },
            { product: 'SkypeforBusiness2019Volume', key: '9MNQ7-YPQ3B-6WJXM-G83T3-CBBDK' },
            { product: 'SkypeforBusinessEntry2019Retail', key: 'N9722-BV9H6-WTJTT-FPB93-978MK' },
            { product: 'Standard2019Retail', key: 'NDGVM-MD27H-2XHVC-KDDX2-YKP74' },
            { product: 'Standard2019Volume', key: 'NT3V6-XMBK7-Q66MF-VMKR4-FC33M' },
            { product: 'VisioPro2019Retail', key: '2NWVW-QGF4T-9CPMB-WYDQ9-7XP79' },
            { product: 'VisioPro2019Volume', key: '33YF4-GNCQ3-J6GDM-J67P3-FM7QP' },
            { product: 'VisioStd2019Retail', key: '263WK-3N797-7R437-28BKG-3V8M8' },
            { product: 'VisioStd2019Volume', key: 'BGNHX-QTPRJ-F9C9G-R8QQG-8T27F' },
            { product: 'Word2019Retail', key: 'JXR8H-NJ3MK-X66W8-78CWD-QRVR2' },
            { product: 'Word2019Volume', key: '9F36R-PNVHH-3DXGQ-7CD2H-R9D3V' },
        ]
    },
    {
        title: 'Office 2021',
        headers: [
            { label: 'Office Product', key: 'product' },
            { label: 'Generated Generic Key', key: 'key' }
        ],
        items: [
            { product: 'Access2021Retail', key: 'P286B-N3XYP-36QRQ-29CMP-RVX9M' },
            { product: 'AccessRuntime2021Retail', key: 'MNX9D-PB834-VCGY2-K2RW2-2DP3D' },
            { product: 'Access2021Volume', key: 'JBH3N-P97FP-FRTJD-MGK2C-VFWG6' },
            { product: 'Excel2021Retail', key: 'V6QFB-7N7G9-PF7W9-M8FQM-MY8G9' },
            { product: 'Excel2021Volume', key: 'WNYR4-KMR9H-KVC8W-7HJ8B-K79DQ' },
            { product: 'HomeBusiness2021Retail', key: 'JM99N-4MMD8-DQCGJ-VMYFY-R63YK' },
            { product: 'HomeStudent2021Retail', key: 'N3CWD-38XVH-KRX2Y-YRP74-6RBB2' },
            { product: 'OneNoteFree2021Retail', key: 'CNM3W-V94GB-QJQHH-BDQ3J-33Y8H' },
            { product: 'OneNote2021Retail', key: 'NB2TQ-3Y79C-77C6M-QMY7H-7QY8P' },
            { product: 'OneNote2021Volume', key: 'THNKC-KFR6C-Y86Q9-W8CB3-GF7PD' },
            { product: 'Outlook2021Retail', key: '4NCWR-9V92Y-34VB2-RPTHR-YTGR7' },
            { product: 'Outlook2021Volume', key: 'JQ9MJ-QYN6B-67PX9-GYFVY-QJ6TB' },
            { product: 'Personal2021Retail', key: 'RRRYB-DN749-GCPW4-9H6VK-HCHPT' },
            { product: 'PowerPoint2021Retail', key: '3KXXQ-PVN2C-8P7YY-HCV88-GVM96' },
            { product: 'PowerPoint2021Volume', key: '39G2N-3BD9C-C4XCM-BD4QG-FVYDY' },
            { product: 'ProPlus2021Retail', key: '8WXTP-MN628-KY44G-VJWCK-C7PCF' },
            { product: 'ProPlus2021Volume', key: 'RNHJY-DTFXW-HW9F8-4982D-MD2CW' },
            { product: 'ProPlusSPLA2021Volume', key: 'JRJNJ-33M7C-R73X3-P9XF7-R9F6M' },
            { product: 'Professional2021Retail', key: 'DJPHV-NCJV6-GWPT6-K26JX-C7PBG' },
            { product: 'ProjectPro2021Retail', key: 'QKHNX-M9GGH-T3QMW-YPK4Q-QRWMV' },
            { product: 'ProjectPro2021Volume', key: 'HVC34-CVNPG-RVCMT-X2JRF-CR7RK' },
            { product: 'ProjectStd2021Retail', key: '2B96V-X9NJY-WFBRC-Q8MP2-7CHRR' },
            { product: 'ProjectStd2021Volume', key: '3CNQX-T34TY-99RH4-C4YD2-KW6WH' },
            { product: 'Publisher2021Retail', key: 'CDNFG-77T8D-VKQJX-B7KT3-KK28V' },
            { product: 'Publisher2021Volume', key: '2KXJH-3NHTW-RDBPX-QFRXJ-MTGXF' },
            { product: 'SkypeforBusiness2021Retail', key: 'DVBXN-HFT43-CVPRQ-J89TF-VMMHG' },
            { product: 'SkypeforBusiness2021Volume', key: 'R3FCY-NHGC7-CBPVP-8Q934-YTGXG' },
            { product: 'Standard2021Retail', key: 'HXNXB-J4JGM-TCF44-2X2CV-FJVVH' },
            { product: 'Standard2021Volume', key: '2CJN4-C9XK2-HFPQ6-YH498-82TXH' },
            { product: 'StandardSPLA2021Volume', key: 'BQWDW-NJ9YF-P7Y79-H6DCT-MKQ9C' },
            { product: 'VisioPro2021Retail', key: 'T6P26-NJVBR-76BK8-WBCDY-TX3BC' },
            { product: 'VisioPro2021Volume', key: 'JNKBX-MH9P4-K8YYV-8CG2Y-VQ2C8' },
            { product: 'VisioStd2021Retail', key: '89NYY-KB93R-7X22F-93QDF-DJ6YM' },
            { product: 'VisioStd2021Volume', key: 'BW43B-4PNFP-V637F-23TR2-J47TX' },
            { product: 'Word2021Retail', key: 'VNCC4-CJQVK-BKX34-77Y8H-CYXMR' },
            { product: 'Word2021Volume', key: 'BJG97-NW3GM-8QQQ7-FH76G-686XM' },
        ]
    },
    {
        title: 'Office 2024',
        headers: [
            { label: 'Office Product', key: 'product' },
            { label: 'Generated Generic Key', key: 'key' }
        ],
        items: [
            { product: 'Access2024Retail', key: 'P6NMW-JMTRC-R6MQ6-HH3F2-BTHKB' },
            { product: 'Access2024Volume', key: 'CXNJT-98HPP-92HX7-MX6GY-2PVFR' },
            { product: 'Excel2024Retail', key: '82CNJ-W82TW-BY23W-BVJ6W-W48GP' },
            { product: 'Excel2024Volume', key: '7Y287-9N2KC-8MRR3-BKY82-2DQRV' },
            { product: 'Home2024Retail', key: 'N69X7-73KPT-899FD-P8HQ4-QGTP4' },
            { product: 'HomeBusiness2024Retail', key: 'PRKQM-YNPQR-77QT6-328D7-BD223' },
            { product: 'Outlook2024Retail', key: '2CFK4-N44KG-7XG89-CWDG6-P7P27' },
            { product: 'Outlook2024Volume', key: 'NQPXP-WVB87-H3MMB-FYBW2-9QFPB' },
            { product: 'PowerPoint2024Retail', key: 'CT2KT-GTNWH-9HFGW-J2PWJ-XW7KJ' },
            { product: 'PowerPoint2024Volume', key: 'RRXFN-JJ26R-RVWD2-V7WMP-27PWQ' },
            { product: 'ProjectPro2024Retail', key: 'GNJ6P-Y4RBM-C32WW-2VJKJ-MTHKK' },
            { product: 'ProjectPro2024Volume', key: 'WNFMR-HK4R7-7FJVM-VQ3JC-76HF6' },
            { product: 'ProjectStd2024Retail', key: 'C2PNM-2GQFC-CY3XR-WXCP4-GX3XM' },
            { product: 'ProjectStd2024Volume', key: 'F2VNW-MW8TT-K622Q-4D96H-PWJ8X' },
            { product: 'ProPlus2024Retail', key: 'VWCNX-7FKBD-FHJYG-XBR4B-88KC6' },
            { product: 'ProPlus2024Volume', key: '4YV2J-VNG7W-YGTP3-443TK-TF8CP' },
            { product: 'SkypeforBusiness2024Volume', key: 'XKRBW-KN2FF-G8CKY-HXVG6-FVY2V' },
            { product: 'Standard2024Volume', key: 'GVG6N-6WCHH-K2MVP-RQ78V-3J7GJ' },
            { product: 'VisioPro2024Retail', key: 'HGRBX-N68QF-6DY8J-CGX4W-XW7KP' },
            { product: 'VisioPro2024Volume', key: 'GBNHB-B2G3Q-G42YB-3MFC2-7CJCX' },
            { product: 'VisioStd2024Retail', key: 'VBXPJ-38NR3-C4DKF-C8RT7-RGHKQ' },
            { product: 'VisioStd2024Volume', key: 'YNFTY-63K7P-FKHXK-28YYT-D32XB' },
            { product: 'Word2024Retail', key: 'XN33R-RP676-GMY2F-T3MH7-GCVKR' },
            { product: 'Word2024Volume', key: 'WD8CQ-6KNQM-8W2CX-2RT63-KK3TP' },
        ]
    }
];

export const HWID_KEYS_DATA: ActivationSection[] = [
    {
        title: 'Windows 10/11',
        headers: [
            { label: 'Edition', key: 'product' },
            { label: 'Key', key: 'key' },
            { label: 'Ticket', key: 'ticketLink' }
        ],
        items: [
            { product: 'Education', key: 'YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY', ticketLink: '#' },
            { product: 'Education N', key: '84NGF-MHBT6-FXBX8-QWJK7-DRR8H', ticketLink: '#' },
            { product: 'Enterprise', key: 'XGVPP-NMH47-7TTHJ-W3FW7-8HV2C', ticketLink: '#' },
            { product: 'Enterprise N', key: '3V6Q6-NQXCX-V8YXR-9QCYV-QPFCT', ticketLink: '#' },
            { product: 'Enterprise LTSB 2015', key: 'FWN7H-PF93Q-4GGP8-M8RF3-MDWWW', ticketLink: '#' },
            { product: 'Enterprise LTSB 2016', key: 'NK96Y-D9CD8-W44CQ-R8YTK-DYJWX', ticketLink: '#' },
            { product: 'Enterprise LTSC 2019', key: '43TBQ-NH92J-XKTM7-KT3KK-P39PB', ticketLink: '#' },
            { product: 'Enterprise N LTSB 2015', key: 'NTX6B-BRYC2-K6786-F6MVQ-M7V2X', ticketLink: '#' },
            { product: 'Enterprise N LTSB 2016', key: '2DBW3-N2PJG-MVHW3-G7TDK-9HKR4', ticketLink: '#' },
            { product: 'Home', key: 'YTMG3-N6DKC-DKB77-7M9GH-8HVX7', ticketLink: '#' },
            { product: 'Home N', key: '4CPRK-NM3K3-X6XXQ-RXX86-WXCHW', ticketLink: '#' },
            { product: 'Home China', key: 'N2434-X9D7W-8PF6X-8DV9T-8TYMD', ticketLink: '#' },
            { product: 'Home Single Language', key: 'BT79Q-G7N6G-PGBYW-4YWX6-6F4BT', ticketLink: '#' },
            { product: 'IoT Enterprise', key: 'XQQYW-NFFMW-XJPBH-K8732-CKFFD', ticketLink: '#' },
            { product: 'IoT Enterprise Subscription', key: 'P8Q7T-WNK7X-PMFXY-VXHBG-RRK69', ticketLink: '#' },
            { product: 'IoT Enterprise LTSC 2021', key: 'QPM6N-7J2WJ-P88HH-P3YRH-YY74H', ticketLink: '#' },
            { product: 'IoT Enterprise LTSC 2024', key: 'CGK42-GYN6Y-VD22B-BX98W-J8JXD', ticketLink: '#' },
            { product: 'IoT Enterprise LTSC Subscription 2024', key: 'N979K-XWD77-YW3GB-HBGH6-D32MH', ticketLink: '#' },
            { product: 'Pro', key: 'VK7JG-NPHTM-C97JM-9MPGT-3V66T', ticketLink: '#' },
            { product: 'Pro N', key: '2B87N-8KFHP-DKV6R-Y2C8J-PKCKT', ticketLink: '#' },
            { product: 'Pro Education', key: '8PTT6-RNW4C-6V7J2-C2D3X-MHBPB', ticketLink: '#' },
            { product: 'Pro Education N', key: 'GJTYN-HDMQY-FRR76-HVGC7-QPF8P', ticketLink: '#' },
            { product: 'Pro for Workstations', key: 'DXG7C-N36C4-C4HTG-X4T3X-2YV77', ticketLink: '#' },
            { product: 'Pro N for Workstations', key: 'WYPNQ-8C467-V2W6J-TX4WX-WT2RQ', ticketLink: '#' },
            { product: 'S', key: 'V3WVW-N2PV2-CGWC3-34QGF-VMJ2C', ticketLink: '#' },
            { product: 'S N', key: 'NH9J3-68WK7-6FB93-4K3DF-DJ4F6', ticketLink: '#' },
            { product: 'SE', key: 'KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W', ticketLink: '#' },
            { product: 'SE N', key: 'K9VKN-3BGWV-Y624W-MCRMQ-BHDCD', ticketLink: '#' },
            { product: 'Team', key: 'XKCNC-J26Q9-KFHD2-FKTHY-KD72Y', ticketLink: '#' },
        ]
    }
];

export const UNSUPPORTED_KEYS_DATA: ActivationSection[] = [
    {
        title: 'Office 2007 / 2003 / XP',
        headers: [
            { label: 'Version', key: 'product' },
            { label: 'Activation / Keys', key: 'key' }
        ],
        items: [
            { product: 'Office 2007 Enterprise', key: 'BQDQB-KRRY9-43DBR-4P9J4-DH7D8' },
            { product: 'Office 2007 SharePoint Designer / Project / Visio', key: 'W2JJW-4KYDP-2YMKW-FX36H-QYVD8' },
            { product: 'Office 2003 Pro', key: 'VPXMC-4KG2B-6YGFT-JDFFP-QCQHM' },
            { product: 'Office 2003 FrontPage / OneNote / Project / Visio', key: 'VVT43-R24HV-8HVFK-YBPYM-8B9VM' },
            { product: 'Office XP (2002) Pro / Pro with FrontPage', key: 'HRPK8-F8JKW-MP6Q2-3P2TJ-4WX8J' },
            { product: 'Office 2002 Publisher / Project / Visio', key: 'M6XJF-97J4W-PF9PG-PHRTX-7K49B' },
        ]
    },
    {
        title: 'Visual Studio',
        headers: [
            { label: 'Edition', key: 'product' },
            { label: 'Activation Key', key: 'key' }
        ],
        items: [
            { product: 'Visual Studio 2026 Professional', key: 'NVTDK-QB8J9-M28GR-92BPC-BTHXK' },
            { product: 'Visual Studio 2026 Enterprise', key: 'VYGRN-WPR22-HG4X3-692BF-QGT2V' },
            { product: 'Visual Studio 2022 Professional', key: 'TD244-P4NB7-YQ6XK-Y8MMM-YWV2J' },
            { product: 'Visual Studio 2022 Enterprise', key: 'VHF9H-NXBBB-638P6-6JHCY-88JWH' },
            { product: 'Visual Studio 2019 Professional', key: 'NYWVH-HT4XC-R2WYW-9Y3CM-X4V3Y' },
            { product: 'Visual Studio 2019 Enterprise', key: 'BF8Y8-GN2QH-T84XB-QVY3B-RC4DF' },
        ]
    },
    {
        title: 'SQL Server',
        headers: [
            { label: 'Edition', key: 'product' },
            { label: 'Activation Key', key: 'key' }
        ],
        items: [
            { product: 'SQL Server 2025 Enterprise', key: 'B64XM-XC68Y-XRM4N-MTX7B-MY9J4' },
            { product: 'SQL Server 2025 Enterprise Core', key: 'H62HC-BCYXW-PP88N-PXPV3-BHD6H' },
            { product: 'SQL Server 2025 Standard', key: 'HX782-X7RHN-BVHGT-8HB24-2KGXG' },
            { product: 'SQL Server 2022 Enterprise', key: 'J4V48-P8MM4-9N3J9-HD97X-DYMRM' },
            { product: 'SQL Server 2022 Enterprise Core', key: '2Q48Q-PB48J-DRCVN-GB844-X2H4Q' },
            { product: 'SQL Server 2022 Standard', key: 'FG86G-CHH2T-CB7NJ-XT7D2-V8V4X' },
            { product: 'SQL Server 2022 Web', key: '2R97W-F4XNT-T6MYV-3TKB7-6X3JM' },
            { product: 'SQL Server 2022 Developer', key: '22222-00000-00000-00000-00000' },
            { product: 'SQL Server 2019 Enterprise', key: 'HMWJ3-KY3J2-NMVD7-KG4JR-X2G8G' },
            { product: 'SQL Server 2019 Standard', key: 'PMBDC-FXVM3-T777P-N4FY8-PKFF4' },
        ]
    }
];

export const OFFICE_MSI_KEYS_DATA: ActivationSection[] = [
    {
        title: 'Office 2016 Professional Plus',
        headers: [
            { label: 'Language', key: 'product' },
            { label: 'Arch', key: 'label' },
            { label: 'Link', key: 'key' }
        ],
        items: [
            { product: 'Arabic', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Arabic_MLF_X20-42423.ISO' },
            { product: 'Arabic', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Arabic_MLF_X20-41321.ISO' },
            { product: 'Bulgarian', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Bulgarian_MLF_X20-42425.ISO' },
            { product: 'Bulgarian', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Bulgarian_MLF_X20-41322.ISO' },
            { product: 'Chinese - Simplified', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_ChnSimp_MLF_X20-42426.ISO' },
            { product: 'Chinese - Simplified', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_ChnSimp_MLF_X20-41351.ISO' },
            { product: 'Chinese - Traditional', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_ChnTrad_MLF_X20-42427.ISO' },
            { product: 'Chinese - Traditional', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_ChnTrad_MLF_X20-41352.ISO' },
            { product: 'Croatian', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Croatian_MLF_X20-42428.ISO' },
            { product: 'Croatian', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Croatian_MLF_X20-41323.ISO' },
            { product: 'Czech', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Czech_MLF_X20-42429.ISO' },
            { product: 'Czech', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Czech_MLF_X20-41324.ISO' },
            { product: 'Danish', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Danish_MLF_X20-42430.ISO' },
            { product: 'Danish', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Danish_MLF_X20-41325.ISO' },
            { product: 'Dutch', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Dutch_MLF_X20-42431.ISO' },
            { product: 'Dutch', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Dutch_MLF_X20-41326.ISO' },
            { product: 'English', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_English_MLF_X20-42432.ISO' },
            { product: 'English', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_English_MLF_X20-41353.ISO' },
            { product: 'Estonian', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Estonian_MLF_X20-42433.ISO' },
            { product: 'Estonian', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Estonian_MLF_X20-41327.ISO' },
            { product: 'Finnish', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Finnish_MLF_X20-42434.ISO' },
            { product: 'Finnish', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Finnish_MLF_X20-41328.ISO' },
            { product: 'French', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_French_MLF_X20-42435.ISO' },
            { product: 'French', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_French_MLF_X20-41354.ISO' },
            { product: 'German', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_German_MLF_X20-42436.ISO' },
            { product: 'German', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_German_MLF_X20-41355.ISO' },
            { product: 'Greek', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Greek_MLF_X20-42437.ISO' },
            { product: 'Greek', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Greek_MLF_X20-41329.ISO' },
            { product: 'Hebrew', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Hebrew_MLF_X20-42438.ISO' },
            { product: 'Hebrew', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Hebrew_MLF_X20-41330.ISO' },
            { product: 'Hindi', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Indic_MLF_X20-42440.ISO' },
            { product: 'Hindi', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Indic_MLF_X20-41332.ISO' },
            { product: 'Hungarian', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Hungarian_MLF_X20-42439.ISO' },
            { product: 'Hungarian', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Hungarian_MLF_X20-41331.ISO' },
            { product: 'Indonesian', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Indonesian_MLF_X20-42441.ISO' },
            { product: 'Indonesian', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Indonesian_MLF_X20-41333.ISO' },
            { product: 'Italian', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Italian_MLF_X20-42442.ISO' },
            { product: 'Italian', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Italian_MLF_X20-41356.ISO' },
            { product: 'Japanese', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Japanese_MLF_X20-42443.ISO' },
            { product: 'Japanese', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Japanese_MLF_X20-41357.ISO' },
            { product: 'Kazakh', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Kazakh_MLF_X20-42444.ISO' },
            { product: 'Kazakh', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Kazakh_MLF_X20-41334.ISO' },
            { product: 'Korean', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Korean_MLF_X20-42445.ISO' },
            { product: 'Korean', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Korean_MLF_X20-41358.ISO' },
            { product: 'Latvian', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Latvian_MLF_X20-42446.ISO' },
            { product: 'Latvian', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Latvian_MLF_X20-41335.ISO' },
            { product: 'Lithuanian', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Lithuanian_MLF_X20-42447.ISO' },
            { product: 'Lithuanian', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Lithuanian_MLF_X20-41336.ISO' },
            { product: 'Malay', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_MALAY_MLF_X20-42448.ISO' },
            { product: 'Malay', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_MALAY_MLF_X20-41337.ISO' },
            { product: 'Norwegian', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Norwegian_MLF_X20-42449.ISO' },
            { product: 'Norwegian', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Norwegian_MLF_X20-41338.ISO' },
            { product: 'Polish', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Polish_MLF_X20-42450.ISO' },
            { product: 'Polish', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Polish_MLF_X20-41339.ISO' },
            { product: 'Portuguese - Brazil', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Brazilian_MLF_X20-42424.ISO' },
            { product: 'Portuguese - Brazil', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Brazilian_MLF_X20-41350.ISO' },
            { product: 'Portuguese - Portugal', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Portuguese_MLF_X20-42451.ISO' },
            { product: 'Portuguese - Portugal', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Portuguese_MLF_X20-41340.ISO' },
            { product: 'Romanian', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Romanian_MLF_X20-42452.ISO' },
            { product: 'Romanian', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Romanian_MLF_X20-41341.ISO' },
            { product: 'Russian', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Russian_MLF_X20-42453.ISO' },
            { product: 'Russian', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Russian_MLF_X20-41359.ISO' },
            { product: 'Serbian', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Serbian_Latin_MLF_X20-42454.ISO' },
            { product: 'Serbian', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Serbian_Latin_MLF_X20-41342.ISO' },
            { product: 'Slovak', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Slovak_MLF_X20-42455.ISO' },
            { product: 'Slovak', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Slovak_MLF_X20-41343.ISO' },
            { product: 'Slovenian', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Slovenian_MLF_X20-42456.ISO' },
            { product: 'Slovenian', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Slovenian_MLF_X20-41344.ISO' },
            { product: 'Spanish', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Spanish_MLF_X20-42457.ISO' },
            { product: 'Spanish', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Spanish_MLF_X20-41360.ISO' },
            { product: 'Swedish', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Swedish_MLF_X20-42459.ISO' },
            { product: 'Swedish', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Swedish_MLF_X20-41345.ISO' },
            { product: 'Thai', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Thai_MLF_X20-42460.ISO' },
            { product: 'Thai', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Thai_MLF_X20-41346.ISO' },
            { product: 'Turkish', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Turkish_MLF_X20-42462.ISO' },
            { product: 'Turkish', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Turkish_MLF_X20-41347.ISO' },
            { product: 'Ukrainian', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Ukrainian_MLF_X20-42464.ISO' },
            { product: 'Ukrainian', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Ukrainian_MLF_X20-41348.ISO' },
            { product: 'Vietnamese', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2016_64Bit_Vietnamese_MLF_X20-42465.ISO' },
            { product: 'Vietnamese', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2016_W32_Vietnamese_MLF_X20-41349.ISO' },
        ]
    },
    {
        title: 'Office 2016 Project / Visio',
        headers: [
            { label: 'Product', key: 'product' },
            { label: 'Arch', key: 'label' },
            { label: 'Link', key: 'key' }
        ],
        items: [
            { product: 'Project Professional 2016', label: 'x64', key: 'SW_DVD5_Project_Pro_2016_64Bit_English_MLF_X20-42681.ISO' },
            { product: 'Project Professional 2016', label: 'x32', key: 'SW_DVD5_Project_Pro_2016_W32_English_MLF_X20-41510.ISO' },
            { product: 'Visio Professional 2016', label: 'x64', key: 'SW_DVD5_Visio_Pro_2016_64Bit_English_MLF_X20-42764.ISO' },
            { product: 'Visio Professional 2016', label: 'x32', key: 'SW_DVD5_Visio_Pro_2016_W32_English_MLF_X20-41585.ISO' },
        ]
    },
    {
        title: 'Office 2013 Professional Plus / Project / Visio',
        headers: [
            { label: 'Product', key: 'product' },
            { label: 'Arch', key: 'label' },
            { label: 'Link', key: 'key' }
        ],
        items: [
            { product: 'Office Professional Plus 2013 SP1', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2013w_SP1_64Bit_English_MLF_X19-35976.ISO' },
            { product: 'Office Professional Plus 2013 SP1', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2013w_SP1_W32_English_MLF_X19-35821.ISO' },
            { product: 'Project Professional 2013 SP1', label: 'x64', key: 'SW_DVD5_Project_Pro_2013w_SP1_64Bit_English_MLF_X19-35753.ISO' },
            { product: 'Project Professional 2013 SP1', label: 'x32', key: 'SW_DVD5_Project_Pro_2013w_SP1_W32_English_MLF_X19-35750.ISO' },
            { product: 'Visio Professional 2013 SP1', label: 'x64', key: 'SW_DVD5_Visio_Pro_2013w_SP1_64Bit_English_MLF_X19-36393.ISO' },
            { product: 'Visio Professional 2013 SP1', label: 'x32', key: 'SW_DVD5_Visio_Pro_2013w_SP1_W32_English_MLF_X19-36365.ISO' },
        ]
    },
    {
        title: 'Office 2010 Professional Plus / Project / Visio',
        headers: [
            { label: 'Product', key: 'product' },
            { label: 'Arch', key: 'label' },
            { label: 'Link', key: 'key' }
        ],
        items: [
            { product: 'Office Professional Plus 2010 SP2', label: 'x64', key: 'SW_DVD5_Office_Professional_Plus_2010w_SP2_64Bit_English_MLF_X19-04841.ISO' },
            { product: 'Office Professional Plus 2010 SP2', label: 'x32', key: 'SW_DVD5_Office_Professional_Plus_2010w_SP2_W32_English_MLF_X19-04803.ISO' },
            { product: 'Project Professional 2010 SP2', label: 'x64', key: 'SW_DVD5_Project_Pro_2010w_SP2_64Bit_English_MLF_X19-04953.ISO' },
            { product: 'Project Professional 2010 SP2', label: 'x32', key: 'SW_DVD5_Project_Pro_2010w_SP2_W32_English_MLF_X19-04910.ISO' },
            { product: 'Visio 2010 SP2 (Prem/Pro/Std)', label: 'x64', key: 'SW_DVD5_Visio_Premium_2010w_SP2_64Bit_English_Std_Pro_Prem_MLF_X19-05201.ISO' },
            { product: 'Visio 2010 SP2 (Prem/Pro/Std)', label: 'x32', key: 'SW_DVD5_Visio_Premium_2010w_SP2_W32_English_Std_Pro_Prem_MLF_X19-05161.ISO' },
        ]
    }
];

export const OFFICE_MAC_APP_DATA: ActivationSection[] = [
    {
        title: 'Generation - 2021 / 2024',
        headers: [
            { label: 'Application', key: 'product' },
            { label: 'Link', key: 'ticketLink' }
        ],
        items: [
            { product: 'Office suite (with Teams)', ticketLink: 'https://go.microsoft.com/fwlink/p/?linkid=2009112' },
            { product: 'Office suite (without Teams)', ticketLink: 'https://go.microsoft.com/fwlink/p/?linkid=525133' },
            { product: 'Word', ticketLink: 'https://go.microsoft.com/fwlink/p/?linkid=525134' },
            { product: 'Excel', ticketLink: 'https://go.microsoft.com/fwlink/p/?linkid=525135' },
            { product: 'PowerPoint', ticketLink: 'https://go.microsoft.com/fwlink/p/?linkid=525136' },
            { product: 'Outlook', ticketLink: 'https://go.microsoft.com/fwlink/p/?linkid=525137' },
            { product: 'OneNote', ticketLink: 'https://go.microsoft.com/fwlink/p/?linkid=820886' }
        ]
    }
];

export const OFFICE_MAC_ACTIVATOR_DATA: ActivationSection[] = [
    {
        title: 'Office Activator (Serializer)',
        headers: [
            { label: 'Serializer', key: 'product' },
            { label: 'Activator', key: 'key' },
            { label: 'Applicable On', key: 'label' }
        ],
        items: [
            { product: 'Office 2024', key: 'pkg - iso', label: 'Tahoe, Sequoia, Sonoma, Ventura' },
            { product: 'Office 2021', key: 'pkg - iso', label: 'Tahoe, Sequoia, Sonoma, Ventura, Monterey, Big Sur, Catalina, Mojave' },
            { product: 'Office 2019 (Old)', key: 'pkg - iso', label: 'High Sierra, Sierra' },
            { product: 'Office 2016 (Old)', key: 'pkg - iso', label: 'El Capitan, Yosemite' }
        ]
    }
];

export const DOCS_DATA: Record<string, DocPage> = {
    home: {
        id: 'home',
        title: 'API Platform',
        description: 'Explore our API documentation and learn how to build with OpenAI.',
        headings: [
            { id: 'models', text: 'Models', level: 2 },
            { id: 'services', text: 'Dịch vụ nổi bật', level: 2 },
            { id: 'news', text: 'Tin tức công nghệ', level: 2 },
        ],
        blocks: [
            {
                type: 'quickstart-hero',
                content: ''
            },
            {
                type: 'grid-cards',
                title: 'Models',
                content: [
                    { title: 'gpt-5.2', description: 'Our most capable model, great for complex tasks.', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800' },
                    { title: 'gpt-5-mini', description: 'Faster and cheaper for most everyday tasks.', image: 'https://images.unsplash.com/photo-1634128221889-826622ec10a4?auto=format&fit=crop&q=80&w=800' },
                    { title: 'gpt-5-nano', description: 'Localized and secure for edge devices.', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800' }
                ]
            },
            {
                type: 'services-grid',
                title: 'Dịch vụ nổi bật',
                content: SERVICES_LIST
            },
            {
                type: 'news-grid',
                title: 'Tin tức & Thủ thuật mới nhất',
                content: NEWS_LIST
            }
        ]
    },
    // Placeholders for main categories that were used previously, mapped to new structure where possible
    // Windows & Office Root
    'folder-1': createPage('folder-1', 'Windows & Office', 'Hệ điều hành và bộ ứng dụng văn phòng.', 'text', 'Chọn mục con để tải xuống.'),

    // Windows
    'windows': createPage('windows', 'Windows Repository', 'Tất cả các phiên bản Windows gốc.', 'windows-release-grid', WIN11_EDITIONS),
    'win-11': {
        id: 'win-11',
        title: 'Windows 11',
        description: 'Tải xuống tệp ISO Windows 11 chính thức trực tiếp từ máy chủ Microsoft.',
        headings: [
            { id: 'summary', text: 'Tổng quan', level: 2 },
            { id: 'faq', text: 'FAQ', level: 2 },
            { id: 'downloads', text: 'Tải xuống', level: 2 }
        ],
        blocks: [
            {
                type: 'text',
                content: `
                    <div class="space-y-6 text-[#8e8ea0] leading-relaxed">
                        <p>Windows 11 là hệ điều hành hiện đại nhất từ Microsoft, được thiết kế để tối ưu hóa hiệu suất làm việc và nâng cao trải nghiệm giải trí. Với giao diện Fluent Design tinh tế, Windows 11 mang đến sự nhất quán và mượt mà trên mọi thiết bị.</p>
                        <p>Phiên bản này tập trung vào khả năng đa nhiệm với tính năng Snap Layouts, tích hợp sâu Microsoft Teams và tối ưu hóa cho các dòng vi xử lý mới nhất. Đây là nền tảng an toàn nhất với yêu cầu TPM 2.0 và các lớp bảo vệ phần cứng tiên tiến.</p>
                    </div>
                `
            },
            {
                type: 'accordion',
                title: 'Câu hỏi thường gặp (FAQ)',
                content: [
                    {
                        question: "Windows 11 yêu cầu cấu hình phần cứng như thế nào?",
                        answer: "Vi xử lý 64-bit 1GHz+ (2 nhân), ít nhất 4GB RAM, 64GB bộ nhớ và phải có TPM 2.0 cùng Secure Boot."
                    },
                    {
                        question: "Tôi có thể nâng cấp từ Windows 10 lên Windows 11 miễn phí không?",
                        answer: "Có, thông qua Windows Update nếu máy của bạn đáp ứng đủ điều kiện phần cứng."
                    },
                    {
                        question: "Tính năng Snap Layouts là gì?",
                        answer: "Snap Layouts giúp bạn sắp xếp các cửa sổ ứng dụng trên màn hình một cách khoa học theo các bố cục có sẵn."
                    }
                ]
            },
            {
                type: 'windows-release-grid',
                title: 'Danh mục tải xuống',
                content: WIN11_EDITIONS
            }
        ]
    },
    'win-10': {
        id: 'win-10',
        title: 'Windows 10',
        description: 'Hệ điều hành phổ biến nhất thế giới, nổi tiếng với sự ổn định, tương thích phần cứng tuyệt vời và hỗ trợ lâu dài.',
        headings: [
            { id: 'summary', text: 'Tổng quan', level: 2 },
            { id: 'faq', text: 'FAQ', level: 2 },
            { id: 'downloads', text: 'Tải xuống', level: 2 }
        ],
        blocks: [
            {
                type: 'text',
                content: `
                    <div class="space-y-6 text-[#8e8ea0] leading-relaxed">
                        <p>Windows 10 là đỉnh cao của sự hoàn thiện sau nhiều năm phát triển của Microsoft. Với sự kết hợp giữa sự quen thuộc của Windows 7 và các tính năng hiện đại, nó đã trở thành tiêu chuẩn vàng cho máy tính cá nhân và doanh nghiệp trên toàn cầu.</p>
                        <p>Dù Windows 11 đã ra mắt, Windows 10 vẫn là lựa chọn ưu tiên cho các máy tính cần sự ổn định tuyệt đối, đặc biệt là trong môi trường làm việc chuyên nghiệp, gaming và thiết kế đồ họa. Hệ điều hành này hỗ trợ hầu hết các phần cứng và phần mềm hiện nay.</p>
                    </div>
                `
            },
            {
                type: 'accordion',
                title: 'Câu hỏi thường gặp (FAQ)',
                content: [
                    {
                        question: "Microsoft sẽ hỗ trợ Windows 10 đến khi nào?",
                        answer: "Theo kế hoạch, Windows 10 sẽ nhận được các bản cập nhật bảo mật cho đến ngày 14 tháng 10 năm 2025."
                    },
                    {
                        question: "Có nên ở lại Windows 10 thay vì lên Windows 11?",
                        answer: "Nếu máy bạn ưu tiên sự ổn định cao nhất hoặc không đáp ứng cấu hình Windows 11, Windows 10 vẫn là một sự lựa chọn tuyệt vời và an toàn cho đến năm 2025."
                    },
                    {
                        question: "Làm sao để tắt Windows Update vĩnh viễn?",
                        answer: "Bạn có thể sử dụng các công cụ như StopUpdates10 hoặc tinh chỉnh trong Group Policy/Services để kiểm soát việc cập nhật."
                    }
                ]
            },
            {
                type: 'windows-release-grid',
                title: 'Danh mục tải xuống',
                content: WIN10_EDITIONS
            }
        ]
    },
    'win-81': {
        id: 'win-81',
        title: 'Windows 8.1',
        description: 'Bản cập nhật hoàn thiện của Windows 8, nhẹ và ổn định cho các dòng máy cũ.',
        headings: [
            { id: 'summary', text: 'Tổng quan', level: 2 },
            { id: 'faq', text: 'FAQ', level: 2 },
            { id: 'downloads', text: 'Tải xuống', level: 2 }
        ],
        blocks: [
            {
                type: 'text',
                content: `
                    <div class="space-y-6 text-[#8e8ea0] leading-relaxed">
                        <p>Windows 8.1 mang lại sự cân bằng giữa giao diện cảm ứng và trải nghiệm desktop truyền thống. Đây là phiên bản hồi sinh nút Start và cải thiện đáng kể hiệu năng hệ thống so với phiên bản Windows 8 gốc.</p>
                    </div>
                `
            },
            {
                type: 'accordion',
                title: 'Câu hỏi thường gặp (FAQ)',
                content: [
                    {
                        question: "Windows 8.1 còn được hỗ trợ không?",
                        answer: "Microsoft đã chính thức ngừng hỗ trợ Windows 8.1 vào ngày 10 tháng 1 năm 2023."
                    }
                ]
            },
            {
                type: 'windows-release-grid',
                title: 'Danh mục tải xuống',
                content: WIN81_EDITIONS
            }
        ]
    },
    'win-7': {
        id: 'win-7',
        title: 'Windows 7',
        description: 'Huyền thoại Windows 7 Service Pack 1, biểu tượng của sự đơn giản và hiệu quả.',
        headings: [
            { id: 'summary', text: 'Tổng quan', level: 2 },
            { id: 'faq', text: 'FAQ', level: 2 },
            { id: 'downloads', text: 'Tải xuống', level: 2 }
        ],
        blocks: [
            {
                type: 'text',
                content: `
                    <div class="space-y-6 text-[#8e8ea0] leading-relaxed">
                        <p>Windows 7 vẫn luôn được nhớ đến với giao diện Aero Glass bóng bẩy và sự ổn định tuyệt vời. Dành cho những ai yêu thích sự thuần khiết của Windows trước kỷ nguyên "Flat Design".</p>
                    </div>
                `
            },
            {
                type: 'accordion',
                title: 'Câu hỏi thường gặp (FAQ)',
                content: [
                    {
                        question: "Windows 7 có chạy được các phần mềm hiện đại không?",
                        answer: "Nhiều phần mềm mới (như Chrome phiên bản mới nhất) đã bắt đầu ngừng hỗ trợ Windows 7. Tuy nhiên, các ứng dụng văn phòng cơ bản vẫn hoạt động tốt."
                    }
                ]
            },
            {
                type: 'windows-release-grid',
                title: 'Danh mục tải xuống',
                content: WIN7_EDITIONS
            }
        ]
    },
    'win-vista': {
        id: 'win-vista',
        title: 'Windows Vista',
        description: 'Phiên bản mang tính đột phá về giao diện Aero, nền tảng cho sự thành công của Windows 7.',
        headings: [
            { id: 'summary', text: 'Tổng quan', level: 2 },
            { id: 'faq', text: 'FAQ', level: 2 },
            { id: 'downloads', text: 'Tải xuống', level: 2 }
        ],
        blocks: [
            {
                type: 'text',
                content: `
                    <div class="space-y-6 text-[#8e8ea0] leading-relaxed">
                        <p>Windows Vista giới thiệu giao diện Aero Glass rực rỡ và hệ thống tìm kiếm Instant Search. Dù gặp nhiều tranh cãi về yêu cầu phần cứng vào thời điểm ra mắt, Vista đã đặt nền móng quan trọng cho các tiêu chuẩn bảo mật (UAC) và đồ họa của Windows hiện đại.</p>
                    </div>
                `
            },
            {
                type: 'accordion',
                title: 'Câu hỏi thường gặp (FAQ)',
                content: [
                    {
                        question: "Tại sao Vista yêu cầu cấu hình cao?",
                        answer: "Do giao diện Aero Glass và các dịch vụ nền mới đòi hỏi sức mạnh xử lý đồ họa và dung lượng RAM lớn hơn đáng kể so với XP."
                    }
                ]
            },
            {
                type: 'windows-release-grid',
                title: 'Danh mục tải xuống',
                content: WINVISTA_EDITIONS
            }
        ]
    },
    'win-xp': {
        id: 'win-xp',
        title: 'Windows XP',
        description: 'Hệ điều hành huyền thoại, biểu tượng của sự đơn giản, mượt mà và bền bỉ.',
        headings: [
            { id: 'summary', text: 'Tổng quan', level: 2 },
            { id: 'faq', text: 'FAQ', level: 2 },
            { id: 'downloads', text: 'Tải xuống', level: 2 }
        ],
        blocks: [
            {
                type: 'text',
                content: `
                    <div class="space-y-6 text-[#8e8ea0] leading-relaxed">
                        <p>Windows XP là một trong những phiên bản thành công nhất lịch sử Microsoft. Với phong cách "Luna" đầy màu sắc và nhân NT cực kỳ ổn định, XP đã thống trị thị trường máy tính cá nhân trong hơn một thập kỷ.</p>
                    </div>
                `
            },
            {
                type: 'accordion',
                title: 'Câu hỏi thường gặp (FAQ)',
                content: [
                    {
                        question: "Có nên sử dụng Windows XP hiện nay?",
                        answer: "Chỉ nên dùng cho máy ảo hoặc các máy tính cũ không có kết nối internet để đảm bảo an toàn, vì Windows XP đã ngừng nhận các bản vá bảo mật từ lâu."
                    }
                ]
            },
            {
                type: 'windows-release-grid',
                title: 'Danh mục tải xuống',
                content: WINXP_EDITIONS
            }
        ]
    },
    'win-arm': {
        id: 'win-arm',
        title: 'Windows ARM64',
        description: 'Dành cho các thiết bị chạy vi xử lý kiến trúc ARM như Mac M1/M2/M3 hoặc Snapdragon.',
        headings: [
            { id: 'summary', text: 'Tổng quan', level: 2 },
            { id: 'downloads', text: 'Tải xuống', level: 2 }
        ],
        blocks: [
            {
                type: 'text',
                content: `
                    <div class="space-y-6 text-[#8e8ea0] leading-relaxed">
                        <p>Windows cho ARM cho phép chạy các hệ điều hành Microsoft trên phần cứng tiết kiệm điện năng. Phổ biến nhất là sử dụng trên máy Mac silicon thông qua Parallels Desktop hoặc các dòng laptop Copilot+ PC mới.</p>
                    </div>
                `
            },
            {
                type: 'windows-release-grid',
                title: 'Danh mục tải xuống',
                content: WINARM_EDITIONS
            }
        ]
    },
    'win-server': {
        id: 'win-server',
        title: 'Windows Server',
        description: 'Nền tảng máy chủ mạnh mẽ, bảo mật và khả năng mở rộng tối đa.',
        headings: [
            { id: 'summary', text: 'Tổng quan', level: 2 },
            { id: 'downloads', text: 'Tải xuống', level: 2 }
        ],
        blocks: [
            {
                type: 'text',
                content: `
                    <div class="space-y-6 text-[#8e8ea0] leading-relaxed">
                        <p>Windows Server cung cấp các giải pháp hạ tầng cho doanh nghiệp, từ quản lý người dùng (Active Directory) đến ảo hóa (Hyper-V) và dịch vụ lưu trữ quy mô lớn.</p>
                    </div>
                `
            },
            {
                type: 'windows-release-grid',
                title: 'Danh mục tải xuống',
                content: WINSERVER_EDITIONS
            }
        ]
    },
    'win-ltsc': {
        id: 'win-ltsc',
        title: 'Windows Enterprise LTSC',
        description: 'Bản Windows ổn định nhất, không có ứng dụng rác, hỗ trợ 10 năm.',
        headings: [
            { id: 'summary', text: 'Tổng quan', level: 2 },
            { id: 'faq', text: 'FAQ', level: 2 },
            { id: 'downloads', text: 'Tải xuống', level: 2 }
        ],
        blocks: [
            {
                type: 'text',
                content: `
                    <div class="space-y-6 text-[#8e8ea0] leading-relaxed">
                        <p>LTSC (Long-Term Servicing Channel) là phiên bản Windows sạch nhất từ Microsoft. Không có Microsoft Store, không có Edge (tùy bản), không có các tính năng AI rườm rà, tập trung hoàn toàn vào sự ổn định trong môi trường công nghiệp và y tế.</p>
                    </div>
                `
            },
            {
                type: 'accordion',
                title: 'Câu hỏi thường gặp (FAQ)',
                content: [
                    {
                        question: "LTSC có nhẹ hơn bản Pro không?",
                        answer: "Rất nhiều. LTSC chiếm ít tài nguyên CPU và RAM hơn hẳn do đã lược bỏ hầu hết các dịch vụ nền không cần thiết."
                    }
                ]
            },
            {
                type: 'windows-release-grid',
                title: 'Danh mục tải xuống',
                content: WIN10_EDITIONS.filter(e => e.id === 'ltsc')
            }
        ]
    },

    // MacOS
    'macos': createPage('macos', 'macOS Repository', 'Bộ cài macOS cho máy Mac và Hackintosh.', 'windows-release-grid', MACOS_SEQUOIA_EDITIONS),
    'mac-tahoe': createPage('mac-tahoe', 'macOS Tahoe', 'Concept version.', 'text', 'Concept version...'),
    'mac-sequoia': createPage('mac-sequoia', 'macOS Sequoia Download', 'Phiên bản macOS mới nhất.', 'windows-release-grid', MACOS_SEQUOIA_EDITIONS),
    'mac-sonoma': createPage('mac-sonoma', 'macOS Sonoma Download', 'Trải nghiệm mượt mà.', 'windows-release-grid', MACOS_SONOMA_EDITIONS),
    'mac-ventura': createPage('mac-ventura', 'macOS Ventura', 'Giao diện hiện đại.', 'text', 'Link tải macOS Ventura...'),
    'mac-monterey': createPage('mac-monterey', 'macOS Monterey', 'Ổn định và hiệu quả.', 'text', 'Link tải macOS Monterey...'),
    'mac-catalina': createPage('mac-catalina', 'macOS Catalina', 'Hỗ trợ ứng dụng 64-bit.', 'text', 'Link tải macOS Catalina...'),
    'mac-mojave': createPage('mac-mojave', 'macOS Mojave', 'Chế độ tối (Dark Mode).', 'text', 'Link tải macOS Mojave...'),

    // Linux
    'linux': createPage('linux', 'Linux Distributions', 'Các bản phân phối Linux phổ biến.', 'windows-release-grid', UBUNTU_EDITIONS),
    'linux-ubuntu': createPage('linux-ubuntu', 'Ubuntu Linux Download', 'Distro phổ biến nhất.', 'windows-release-grid', UBUNTU_EDITIONS),
    'linux-mint': createPage('linux-mint', 'Linux Mint Download', 'Giao diện quen thuộc như Windows.', 'windows-release-grid', LINUX_MINT_EDITIONS),
    'linux-zorin': createPage('linux-zorin', 'Zorin OS', 'Tối ưu cho người mới chuyển từ Windows.', 'text', 'Link tải Zorin OS...'),
    'linux-fedora': createPage('linux-fedora', 'Fedora Workstation', 'Công nghệ mới nhất.', 'text', 'Link tải Fedora...'),
    'linux-manjaro': createPage('linux-manjaro', 'Manjaro Linux', 'Dựa trên Arch, dễ sử dụng.', 'text', 'Link tải Manjaro...'),
    'linux-debian': createPage('linux-debian', 'Debian', 'Ông tổ của Ubuntu.', 'text', 'Link tải Debian...'),
    'linux-rocky': createPage('linux-rocky', 'Rocky Linux', 'Thay thế CentOS.', 'text', 'Link tải Rocky...'),
    'linux-alma': createPage('linux-alma', 'AlmaLinux', 'Ổn định cấp doanh nghiệp.', 'text', 'Link tải AlmaLinux...'),
    'linux-kali': createPage('linux-kali', 'Kali Linux', 'Dành cho bảo mật và pentest.', 'text', 'Link tải Kali Linux...'),
    'linux-arch': createPage('linux-arch', 'Arch Linux', 'Tùy biến cao.', 'text', 'Link tải Arch Linux...'),
    'linux-tails': createPage('linux-tails', 'Tails', 'Bảo mật và ẩn danh tuyệt đối.', 'text', 'Link tải Tails...'),

    // Office
    'office-c2r': {
        id: 'office-c2r',
        title: 'Microsoft Office C2R',
        description: 'Công cụ tải xuống và cài đặt Microsoft Office phiên bản Click-to-Run (C2R).',
        headings: [
            { id: 'summary', text: 'Tổng quan', level: 2 },
            { id: 'faq', text: 'FAQ', level: 2 },
            { id: 'downloads', text: 'Kho tải xuống', level: 2 }
        ],
        blocks: [
            {
                type: 'text',
                content: `
                <div class="space-y-6 text-[#8e8ea0] leading-relaxed">
                    <p>Office Click-to-Run là công nghệ cài đặt hiện đại từ Microsoft, giúp bạn cài đặt Office nhanh hơn và luôn được cập nhật phiên bản mới nhất. Hệ thống của chúng tôi hỗ trợ tùy biến sâu về ngôn ngữ và thành phần cài đặt.</p>
                </div>
              `
            },
            {
                type: 'accordion',
                title: 'Câu hỏi thường gặp (FAQ)',
                content: [
                    { question: 'Office C2R là gì?', answer: 'C2R (Click-to-Run) là phương thức cài đặt qua internet của Microsoft, thay thế cho cách cài đặt MSI truyền thống.' },
                    { question: 'Làm sao để cài đặt Offline?', answer: 'Bạn hãy chọn mục "Offline" trong bảng bên dưới để tải bộ cài đầy đủ về máy và cài đặt không cần mạng.' },
                    { question: 'Tôi có thể chọn cài lẻ Word hay Excel không?', answer: 'Có, các bộ cài C2R thường đi kèm công cụ tùy chọn (ODT) cho phép bạn chọn chính xác ứng dụng cần cài.' }
                ]
            },
            {
                type: 'office-downloader',
                title: 'Kho tải xuống Office C2R',
                content: OFFICE_C2R_DATA
            }
        ]
    },
    'office-custom': createPage('office-custom', 'Office C2R Custom', 'Tự tạo bộ cài Office theo ý muốn.', 'text', 'Hướng dẫn ODT...'),
    'office-msi': {
        id: 'office-msi',
        title: 'Office MSI Volume License',
        description: 'Bộ cài Office truyền thống (Vĩnh viễn). All download links lead to genuine files only.',
        headings: [
            { id: 'faq', text: 'FAQ', level: 2 },
            { id: 'download-links', text: 'Download Links', level: 2 }
        ],
        blocks: [
            {
                type: 'accordion',
                title: 'Câu hỏi thường gặp (FAQ)',
                content: [
                    {
                        question: 'Làm sao để xác minh file ISO là chính chủ?',
                        answer: 'Bạn có thể so sánh mã hash SHA1/SHA256 của file tải về với dữ liệu từ MSDN hoặc VLSC. Tất cả link trên trang đều dẫn đến file gốc chưa qua chỉnh sửa.'
                    },
                    {
                        question: 'Tại sao giao diện này chỉ có các bản MSI cũ?',
                        answer: 'Đúng vậy, trang này dành riêng cho các bản cài đặt MSI truyền thống. Nếu bạn muốn bản mới nhất (O365, 2021, 2024), hãy xem trang <a href="#office-c2r" class="text-[#576FEC] font-bold">Office C2R</a>.'
                    },
                    {
                        question: 'Office 2013 và 2010 còn an toàn để sử dụng không?',
                        answer: 'Các bản này đã dừng hỗ trợ (End of Life) và không nhận được cập nhật bảo mật. Chúng tôi chỉ cung cấp cho mục đích lưu trữ hoặc đánh giá trên máy ảo/hệ thống cũ.'
                    },
                    {
                        question: 'Sự khác biệt giữa bản Retail và Volume License (VL)?',
                        answer: 'Bản VL (Volume License) cho phép kích hoạt hàng loạt qua KMS mà không cần nhập key thủ công cho từng máy, phù hợp cho doanh nghiệp.'
                    },
                    {
                        question: 'Tôi có nên cài Project và Visio cùng bản Office không?',
                        answer: 'Khuyên dùng Project/Visio cùng phiên bản với bộ Office đang cài (ví dụ: Office 2016 cùng Project 2016) để tránh xung đột bộ cài.'
                    }
                ]
            },
            {
                type: 'callout',
                variant: 'info',
                content: 'To download the latest Office files from official Microsoft links, see <a href="#office-c2r" class="text-[#576FEC] font-bold">this page</a>.'
            },
            {
                type: 'text',
                title: 'Download Links Info',
                content: `
                <p>All of the Office versions listed below have reached end of life and no longer receive security updates. They are provided here for evaluation and archival purposes.</p>
                <p class="mt-2 font-bold text-white">It is recommended to use the latest Office versions (O365, 2021, 2024).</p>
                `
            },
            {
                type: 'office-msi-downloader',
                title: 'Kho tải xuống Office MSI VL',
                content: OFFICE_MSI_KEYS_DATA
            }
        ]
    },
    'office-mac': {
        id: 'office-mac',
        title: 'Office for MacOS',
        description: 'Bộ cài Office và công cụ kích hoạt cho Macbook. Official Microsoft files only.',
        headings: [
            { id: 'office-installer', text: 'Office Installer', level: 2 },
            { id: 'office-activation', text: 'Office Activation', level: 2 },
            { id: 'troubleshooting', text: 'Activation Troubleshooting', level: 2 }
        ],
        blocks: [
            {
                type: 'accordion',
                title: 'Câu hỏi thường gặp (FAQ)',
                content: [
                    {
                        question: 'Office cho Mac có cần bẻ khóa (crack) không?',
                        answer: 'Không, phương pháp này sử dụng Serializer (một gói cài đặt chính thức của Microsoft dành cho khách hàng Volume License) để kích hoạt bản quyền. Không sử dụng mã độc hay phần mềm bên thứ ba.'
                    },
                    {
                        question: 'Office-Reset là gì và khi nào cần dùng?',
                        answer: 'Office-Reset là công cụ giúp làm sạch các thông tin bản quyền cũ, bộ nhớ đệm hoặc gỡ bỏ hoàn toàn Office. Bạn nên dùng nó nếu cài đặt mới mà vẫn bị báo lỗi bản quyền cũ.'
                    },
                    {
                        question: 'Làm sao để cập nhật Office trên Mac?',
                        answer: 'Sau khi kích hoạt bằng Serializer, bạn vẫn có thể cập nhật Office thông qua Microsoft AutoUpdate (MAU) một cách bình thường.'
                    },
                    {
                        question: 'Bản Office 2024 có yêu cầu macOS tối thiểu là bao nhiêu?',
                        answer: 'Office 2024 yêu cầu 3 phiên bản macOS mới nhất (hiện tại là Tahoe, Sequoia, Sonoma). Nếu dùng macOS cũ hơn, vui lòng tải bản 2021 hoặc 2019.'
                    },
                    {
                        question: 'Tại sao tôi cần chạy file Serializer sau khi cài đặt bộ Office?',
                        answer: 'Bộ cài Office tải trực tiếp từ Microsoft là bản Retail. File Serializer sẽ chuyển đổi bộ cài này sang bản VL (Volume License) để kích hoạt vĩnh viễn.'
                    }
                ]
            },
            {
                type: 'text',
                title: 'Khả năng tương thích',
                content: `
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
                    <div class="bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                        <div class="font-bold text-white mb-1">Tahoe/Sequoia/Sonoma</div>
                        <div class="text-[11px] text-[#576FEC]">Sử dụng Office 2024</div>
                    </div>
                    <div class="bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                        <div class="font-bold text-white mb-1">Ventura/Monterey</div>
                        <div class="text-[11px] text-[#576FEC]">Sử dụng Office 2021</div>
                    </div>
                    <div class="bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                        <div class="font-bold text-white mb-1">Big Sur/Catalina</div>
                        <div class="text-[11px] text-[#8e8ea0]">Sử dụng Office 2021/2019</div>
                    </div>
                    <div class="bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                        <div class="font-bold text-white mb-1">Mojave/High Sierra</div>
                        <div class="text-[11px] text-[#8e8ea0]">Sử dụng Office 2019/2016</div>
                    </div>
                </div>
                `
            },
            {
                type: 'office-msi-downloader',
                title: 'Tải xuống Office for MacOS (Official)',
                content: OFFICE_MAC_APP_DATA
            },
            {
                type: 'text',
                title: 'Hướng dẫn kích hoạt 4 bước',
                content: `
                <ol class="space-y-4">
                    <li class="flex gap-4">
                        <span class="w-8 h-8 rounded-full bg-[#576FEC]/20 text-[#576FEC] flex items-center justify-center font-bold flex-shrink-0">1</span>
                        <div>
                            <p class="font-semibold text-white">Cài đặt Office</p>
                            <p class="text-sm text-[#8e8ea0]">Tải và cài đặt bản Office Suite phù hợp với macOS của bạn từ bảng phía trên.</p>
                        </div>
                    </li>
                    <li class="flex gap-4">
                        <span class="w-8 h-8 rounded-full bg-[#576FEC]/20 text-[#576FEC] flex items-center justify-center font-bold flex-shrink-0">2</span>
                        <div>
                            <p class="font-semibold text-white">Làm sạch bản quyền cũ (Nếu có)</p>
                            <p class="text-sm text-[#8e8ea0]">Sử dụng công cụ <a href="https://office-reset.com/" target="_blank" class="text-[#576FEC] font-bold underline">Office-Reset 2.0</a> để xóa các license cũ trong máy.</p>
                        </div>
                    </li>
                    <li class="flex gap-4">
                        <span class="w-8 h-8 rounded-full bg-[#576FEC]/20 text-[#576FEC] flex items-center justify-center font-bold flex-shrink-0">3</span>
                        <div>
                            <p class="font-semibold text-white">Chạy Serializer (Quan trọng)</p>
                            <p class="text-sm text-[#8e8ea0]">Mở file Serializer (.pkg) đã tải bên dưới và cài đặt. <strong>Lưu ý: Không mở Office trước khi cài Serializer.</strong></p>
                        </div>
                    </li>
                    <li class="flex gap-4">
                        <span class="w-8 h-8 rounded-full bg-[#576FEC]/20 text-[#576FEC] flex items-center justify-center font-bold flex-shrink-0">4</span>
                        <div>
                            <p class="font-semibold text-white">Hoàn tất</p>
                            <p class="text-sm text-[#8e8ea0]">Bây giờ bạn có thể mở Word/Excel và bắt đầu sử dụng bản quyền Volume License.</p>
                        </div>
                    </li>
                </ol>
                `
            },
            {
                type: 'office-msi-downloader',
                title: 'Công cụ kích hoạt (VL Serializer)',
                content: OFFICE_MAC_ACTIVATOR_DATA
            }
        ]
    },

    // Software Root
    'folder-3': createPage('folder-3', 'Kho Phần Mềm', 'Tổng hợp phần mềm thiết yếu cho mọi nền tảng.', 'software-catalog', SOFTWARE_DATABASE),
    'sw-win': createPage('sw-win', 'Phần mềm Windows', 'Kho ứng dụng cho Windows.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.platforms.includes('windows'))),
    'sw-mac': createPage('sw-mac', 'Phần mềm MacOS', 'Kho ứng dụng cho MacOS.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.platforms.includes('mac'))),
    'sw-linux': createPage('sw-linux', 'Phần mềm Linux', 'Kho ứng dụng cho Linux.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.platforms.includes('linux'))),

    // Software Sub-Categories (Windows)
    'sw-win-graphics': createPage('sw-win-graphics', 'Windows Graphics', 'Đồ họa & Thiết Kế.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.category === 'Graphics' && i.platforms.includes('windows'))),
    'sw-win-office': createPage('sw-win-office', 'Windows Office & Productivity', 'Văn Phòng & Năng Suất.', 'text', 'Danh sách phần mềm văn phòng...'),
    'sw-win-security': createPage('sw-win-security', 'Windows Security', 'Bảo Mật & Diệt Virus.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.category === 'Security' && i.platforms.includes('windows'))),
    'sw-win-browser': createPage('sw-win-browser', 'Windows Browsers', 'Trình Duyệt Web.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.category === 'Web Browsers' && i.platforms.includes('windows'))),
    'sw-win-chat': createPage('sw-win-chat', 'Windows Communication', 'Liên Lạc & Mạng Xã Hội.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.category === 'Communication' && i.platforms.includes('windows'))),
    'sw-win-dev': createPage('sw-win-dev', 'Windows Dev Tools', 'Lập Trình & Dev Tools.', 'text', 'VS Code, Git...'),
    'sw-win-game': createPage('sw-win-game', 'Windows Gaming', 'Giải Trí & Gaming.', 'text', 'Steam, Epic Games...'),
    'sw-win-media': createPage('sw-win-media', 'Windows Multimedia', 'Media & Âm Thanh.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.category === 'Multimedia' && i.platforms.includes('windows'))),
    'sw-win-sys': createPage('sw-win-sys', 'Windows System Tools', 'Công Cụ Hệ Thống.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.category === 'Utilities' && i.platforms.includes('windows'))),
    'sw-win-disk': createPage('sw-win-disk', 'Windows Disk Tools', 'Công Cụ Ổ Đĩa & Phân Vùng.', 'text', 'Partition Wizard...'),
    'sw-win-vpn': createPage('sw-win-vpn', 'Windows VPN', 'VPN & Mạng.', 'text', 'OpenVPN, 1.1.1.1...'),
    'sw-win-vm': createPage('sw-win-vm', 'Windows VM', 'Máy Ảo.', 'text', 'VMware, VirtualBox...'),
    'sw-win-pass': createPage('sw-win-pass', 'Windows Security', 'Password & Bảo Mật.', 'text', 'Bitwarden...'),
    'sw-win-remote': createPage('sw-win-remote', 'Windows Remote', 'Remote Desktop & SSH.', 'text', 'TeamViewer, UltraViewer...'),
    'sw-win-backup': createPage('sw-win-backup', 'Windows Backup', 'Quản Lý File & Backup.', 'text', 'TeraCopy...'),
    'sw-win-dl': createPage('sw-win-dl', 'Windows Downloaders', 'Download Manager.', 'text', 'IDM...'),

    // Software Sub-Categories (Mac) - Placeholders
    'sw-mac-graphics': createPage('sw-mac-graphics', 'MacOS Graphics', 'Đồ họa cho Mac.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.category === 'Graphics' && i.platforms.includes('mac'))),
    'sw-mac-office': createPage('sw-mac-office', 'MacOS Office', 'Văn Phòng.', 'text', 'Office for Mac...'),
    // ... (map others similarly if needed, using generic text for now)
    'sw-mac-security': createPage('sw-mac-security', 'MacOS Security', 'Bảo Mật.', 'text', 'Security apps...'),
    'sw-mac-browser': createPage('sw-mac-browser', 'MacOS Browsers', 'Trình duyệt.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.category === 'Web Browsers' && i.platforms.includes('mac'))),
    'sw-mac-chat': createPage('sw-mac-chat', 'MacOS Chat', 'Liên lạc.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.category === 'Communication' && i.platforms.includes('mac'))),
    'sw-mac-dev': createPage('sw-mac-dev', 'MacOS Dev', 'Dev Tools.', 'text', 'Xcode...'),
    'sw-mac-game': createPage('sw-mac-game', 'MacOS Gaming', 'Gaming.', 'text', 'Games...'),
    'sw-mac-media': createPage('sw-mac-media', 'MacOS Media', 'Media.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.category === 'Multimedia' && i.platforms.includes('mac'))),
    'sw-mac-sys': createPage('sw-mac-sys', 'MacOS System', 'System Tools.', 'text', 'CleanMyMac...'),
    'sw-mac-disk': createPage('sw-mac-disk', 'MacOS Disk', 'Disk Tools.', 'text', 'Disk Utility...'),
    'sw-mac-vpn': createPage('sw-mac-vpn', 'MacOS VPN', 'VPN.', 'text', 'VPN apps...'),
    'sw-mac-vm': createPage('sw-mac-vm', 'MacOS VM', 'Virtual Machine.', 'text', 'Parallels...'),
    'sw-mac-pass': createPage('sw-mac-pass', 'MacOS Password', 'Password.', 'text', 'Keychain...'),
    'sw-mac-remote': createPage('sw-mac-remote', 'MacOS Remote', 'Remote.', 'text', 'AnyDesk...'),
    'sw-mac-backup': createPage('sw-mac-backup', 'MacOS Backup', 'Backup.', 'text', 'Time Machine...'),
    'sw-mac-dl': createPage('sw-mac-dl', 'MacOS Downloader', 'Download Manager.', 'text', 'NeatDownloadManager...'),

    // Software Sub-Categories (Linux) - Placeholders
    'sw-lin-graphics': createPage('sw-lin-graphics', 'Linux Graphics', 'Đồ họa.', 'text', 'GIMP, Inkscape...'),
    'sw-lin-office': createPage('sw-lin-office', 'Linux Office', 'Văn Phòng.', 'text', 'LibreOffice...'),
    'sw-lin-security': createPage('sw-lin-security', 'Linux Security', 'Bảo Mật.', 'text', 'ClamAV...'),
    'sw-lin-browser': createPage('sw-lin-browser', 'Linux Browsers', 'Trình duyệt.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.category === 'Web Browsers' && i.platforms.includes('linux'))),
    'sw-lin-chat': createPage('sw-lin-chat', 'Linux Chat', 'Liên lạc.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.category === 'Communication' && i.platforms.includes('linux'))),
    'sw-lin-dev': createPage('sw-lin-dev', 'Linux Dev', 'Dev Tools.', 'text', 'Vim, Emacs...'),
    'sw-lin-game': createPage('sw-lin-game', 'Linux Gaming', 'Gaming.', 'text', 'Steam Proton...'),
    'sw-lin-media': createPage('sw-lin-media', 'Linux Media', 'Media.', 'software-catalog', SOFTWARE_DATABASE.filter(i => i.category === 'Multimedia' && i.platforms.includes('linux'))),
    'sw-lin-sys': createPage('sw-lin-sys', 'Linux System', 'System Tools.', 'text', 'Htop, Neofetch...'),
    'sw-lin-dl': createPage('sw-lin-dl', 'Linux Downloader', 'Download Manager.', 'text', 'Wget, Curl...'),


    // GhostOS Root
    'folder-2': createPage('folder-2', 'GHOST OS', 'Các bản Ghost Windows tốt nhất.', 'ghost-catalog', GHOST_OS_DATABASE),
    'ghost-11': createPage('ghost-11', 'Ghost Windows 11', 'Các bản Ghost Win 11 mới nhất.', 'ghost-catalog', GHOST_OS_DATABASE.filter(i => i.tags.includes('Win 11'))),
    'ghost-10': createPage('ghost-10', 'Ghost Windows 10', 'Các bản Ghost Win 10 ổn định.', 'ghost-catalog', GHOST_OS_DATABASE.filter(i => i.tags.includes('Win 10'))),
    'ghost-81': createPage('ghost-81', 'Ghost Windows 8.1', 'Ghost Win 8.1 nhẹ cho máy yếu.', 'text', 'Danh sách bản Ghost Win 8.1...'),
    'ghost-7': createPage('ghost-7', 'Ghost Windows 7', 'Ghost Win 7 giao diện đẹp.', 'text', 'Danh sách bản Ghost Win 7...'),
    'ghost-vista': createPage('ghost-vista', 'Ghost Windows Vista', 'Bản Ghost Vista.', 'text', 'Danh sách bản Ghost Vista...'),
    'ghost-xp': createPage('ghost-xp', 'Ghost Windows XP', 'Bản Ghost XP.', 'text', 'Danh sách bản Ghost XP...'),

    // Utilities Root
    'folder-5': createPage('folder-5', 'TIỆN ÍCH (Utilities)', 'Công cụ hệ thống.', 'text', 'Chọn công cụ...'),
    'usb-boot': createPage('usb-boot', 'Tạo USB Boot', 'Công cụ tạo USB cài Win, cứu hộ.', 'download-grid', [
        { title: 'Rufus', version: '4.3', size: '1.4 MB', description: 'Tạo USB Boot tốt nhất.', link: '#', icon: 'hard-drive', platforms: ['windows'] },
        { title: 'Ventoy', version: '1.0', size: '15 MB', description: 'Multiboot ISO.', link: '#', icon: 'hard-drive', platforms: ['windows'] }
    ]),
    'active-win': createPage('active-win', 'Active Windows & Office', 'Kích hoạt bản quyền an toàn.', 'download-grid', [
        { title: 'MAS AIO', version: '2.5', size: '200KB', description: 'Script kích hoạt số 1 hiện nay.', link: '#', icon: 'key', platforms: ['windows'] }
    ]),
    'block-adobe': createPage('block-adobe', 'Block Adobe / Patch', 'Chặn kết nối Adobe.', 'text', 'Hướng dẫn thêm host file và Firewall rules chặn Adobe...'),
    'fix-win': createPage('fix-win', 'Sửa Lỗi Windows', 'Công cụ sửa lỗi.', 'text', 'Fix Win 10 Tools...'),
    'opt-sys': createPage('opt-sys', 'Tối Ưu Hệ Thống', 'Tăng tốc máy tính.', 'text', 'Optimizer, Dism++...'),

    // Drivers Root
    'folder-6': createPage('folder-6', 'DRIVER', 'Kho Driver tổng hợp.', 'text', 'Chọn loại Driver...'),
    'drv-win': createPage('drv-win', 'Driver Windows', 'Driver cho Windows.', 'text', 'Driver Windows...'),
    'drv-mac': createPage('drv-mac', 'Driver MacOS', 'Driver cho MacOS.', 'text', 'Driver MacOS...'),
    'drv-linux': createPage('drv-linux', 'Driver Linux', 'Driver cho Linux.', 'text', 'Driver Linux...'),
    'drv-print': createPage('drv-print', 'Driver Máy In', 'Canon, HP...', 'text', 'Canon LBP 2900...'),


    // Activation Root

    // Activation Root
    'folder-activation': createPage('folder-activation', 'Activation', 'Công cụ kích hoạt bản quyền.', 'text', 'Chọn phương pháp kích hoạt...'),
    'act-hwid': {
        id: 'act-hwid',
        title: 'HWID Activation',
        description: 'Kích hoạt bản quyền kỹ thuật số vĩnh viễn.',
        headings: [
            { id: 'manually-activate', text: 'Kích hoạt Windows thủ công', level: 2 },
            { id: 'windows-10-11', text: 'Windows 10/11', level: 2 }
        ],
        blocks: [
            {
                type: 'callout',
                variant: 'info',
                content: 'Kích hoạt HWID chỉ được hỗ trợ trên Windows 10/11.'
            },
            {
                type: 'text',
                title: 'Kích hoạt Windows thủ công',
                content: `
                <p>Để kích hoạt Windows thủ công, hãy làm theo các bước sau:</p>
                <ol>
                    <li>Đảm bảo bạn có kết nối internet hoạt động.</li>
                    <li>Xác định phiên bản Windows của bạn. Bạn có thể tìm thấy thông tin này bằng cách tìm kiếm "About your PC" trong menu Start.</li>
                    <li>Tải xuống tệp ticket tương ứng từ bảng bên dưới; tệp ticket phải khớp với phiên bản Windows của bạn.</li>
                    <li>Sao chép tệp ticket đã tải xuống vào thư mục:<br/>
                        <code class="bg-black/40 p-1 rounded text-[12px]">C:\\ProgramData\\Microsoft\\Windows\\ClipSVC\\GenuineTicket</code>
                    </li>
                </ol>
                <p class="mt-4 text-[#8e8ea0] text-sm">Thư mục ProgramData bị ẩn theo mặc định. Bạn có thể truy cập trực tiếp bằng cách dán đường dẫn đầy đủ ở trên vào thanh địa chỉ của Windows Explorer.</p>
                <ol start="5" class="mt-4">
                    <li>Mở cài đặt Activation của Windows và nhấp vào nút "Change product key".</li>
                    <li>Sao chép mã sản phẩm tương ứng từ bảng bên dưới và dán vào trường product key.</li>
                    <li>Sau khi chờ vài giây, Windows sẽ được kích hoạt.</li>
                </ol>
                `
            },
            {
                type: 'callout',
                variant: 'tip',
                content: 'Nếu bạn gặp lỗi 0x803fa067 khi cố gắng thay đổi product key, hãy ngắt kết nối internet của PC và thử thay đổi product key lại. Sau khi thực hiện xong, hãy kết nối lại internet và Windows sẽ được kích hoạt.'
            },
            {
                type: 'activation-section',
                title: 'Windows 10/11',
                content: HWID_KEYS_DATA
            }
        ]
    },
    'act-ohook': {
        id: 'act-ohook',
        title: 'Ohook Activation',
        description: 'Kích hoạt Office vĩnh viễn (Ohook).',
        headings: [
            { id: 'manually-activate', text: 'Kích hoạt Office thủ công', level: 2 },
            { id: 'generic-keys', text: 'Mã kích hoạt Generic (Key)', level: 2 }
        ],
        blocks: [
            {
                type: 'callout',
                variant: 'info',
                content: 'Trang này dành cho những người dùng không muốn sử dụng script vì bất kỳ lý do gì và muốn tự thực hiện quy trình kích hoạt Ohook. Nếu bạn muốn sử dụng công cụ để thực hiện việc này, vui lòng xem <a href="#act-mas" class="text-[#576FEC] font-bold">tại đây</a>.'
            },
            {
                type: 'callout',
                variant: 'warning',
                title: 'Thông tin quan trọng',
                content: 'Các bước bên dưới chỉ áp dụng cho các phiên bản Office 16.0 (2016, 2019, 2021 và 365) C2R x64 bit chạy trên máy Windows 8+ x64 bit. Đối với các phiên bản Office cũ hơn, vui lòng làm theo <a href="#" class="underline">hướng dẫn này</a>.'
            },
            {
                type: 'text',
                title: 'Kích hoạt Office thủ công',
                content: `
                <p>Để kích hoạt Office thủ công, hãy làm theo các bước sau:</p>
                <ol>
                    <li>Tải xuống các tệp Ohook sppc.dll từ <a href="#" class="text-[#576FEC] font-bold">đây</a> hoặc tự biên dịch tệp sppc.dll bằng <a href="#" class="underline">hướng dẫn này</a>.</li>
                    <li>Tạo một thư mục mới tên là <strong>ohook</strong> trong ổ C: và giải nén tệp zip vào đó. Đường dẫn thư mục sẽ là <strong>C:\\ohook</strong>.</li>
                    <li>Mở <strong>Command Prompt với quyền Administrator</strong> và nhập lệnh sau để tạo symlink của sppc.dll hệ thống thành sppcs.dll trong thư mục Office C2R System:</li>
                </ol>
                `
            },
            {
                type: 'code',
                language: 'batch',
                content: 'mklink "%ProgramFiles%\\Microsoft Office\\root\\vfs\\System\\sppcs.dll" "%windir%\\System32\\sppc.dll"'
            },
            {
                type: 'text',
                content: '<p>Nhâp các lệnh sau để sao chép thư viện hook sppc64.dll vào thư mục hệ thống Office C2R:</p>'
            },
            {
                type: 'code',
                language: 'batch',
                content: 'cd /d C:\\ohook\ncopy /y sppc64.dll "%ProgramFiles%\\Microsoft Office\\root\\vfs\\System\\sppc.dll"'
            },
            {
                type: 'text',
                content: '<p>Một số phiên bản Office 365 kiểm tra trạng thái bản quyền và hiển thị biểu ngữ <em>"There was a problem checking this device\'s license status"</em>. Để ngăn điều này, hãy nhập lệnh sau:</p>'
            },
            {
                type: 'code',
                language: 'batch',
                content: 'reg add HKCU\\Software\\Microsoft\\Office\\16.0\\Common\\Licensing\\Resiliency /v "TimeOfLastHeartbeatFailure" /t REG_SZ /d "2040-01-01T00:00:00Z" /f'
            },
            {
                type: 'text',
                content: `
                <p>Cài đặt mã Generic (key) phù hợp với phiên bản Office của bạn:</p>
                <div class="bg-black/40 p-3 rounded border border-white/5 mb-4">
                    <code class="text-[#576FEC]">slmgr /ipk &lt;key&gt;</code>
                </div>
                <p>(Tham khảo bảng bên dưới để lấy mã tương ứng.)</p>
                <p>Office của bạn sẽ được kích hoạt ngay bây giờ.</p>
                `
            },
            {
                type: 'activation-section',
                title: 'Mã kích hoạt Generic (Key)',
                content: OHOOK_KEYS_DATA
            }
        ]
    },
    'act-unsupported': {
        id: 'act-unsupported',
        title: 'Unsupported Products',
        description: 'Các sản phẩm không hỗ trợ (XP, Office 2010, 2007, RDS, HEVC, VS, SQL).',
        headings: [
            { id: 'office-mac', text: 'MS Office Cho Mac', level: 2 },
            { id: 'win-xp-pro-vl', text: 'Windows XP Pro VL', level: 2 },
            { id: 'office-2010-xp-2003', text: 'Office 2010 trên Windows XP / Server 2003', level: 2 },
            { id: 'office-2007-2003-xp', text: 'Office 2007 / Office 2003 / Office XP (2002)', level: 2 },
            { id: 'rds-cals', text: 'Dịch vụ Remote Desktop (RDS CALs)', level: 2 },
            { id: 'hevc', text: 'Tiện ích mở rộng Video HEVC', level: 2 },
            { id: 'visual-studio', text: 'Visual Studio', level: 2 },
            { id: 'sql-server', text: 'SQL Server', level: 2 },
            { id: 'config-mgr', text: 'Microsoft Configuration Manager', level: 2 }
        ],
        blocks: [
            {
                type: 'callout',
                variant: 'info',
                content: 'Trên trang này, chỉ các phương pháp kích hoạt sản phẩm không được hỗ trợ bởi script MAS mới được đề cập. Nếu bạn không chắc chắn, hãy chạy các tùy chọn kích hoạt script MAS trước. Bạn có thể liên hệ với chúng tôi <a href="#" class="underline">tại đây</a> nếu cần trợ giúp.'
            },
            {
                type: 'text',
                title: 'MS Office Cho Mac',
                content: '<p>Xem hướng dẫn chi tiết <a href="#" class="text-[#576FEC] font-bold">tại đây</a>.</p>'
            },
            {
                type: 'text',
                title: 'Windows XP Pro VL',
                content: '<p>Tải xuống Windows XP Pro VL - <a href="#" class="text-[#576FEC] font-bold">Liên kết</a></p><p class="mt-2 text-sm text-[#8e8ea0]">Mã kích hoạt ISO Windows XP Pro VL SP3 32-bit (x86):</p>'
            },
            {
                type: 'code',
                language: 'text',
                content: 'XCYBK-2B3KV-G8T8F-WXJM7-WCTYT'
            },
            {
                type: 'text',
                content: '<p class="mt-4 text-sm text-[#8e8ea0]">Mã kích hoạt ISO Windows XP Pro VL SP2 64-bit (x64):</p>'
            },
            {
                type: 'code',
                language: 'text',
                content: 'VCFQD-V9FX9-46WVH-K3CD4-4J3JM'
            },
            {
                type: 'text',
                title: 'Office 2010 trên Windows XP / Server 2003',
                content: `
                <p>Làm theo các bước sau để kích hoạt Office 2010 trên các hệ thống cũ:</p>
                <ol>
                    <li>Tải xuống <a href="#" class="underline">Bộ cài Office 2010</a>.</li>
                    <li>Tải xuống <a href="#" class="underline">Ohook Script cho Office 2010</a> bởi abbodi1406. (Mật khẩu: 2010)</li>
                    <li>Giải nén kho lưu trữ Ohook.</li>
                    <li>Chạy tệp <strong>_install.cmd</strong>.</li>
                    <li>Lấy mã (key) từ <a href="#" class="underline">đây</a> cho sản phẩm Office 2010 đã cài dặt.</li>
                    <li>Mở một ứng dụng Office > File > Help > Activate/Change Product Key.</li>
                    <li>Nhập mã và hoàn tất kích hoạt.</li>
                </ol>
                <p class="mt-4 text-sm text-[#8e8ea0]">Lưu ý: Trước khi gỡ cài đặt Office, hãy chạy tệp _uninstall.cmd để xóa Ohook. MAS hỗ trợ Office trên Windows Vista và các phiên bản mới hơn.</p>
                `
            },
            {
                type: 'activation-section',
                title: 'Office 2007 / Office 2003 / Office XP (2002)',
                content: [UNSUPPORTED_KEYS_DATA[0]]
            },
            {
                type: 'text',
                title: 'Dịch vụ Remote Desktop (RDS CALs)',
                content: `
                <p>Cài đặt: <a href="#" class="text-[#576FEC] font-bold">Nhấp vào đây để xem thông tin</a></p>
                <h4 class="font-bold text-white mt-4 mb-2">Các bước kích hoạt:</h4>
                <ol>
                    <li>Mở Remote Desktop Licensing Manager.</li>
                    <li>Chuột phải vào máy chủ của bạn và chọn <strong>Activate Server</strong>.</li>
                    <li>Chọn <strong>Web Browser</strong> làm phương thức kết nối, sau đó nhấp Next.</li>
                    <li>Ở màn hình tiếp theo, một <strong>Product ID</strong> sẽ được hiển thị.</li>
                    <li>Truy cập <a href="https://thecatontheceiling.github.io/LyssaRDSGen/" target="_blank" class="underline font-bold">trang web LyssaRDSGen</a> và sử dụng Product ID này để tạo <strong>License Server ID</strong>.</li>
                    <li>Nhập License Server ID đã tạo vào trình hướng dẫn.</li>
                    <li>Khi bạn thấy thông báo "The license server has been successfully activated.", nhấp Next.</li>
                    <li>Tiếp tục nhấp Next một lần nữa.</li>
                    <li>Trình hướng dẫn sẽ yêu cầu bạn nhập <strong>License Key Pack ID</strong>.</li>
                    <li>Tạo License Key Pack ID từ cùng một trang web và nhập vào trình hướng dẫn.</li>
                </ol>
                <p class="mt-4 text-sm"><a href="https://github.com/thecatontheceiling/LyssaRDSGen" class="underline">Mã nguồn và chi tiết</a></p>
                `
            },
            {
                type: 'text',
                title: 'Tiện ích mở rộng Video HEVC',
                content: `
                <p>Đây là tiện ích mở rộng trả phí của Microsoft để phát video High Efficiency Video Coding (HEVC).</p>
                <p class="mt-2 text-sm text-[#8e8ea0]">Liên kết tải xuống: <a href="#" class="text-[#576FEC] font-bold">Buzzheavier</a></p>
                <p class="mt-2 text-sm text-[#8e8ea0]">Cách khác: Tìm kiếm <code class="bg-black/40 px-1 rounded text-[#576FEC]">9nmzlz57r3t7</code> trên <a href="https://store.rg-adguard.net/" class="underline">rg-adguard.net</a>.</p>
                `
            },
            {
                type: 'activation-section',
                title: 'Visual Studio',
                content: [UNSUPPORTED_KEYS_DATA[1]]
            },
            {
                type: 'text',
                content: '<p>Tải xuống: <a href="https://visualstudio.microsoft.com/downloads/" class="underline">Tải xuống Visual Studio</a></p>'
            },
            {
                type: 'activation-section',
                title: 'SQL Server',
                content: [UNSUPPORTED_KEYS_DATA[2]]
            },
            {
                type: 'text',
                content: '<p>Tải xuống: <a href="#" class="underline">Tải xuống SQL Server</a></p>'
            },
            {
                type: 'text',
                title: 'Microsoft Configuration Manager (MECM / SCCM)',
                content: '<p>Tải xuống: <a href="#" class="underline">Evaluation Center</a></p><p class="mt-2 text-sm text-[#8e8ea0]">Mã kích hoạt:</p>'
            },
            {
                type: 'code',
                language: 'text',
                content: 'BXH69-M62YX-QQD6R-3GPWX-8WMFY'
            },
            {
                type: 'callout',
                variant: 'tip',
                content: 'Nếu bạn cần trợ giúp với các sản phẩm Microsoft khác, hãy liên hệ với chúng tôi <a href="#" class="underline">tại đây</a>.'
            }
        ]
    },

    // Other OS
    'folder-other-os': createPage('folder-other-os', 'Other Operating Systems', 'Hệ điều hành khác.', 'text', 'Android x86, Chrome OS...'),
    'os-android': createPage('os-android', 'Android x86', 'Chạy Android trên PC.', 'text', 'Link tải Android x86...'),
    'os-chrome': createPage('os-chrome', 'Chrome OS', 'Hệ điều hành của Google.', 'text', 'Link tải Chrome OS Flex...'),

    // Storage Data
    'folder-storage': createPage('folder-storage', 'Storage Data', 'Kho dữ liệu tổng hợp.', 'text', 'ISO, Software...'),
    'data-iso': createPage('data-iso', 'Kho ISO Gốc', 'Tổng hợp ISO Windows, Office, MacOS.', 'text', 'Danh sách ISO...'),
    'data-soft': createPage('data-soft', 'Kho Phần Mềm', 'Tổng hợp phần mềm.', 'text', 'Danh sách phần mềm...'),

    // Sponsor
    'sponsor': {
        id: 'sponsor',
        title: 'Ủng hộ / Tài trợ',
        description: 'Giúp chúng tôi nâng cấp lưu trữ và cải thiện tốc độ tải xuống.',
        headings: [
            { id: 'why', text: 'Tại sao ủng hộ?', level: 2 },
            { id: 'how', text: 'Cách ủng hộ', level: 2 },
            { id: 'sponsors', text: 'Danh sách ủng hộ', level: 2 },
        ],
        blocks: [
            { type: 'sponsor-page', content: '' }
        ]
    },

    // FAQ

    'folder-faq': createPage('folder-faq', 'FAQ', 'Câu hỏi thường gặp.', 'text', 'General FAQ...'),
    'faq-general': createPage('faq-general', 'General FAQ', 'Câu hỏi chung.', 'accordion', [
        { question: 'Website có thu phí không?', answer: 'Không, tất cả đều miễn phí.' },
        { question: 'Tải file có an toàn không?', answer: 'Có, tất cả file đều được kiểm duyệt.' }
    ]),
    'faq-install': createPage('faq-install', 'Installation FAQ', 'Câu hỏi về cài đặt.', 'accordion', [
        { question: 'Lỗi màn hình xanh khi cài Win?', answer: 'Kiểm tra lại RAM hoặc bộ cài.' }
    ]),

    // Docs
    'folder-docs': createPage('folder-docs', 'Documentation', 'Tài liệu hướng dẫn.', 'text', 'Docs start...'),
    'docs-start': createPage('docs-start', 'Getting Started', 'Bắt đầu sử dụng.', 'text', 'Welcome...'),
    'docs-api': createPage('docs-api', 'API Reference', 'Tài liệu API.', 'text', 'API endpoints...'),


    // Tutorials Root
    'folder-7': createPage('folder-7', 'HƯỚNG DẪN (Tutorials)', 'Hướng dẫn cài đặt và sử dụng.', 'text', 'Chọn bài hướng dẫn...'),
    'tut-install-win': createPage('tut-install-win', 'Cài Đặt Windows', 'Hướng dẫn cài Win 10, 11.', 'text', 'Bước 1: Tạo USB...'),
    'tut-install-mac': createPage('tut-install-mac', 'Cài Đặt MacOS', 'Hướng dẫn cài Hackintosh.', 'text', 'Chuẩn bị EFI...'),
    'tut-install-lin': createPage('tut-install-lin', 'Cài Đặt Linux', 'Hướng dẫn cài Ubuntu.', 'text', 'Dual boot...'),
    'tut-install-soft': createPage('tut-install-soft', 'Cài Đặt Phần Mềm', 'Hướng dẫn crack.', 'text', 'Tắt antivirus...'),
    'tut-active': createPage('tut-active', 'Active & Bản Quyền', 'Hướng dẫn kích hoạt.', 'text', 'Sử dụng CMD...'),
    'tut-maint': createPage('tut-maint', 'Bảo Trì & Sửa Chữa', 'Vệ sinh máy tính.', 'text', 'Tra keo tản nhiệt...'),
    'tut-net': createPage('tut-net', 'Mạng & Bảo Mật', 'Cấu hình modem.', 'text', 'Mở port...'),

    // Tips Root
    'folder-8': createPage('folder-8', 'THỦ THUẬT (Tips)', 'Mẹo hay công nghệ.', 'text', 'Chọn thủ thuật...'),
    'tip-win': createPage('tip-win', 'Thủ Thuật Windows', 'Registry, Group Policy.', 'text', 'Tắt update...'),
    'tip-mac': createPage('tip-mac', 'Thủ Thuật MacOS', 'Terminal commands.', 'text', 'Hiện file ẩn...'),
    'tip-office': createPage('tip-office', 'Thủ Thuật Office', 'Excel formulas.', 'text', 'Hàm VLOOKUP...'),
    'tip-browser': createPage('tip-browser', 'Thủ Thuật Trình Duyệt', 'Chrome flags.', 'text', 'Tăng tốc download...'),
    'tip-mobile': createPage('tip-mobile', 'Thủ Thuật Điện Thoại', 'Android, iOS.', 'text', 'Root máy...'),

    // Games Root
    'folder-9': createPage('folder-9', 'GAME & GIẢI TRÍ', 'Game PC và Tools.', 'text', 'Chọn game...'),
    'game-pc': createPage('game-pc', 'Game PC', 'Game Offline hay.', 'text', 'GTA V, Cyberpunk...'),
    'game-tools': createPage('game-tools', 'Gaming Tools', 'MSI Afterburner...', 'text', 'FPS Monitor...'),
    'game-crack': createPage('game-crack', 'Game Cracks', 'File crack riêng.', 'text', 'Goldberg Emu...'),

    // News Root
    'folder-10': createPage('folder-10', 'TIN TỨC & ĐÁNH GIÁ', 'Tin tức mới nhất.', 'news-grid', NEWS_LIST),
    'news-tech': createPage('news-tech', 'Tin Tức Công Nghệ', 'Cập nhật hàng ngày.', 'news-grid', NEWS_LIST),
    'news-review': createPage('news-review', 'Đánh Giá & So Sánh', 'Review Laptop, PC.', 'text', 'Review MacBook Air M2...'),
    'news-new': createPage('news-new', 'Phần Mềm Mới Ra Mắt', 'Cập nhật hàng tuần.', 'text', 'Windows 12 Concept...'),

    'news-site': createPage('news-site', 'Thông Báo Website', 'Thông báo từ Admin.', 'text', 'Bảo trì server...')
};

// ─────────────────────────────────────────────────────────────────
// DRIVER DATA
// ─────────────────────────────────────────────────────────────────


const WIN_DRIVERS: DriverItem[] = [
    // GPU
    { id: 'w-gpu-nvidia-geforce', name: 'NVIDIA GeForce Game Ready Driver', brand: 'NVIDIA', device: 'GTX 10xx / RTX 20xx / 30xx / 40xx', version: '551.86', date: '2024-03-25', size: '806 MB', link: 'https://www.nvidia.com/Download/index.aspx', category: 'GPU' },
    { id: 'w-gpu-nvidia-studio', name: 'NVIDIA Studio Driver', brand: 'NVIDIA', device: 'RTX 20xx / 30xx / 40xx', version: '551.23', date: '2024-01-24', size: '800 MB', link: 'https://www.nvidia.com/en-us/drivers/nvidia-update/', category: 'GPU' },
    { id: 'w-gpu-amd-adrenalin', name: 'AMD Radeon Software Adrenalin Edition', brand: 'AMD', device: 'RX 5xxx / 6xxx / 7xxx', version: '24.3.1', date: '2024-03-13', size: '736 MB', link: 'https://www.amd.com/en/support', category: 'GPU' },
    { id: 'w-gpu-intel-arc', name: 'Intel Arc & Iris Xe Graphics Driver', brand: 'Intel', device: 'Arc A-Series / Iris Xe', version: '31.0.101.5333', date: '2024-05-14', size: '750 MB', link: 'https://www.intel.com/content/www/us/en/download-center/home.html', category: 'GPU' },
    { id: 'w-gpu-intel-hd', name: 'Intel HD Graphics Driver (Gen 7-12)', brand: 'Intel', device: 'HD 4000 → Xe LP', version: '30.0.101.2080', date: '2023-11-10', size: '410 MB', link: 'https://www.intel.com/content/www/us/en/download-center/home.html', category: 'GPU' },
    // Audio
    { id: 'w-audio-realtek-hd', name: 'Realtek HD Audio Driver', brand: 'Realtek', device: 'ALC887 / ALC897 / ALC1200', version: 'R2.82 (6.0.9398.1)', date: '2024-01-18', size: '226 MB', link: 'https://www.realtek.com/en/component/zoo/category/pc-audio-codecs-high-definition-audio-codecs-software', category: 'Audio' },
    { id: 'w-audio-creative-sb', name: 'Creative Sound Blaster Driver', brand: 'Creative', device: 'Sound Blaster Z / ZxR / AE-5', version: '6.0.115.17', date: '2024-02-12', size: '140 MB', link: 'https://support.creative.com/Products/ProductList.aspx?catid=1', category: 'Audio' },
    // LAN / Ethernet
    { id: 'w-lan-realtek', name: 'Realtek PCIe GbE Family Ethernet Driver', brand: 'Realtek', device: 'RTL8111 / RTL8125 / RTL8168', version: '11.039.1221.2023', date: '2024-01-09', size: '34 MB', link: 'https://www.realtek.com/en/component/zoo/category/network-interface-controllers-10-100-1000m-gigabit-ethernet-pci-express-software', category: 'LAN' },
    { id: 'w-lan-intel', name: 'Intel Ethernet Adapter Complete Driver Pack', brand: 'Intel', device: 'Intel I219-V / I225-V / I226-V', version: '28.2', date: '2024-02-01', size: '96 MB', link: 'https://www.intel.com/content/www/us/en/download/727998/intel-network-adapter-driver-for-windows.html', category: 'LAN' },
    // WiFi
    { id: 'w-wifi-intel-ax', name: 'Intel Wi-Fi 6/6E AX201/AX210 Driver', brand: 'Intel', device: 'Wi-Fi 6 AX200 / AX201 / Wi-Fi 6E AX210', version: '22.240.0.8', date: '2024-04-10', size: '34 MB', link: 'https://www.intel.com/content/www/us/en/download/19351/windows-10-and-windows-11-wi-fi-drivers-for-intel-wireless-adapters.html', category: 'WiFi' },
    { id: 'w-wifi-mediatek', name: 'MediaTek Wi-Fi 6 MT7921 Driver', brand: 'MediaTek', device: 'MT7921 / MT7922', version: '3.3.0.628', date: '2024-03-08', size: '28 MB', link: 'https://www.mediatek.com/products/pcAndLaptops/mt7921', category: 'WiFi' },
    // Chipset
    { id: 'w-chipset-amd', name: 'AMD Chipset Software', brand: 'AMD', device: 'AMD 300/400/500/600 Series', version: '5.09.20.1014', date: '2024-05-15', size: '390 MB', link: 'https://www.amd.com/en/support/chipsets/amd-socket-am4/x570', category: 'Chipset' },
    { id: 'w-chipset-intel', name: 'Intel Chipset Device Software', brand: 'Intel', device: 'Intel 300/400/500/600/700 Series', version: '10.1.19444.8378', date: '2024-04-22', size: '8 MB', link: 'https://www.intel.com/content/www/us/en/download/19347/chipset-inf-utility.html', category: 'Chipset' },
    // WiFi & Bluetooth Expansion
    { id: 'w-wifi-intel-ac', name: 'Intel Wireless-AC WiFi Driver', brand: 'Intel', device: 'Dual Band Wireless-AC 3160/3165/7260/7265/8260/8265', version: '22.240.0', date: '2024-04-10', size: '30 MB', link: 'https://www.intel.com/content/www/us/en/download/19351/windows-10-and-windows-11-wi-fi-drivers-for-intel-wireless-adapters.html', category: 'WiFi' },
    { id: 'w-bt-intel', name: 'Intel Wireless Bluetooth Driver', brand: 'Intel', device: 'Intel Wireless Bluetooth Adapters', version: '23.40.0', date: '2024-05-14', size: '52 MB', link: 'https://www.intel.com/content/www/us/en/download/18649/intel-wireless-bluetooth-for-windows-10-and-windows-11.html', category: 'Bluetooth' },
    { id: 'w-wifi-qualcomm', name: 'Qualcomm Atheros Wireless LAN Driver', brand: 'Qualcomm', device: 'QCA61x4A / QCA9377 / QCA9008', version: '12.0.0.1305', date: '2023-11-15', size: '45 MB', link: 'https://www.ath-drivers.eu/qualcomm-atheros-download-drivers-nr-364-with-code-4545.html', category: 'WiFi' },
    { id: 'w-bt-qualcomm', name: 'Qualcomm Atheros Bluetooth Driver', brand: 'Qualcomm', device: 'QCA61x4A / QCA9377 Bluetooth', version: '10.0.0.1305', date: '2023-11-20', size: '32 MB', link: 'https://www.ath-drivers.eu/qualcomm-atheros-bluetooth-drivers.html', category: 'Bluetooth' },
    { id: 'w-wifi-broadcom', name: 'Broadcom 802.11 Network Adapter Driver', brand: 'Broadcom', device: 'BCM43xx Wireless LAN', version: '7.35.351.0', date: '2023-08-10', size: '15 MB', link: 'https://www.station-drivers.com/index.php/en/component/remository/Drivers/Broadcom/WLAN/802.11ac-Network-Adapter/Broadcom-802.11-Network-Adapter-Wireless-LAN-Driver-Version-7.35.351.0/lang,en-gb/', category: 'WiFi' },
    // Storage / USB
    { id: 'w-usb-asmedia', name: 'ASMedia USB 3.2 Host Controller Driver', brand: 'ASMedia', device: 'ASM1042 / ASM1042A / ASM2142', version: '1.16.27.1', date: '2023-09-01', size: '12 MB', link: 'https://www.asmedia.com.tw/product/ASM1042', category: 'USB' },
    { id: 'w-storage-samsung-nvme', name: 'Samsung NVMe Driver', brand: 'Samsung', device: '970 EVO / 970 PRO / 960 EVO / 960 PRO', version: '3.3', date: '2020-05-12', size: '5 MB', link: 'https://semiconductor.samsung.com/consumer-storage/support/tools/', category: 'Storage' },
];

const MAC_DRIVERS: DriverItem[] = [
    { id: 'm-gpu-amd-pro', name: 'AMD Radeon Pro Software for macOS', brand: 'AMD', device: 'Radeon Pro 5000 / 6000 series (Mac)', version: '11.0', date: '2023-06-26', size: '480 MB', link: 'https://www.amd.com/en/support/kb/release-notes/rn-amd-sw-macosRadeon11-0', category: 'GPU' },
    { id: 'm-usb-prolific', name: 'Prolific USB-Serial Driver for macOS', brand: 'Prolific', device: 'PL2303 / PL2303G / PL25A1', version: '2.0.5 (macOS 12+)', date: '2023-07-12', size: '5 MB', link: 'https://www.prolific.com.tw/US/ShowProduct.aspx?p_id=229&pcid=41', category: 'USB' },
    { id: 'm-net-rtl8153', name: 'Realtek USB LAN Driver for macOS', brand: 'Realtek', device: 'RTL8153 / RTL8152', version: '2.1.0 (macOS 11+)', date: '2024-01-05', size: '2 MB', link: 'https://www.realtek.com/en/component/zoo/category/network-interface-controllers-10-100-1000m-gigabit-ethernet-usb-3-0-software', category: 'LAN' },
    { id: 'm-wifi-broadcom', name: 'Broadcom Wi-Fi Driver for macOS Ventura', brand: 'Broadcom', device: 'BCM943602CS / BCM94360CD', version: '14.5 (Ventura)', date: '2023-09-26', size: '12 MB', link: 'https://support.apple.com/en-us/HT213772', category: 'WiFi' },
    { id: 'm-audio-scarlett', name: 'Focusrite Scarlett Series macOS Driver', brand: 'Focusrite', device: 'Scarlett 2i2 / 4i4 / 18i20 (3rd Gen)', version: '4.107.1', date: '2024-03-19', size: '55 MB', link: 'https://focusrite.com/downloads', category: 'Audio' },
    { id: 'm-print-gutenprint', name: 'Gutenprint Printer Driver for macOS', brand: 'Gutenprint', device: 'Canon / Epson / HP (universal)', version: '5.3.4', date: '2023-08-06', size: '95 MB', link: 'https://gutenprint.sourceforge.io/', category: 'Printer' },
    { id: 'm-camera-logitech', name: 'Logi Capture for macOS', brand: 'Logitech', device: 'C922 / C925e / C930e / BRIO', version: '1.5.8', date: '2024-02-14', size: '45 MB', link: 'https://www.logitech.com/en-us/software/capture.html', category: 'Camera' },
];

const LINUX_DRIVERS: DriverItem[] = [
    { id: 'l-gpu-nvidia', name: 'NVIDIA Linux Driver (Official)', brand: 'NVIDIA', device: 'GeForce GTX 600+ / RTX 20xx / 30xx / 40xx', version: '550.67', date: '2024-03-14', size: '316 MB', link: 'https://www.nvidia.com/en-us/drivers/unix/', category: 'GPU' },
    { id: 'l-gpu-nvidia-open', name: 'NVIDIA Open GPU Kernel Module', brand: 'NVIDIA', device: 'RTX 2000+ (Open Source)', version: '550.67', date: '2024-03-14', size: '2 MB', link: 'https://github.com/NVIDIA/open-gpu-kernel-modules', category: 'GPU' },
    { id: 'l-gpu-amd-mesa', name: 'AMD Mesa (AMDGPU / RadeonSI)', brand: 'AMD / Mesa', device: 'RX 400+ / GCN Architecture+', version: 'Mesa 24.0.4', date: '2024-04-08', size: '— (distro package)', link: 'https://mesa3d.org/', category: 'GPU' },
    { id: 'l-wifi-rtl8821ce', name: 'Realtek RTL8821CE WiFi Driver', brand: 'Realtek', device: 'RTL8821CE (common in HP, Asus laptops)', version: 'v1 (kernel 5.10+)', date: '2023-09-30', size: '2 MB', link: 'https://github.com/tomaspinho/rtl8821ce', category: 'WiFi' },
    { id: 'l-wifi-mt76', name: 'MediaTek MT76 WiFi Driver', brand: 'MediaTek', device: 'MT7921 / MT7922 (mainlined kernel 5.12+)', version: 'Kernel 6.8', date: '2024-03-01', size: '— (mainline kernel)', link: 'https://wireless.wiki.kernel.org/en/users/Drivers/mt76', category: 'WiFi' },
    { id: 'l-lan-r8125', name: 'Realtek R8125 2.5G LAN Driver', brand: 'Realtek', device: 'RTL8125 / RTL8125B', version: '9.012.04', date: '2024-01-18', size: '0.5 MB', link: 'https://www.realtek.com/en/component/zoo/category/network-interface-controllers-10-100-1000m-gigabit-ethernet-pci-express-software', category: 'LAN' },
    { id: 'l-audio-alsa', name: 'Advanced Linux Sound Architecture (ALSA)', brand: 'Linux Foundation', device: 'Universal Audio Framework', version: 'ALSA 1.2.11', date: '2024-02-20', size: '— (kernel module)', link: 'https://www.alsa-project.org/', category: 'Audio' },
    { id: 'l-print-hplip', name: 'HPLIP — HP Linux Imaging and Printing', brand: 'HP', device: 'HP Printers / Scanners (700+ models)', version: '3.23.12', date: '2023-12-11', size: '84 MB', link: 'https://developers.hp.com/hp-linux-imaging-and-printing', category: 'Printer' },
    { id: 'l-bluetooth-broadcom', name: 'Broadcom Bluetooth Firmware', brand: 'Broadcom', device: 'BCM20702 / BCM4352', version: '12.0.1.1012', date: '2023-06-01', size: '0.7 MB', link: 'https://github.com/winterheart/broadcom-bt-firmware', category: 'Bluetooth' },
];

const PRINTER_DRIVERS: DriverItem[] = [
    // Canon
    { id: 'p-canon-pixma', name: 'Canon PIXMA Series Driver', brand: 'Canon', device: 'PIXMA G / TS / TR / MG / MX / iP Series', version: '1.50 (Win) / 21.50 (Mac)', date: '2024-02-15', size: '42 MB', link: 'https://www.usa.canon.com/support/p/pixma', category: 'Printer' },
    { id: 'p-canon-imageclass', name: 'Canon imageCLASS Laser Driver', brand: 'Canon', device: 'imageCLASS MF / LBP Series', version: 'UFR II 5.94 (Win)', date: '2024-01-30', size: '95 MB', link: 'https://www.usa.canon.com/support/p/imageclass', category: 'Printer' },
    // Epson
    { id: 'p-epson-l-series', name: 'Epson L-Series EcoTank Driver', brand: 'Epson', device: 'L3110 / L3210 / L5290 / L14150', version: '2.72 (Win) / 9.98 (Mac)', date: '2024-03-01', size: '38 MB', link: 'https://epson.com/support/sl/s', category: 'Printer' },
    { id: 'p-epson-workforce', name: 'Epson WorkForce Series Driver', brand: 'Epson', device: 'WF-2850 / WF-4830 / WF-7840', version: '2.65 (Win)', date: '2023-12-18', size: '44 MB', link: 'https://epson.com/find-a-product/c/all-inkjet-printer', category: 'Printer' },
    // HP
    { id: 'p-hp-laserjet', name: 'HP LaserJet Universal Print Driver', brand: 'HP', device: 'HP LaserJet Pro / Enterprise (All)', version: '6.9.0', date: '2024-03-20', size: '66 MB', link: 'https://support.hp.com/us-en/drivers/selfservice/hp-laserjet-pro-mfp-m428-m429-series/28669522', category: 'Printer' },
    { id: 'p-hp-deskjet', name: 'HP DeskJet / ENVY / OfficeJet Driver', brand: 'HP', device: 'DeskJet 2700–4100 / ENVY 6000–8000', version: 'HP Smart App 11.7', date: '2024-04-10', size: '220 MB', link: 'https://support.hp.com/us-en/drivers', category: 'Printer' },
    // Brother
    { id: 'p-brother-dcp', name: 'Brother DCP / MFC Universal Driver', brand: 'Brother', device: 'DCP-L2550DW / MFC-L2750DW / L3770CDW', version: 'A / B driver 2.1.0', date: '2024-01-22', size: '90 MB', link: 'https://support.brother.com/g/s/id/dev/en/index.htm?c=us&lang=en&navi=offall&comple=on&redirect=on', category: 'Printer' },
    // Scan only
    { id: 'p-scan-scansnap', name: 'Fujitsu ScanSnap Manager Driver', brand: 'Fujitsu', device: 'ScanSnap iX1600 / iX1500 / iX500', version: '7.1.12', date: '2024-02-08', size: '310 MB', link: 'https://scansnap.fujitsu.com/global/dl/', category: 'Scanner' },
    // Label
    { id: 'p-brother-label', name: 'Brother P-touch Label Printer Driver', brand: 'Brother', device: 'PT-D410 / PT-D460BT / QL-820NWB', version: '2.3.6', date: '2024-01-10', size: '18 MB', link: 'https://support.brother.com/g/s/id/dev/en/index.htm', category: 'Label' },
    // Samsung
    { id: 'p-samsung-xpress', name: 'Samsung Xpress Series Driver', brand: 'Samsung', device: 'M2020 / M2070 / C430 / C480 Series', version: 'V3.13.12', date: '2023-11-25', size: '31 MB', link: 'https://support.hp.com/us-en/drivers/products/samsung-printers', category: 'Printer' },
    // Xerox
    { id: 'p-xerox-phaser', name: 'Xerox Phaser / WorkCentre Universal Driver', brand: 'Xerox', device: 'Phaser 3020 / WorkCentre 3025 / 3215', version: 'V3.50.62', date: '2024-01-15', size: '55 MB', link: 'https://www.support.xerox.com/en-us/product/phaser-3020', category: 'Printer' },
    // Ricoh
    { id: 'p-ricoh-aficio', name: 'Ricoh Aficio / MP Series PCL6 Driver', brand: 'Ricoh', device: 'MP 2014 / 2501 / 3054 / C2003', version: 'V1.12.0.0', date: '2024-02-10', size: '25 MB', link: 'https://www.ricoh-usa.com/en/support-and-download', category: 'Printer' },
    // Lexmark
    { id: 'p-lexmark-universal', name: 'Lexmark Universal Print Driver', brand: 'Lexmark', device: 'MS / MX / CS / CX Series', version: 'V2.18.0', date: '2023-12-05', size: '60 MB', link: 'https://www.lexmark.com/en_us/support/universal-print-driver.html', category: 'Printer' },
    // Toshiba
    { id: 'p-toshiba-estudio', name: 'Toshiba e-STUDIO Universal Driver', brand: 'Toshiba', device: 'e-STUDIO 2528A / 3528A / 4528A', version: 'V7.221', date: '2024-03-12', size: '85 MB', link: 'https://business.toshiba.com/support/index.html', category: 'Printer' },
];

// ─── Driver Page Definitions ──────────────────────────────────────────────────


const WIN_DRIVER_PLATFORMS: DriverPlatform[] = [
    { id: 'all-windows', label: 'Windows Driver', icon: null, color: '#0078D4', items: WIN_DRIVERS },
];

const MAC_DRIVER_PLATFORMS: DriverPlatform[] = [
    { id: 'all-mac', label: 'macOS Driver', icon: null, color: '#A2AAAD', items: MAC_DRIVERS },
];

const LINUX_DRIVER_PLATFORMS: DriverPlatform[] = [
    { id: 'all-linux', label: 'Linux Driver', icon: null, color: '#F7A800', items: LINUX_DRIVERS },
];

const PRINTER_DRIVER_PLATFORMS: DriverPlatform[] = [
    { id: 'all-printer', label: 'Printer / Scanner', icon: null, color: '#10B981', items: PRINTER_DRIVERS },
];

export const DRIVER_PAGES: Record<string, DriverPlatform[]> = {
    'driver-windows': WIN_DRIVER_PLATFORMS,
    'driver-mac': MAC_DRIVER_PLATFORMS,
    'driver-linux': LINUX_DRIVER_PLATFORMS,
    'driver-printer': PRINTER_DRIVER_PLATFORMS,
};

export const PAGES_WITH_DRIVERS: Record<string, any> = {
    'driver-windows': {
        id: 'driver-windows',
        title: 'Driver Windows',
        description: 'Driver GPU, Audio, LAN, WiFi, Chipset cho Windows 10 & 11 — bản gốc từ nhà sản xuất.',
        headings: [{ id: 'drivers', text: 'Driver packages', level: 2 }],
        blocks: [{ type: 'driver-page', content: WIN_DRIVER_PLATFORMS }],
    },
    'driver-mac': {
        id: 'driver-mac',
        title: 'Driver macOS',
        description: 'Driver GPU, USB, LAN, Audio cho macOS Ventura & Sonoma — bản gốc từ nhà sản xuất.',
        headings: [{ id: 'drivers', text: 'Driver packages', level: 2 }],
        blocks: [{ type: 'driver-page', content: MAC_DRIVER_PLATFORMS }],
    },
    'driver-linux': {
        id: 'driver-linux',
        title: 'Driver Linux',
        description: 'Driver GPU, WiFi, LAN, Bluetooth, Audio cho Ubuntu / Debian / Arch / Fedora.',
        headings: [{ id: 'drivers', text: 'Driver packages', level: 2 }],
        blocks: [{ type: 'driver-page', content: LINUX_DRIVER_PLATFORMS }],
    },
    'driver-printer': {
        id: 'driver-printer',
        title: 'Driver Máy in & Máy scan',
        description: 'Driver chính hãng Canon, Epson, HP, Brother, Fujitsu — Windows & Mac.',
        headings: [{ id: 'drivers', text: 'Driver packages', level: 2 }],
        blocks: [{ type: 'driver-page', content: PRINTER_DRIVER_PLATFORMS }],
    },
};