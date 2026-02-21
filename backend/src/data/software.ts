import { ServiceItem, NewsItem, DownloadItem, GhostItem } from '../types';

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
