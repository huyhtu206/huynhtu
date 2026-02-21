import { DownloadItem, GhostItem } from '../types';

export const SOFTWARE_DATABASE: DownloadItem[] = [
    // Web Browsers
    {
        id: 'chrome',
        title: 'Google Chrome', version: '121.0', size: 'Installer', description: 'Trình duyệt Web phổ biến nhất từ Google.',
        link: 'https://api.huynhtu.com/windows/software/chrome',
        icon: 'globe', category: 'Web Browsers',
        iconUrl: 'https://logo.clearbit.com/google.com',
        platforms: ['windows', 'mac', 'linux']
    },
    {
        id: 'firefox',
        title: 'Firefox', version: '123.0', size: '55 MB', description: 'Trình duyệt Web mã nguồn mở bảo mật.',
        link: 'https://api.huynhtu.com/windows/software/firefox',
        icon: 'globe', category: 'Web Browsers',
        iconUrl: 'https://logo.clearbit.com/mozilla.org',
        versions: ['123.0', '122.0', '115.0 ESR'],
        versionLinks: {
            '123.0': 'https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=vi',
            '122.0': 'https://ftp.mozilla.org/pub/firefox/releases/122.0/win64/vi/Firefox%20Setup%20122.0.exe',
            '115.0 ESR': 'https://download.mozilla.org/?product=firefox-esr-latest-ssl&os=win64&lang=vi'
        },
        platforms: ['windows', 'mac', 'linux']
    },
    {
        id: 'edge',
        title: 'Microsoft Edge', version: '121.0', size: 'Installer', description: 'Trình duyệt hiệu năng cao dựa trên Chromium.',
        link: 'https://api.huynhtu.com/windows/software/edge',
        icon: 'globe', category: 'Web Browsers',
        iconUrl: 'https://logo.clearbit.com/microsoft.com',
        platforms: ['windows', 'mac', 'linux']
    },
    {
        id: 'brave',
        title: 'Brave Browser', version: '1.62', size: '1.2 MB', description: 'Trình duyệt chặn quảng cáo và bảo mật.',
        link: 'https://api.huynhtu.com/windows/software/brave',
        icon: 'globe', category: 'Web Browsers',
        iconUrl: 'https://logo.clearbit.com/brave.com',
        platforms: ['windows', 'mac']
    },

    // Utilities
    {
        id: 'unikey',
        title: 'Unikey', version: '4.6 RC2', size: '1 MB', description: 'Bộ gõ tiếng Việt nhẹ, ổn định nhất.',
        link: 'https://api.huynhtu.com/windows/software/unikey',
        icon: 'keyboard', category: 'Utilities',
        iconUrl: 'https://www.unikey.org/assets/unikey-logo.png',
        versions: ['4.6 RC2', '4.3 RC5', '4.2 RC4'],
        versionLinks: {
            '4.6 RC2': 'https://www.unikey.org/assets/unikey46RC2-230919-win64.zip',
            '4.3 RC5': 'https://www.unikey.org/assets/unikey43RC5-200929-win64.zip',
            '4.2 RC4': 'https://sourceforge.net/projects/unikey/files/unikey-win/4.2%20RC4/unikey42RC4-140823-win64.zip/download'
        },
        platforms: ['windows', 'linux']
    },
    {
        id: 'winrar',
        title: 'WinRAR', version: '6.24', size: '5.2 MB', description: 'Trình giải nén file mạnh mẽ nhất.',
        link: 'https://api.huynhtu.com/windows/software/winrar',
        icon: 'archive', category: 'Utilities',
        iconUrl: 'https://logo.clearbit.com/rarlab.com',
        versions: ['6.24', '6.23', '5.91'],
        versionLinks: {
            '6.24': 'https://www.rarlab.com/rar/winrar-x64-624.exe',
            '6.23': 'https://www.rarlab.com/rar/winrar-x64-623.exe',
            '5.91': 'https://www.rarlab.com/rar/winrar-x64-591.exe'
        },
        platforms: ['windows']
    },
    {
        id: '7zip',
        title: '7-Zip', version: '23.01', size: '1.5 MB', description: 'Giải nén mã nguồn mở miễn phí.',
        link: 'https://api.huynhtu.com/windows/software/7zip',
        icon: 'archive', category: 'Utilities',
        iconUrl: 'https://www.7-zip.org/a/7z-logo.png',
        platforms: ['windows', 'linux']
    },

    // Office & PDF
    {
        id: 'office-c2r',
        title: 'Office C2R Install', version: '7.7.7', size: '15 MB', description: 'Công cụ tải và cài đặt Office mọi phiên bản.',
        link: 'https://api.huynhtu.com/windows/software/office-c2r',
        icon: 'file-text', category: 'Office & PDF',
        iconUrl: 'https://logo.clearbit.com/microsoft.com',
        platforms: ['windows']
    },
    {
        id: 'foxit-reader',
        title: 'Foxit PDF Reader', version: '2023.3', size: '160 MB', description: 'Trình đọc PDF nhẹ và đầy đủ tính năng.',
        link: 'https://api.huynhtu.com/windows/software/foxit',
        icon: 'file-text', category: 'Office & PDF',
        iconUrl: 'https://logo.clearbit.com/foxitsoftware.com',
        platforms: ['windows', 'mac']
    },

    // Development
    {
        id: 'vscode',
        title: 'Visual Studio Code', version: '1.86', size: '92 MB', description: 'Trình soạn thảo mã nguồn mạnh mẽ.',
        link: 'https://api.huynhtu.com/windows/software/vscode',
        icon: 'terminal', category: 'Development',
        iconUrl: 'https://logo.clearbit.com/visualstudio.com',
        versions: ['1.86', '1.85', '1.80'],
        platforms: ['windows', 'mac', 'linux']
    },
    {
        id: 'nodejs',
        title: 'Node.js LTS', version: '20.11.1', size: '30 MB', description: 'Môi trường thực thi JavaScript server.',
        link: 'https://api.huynhtu.com/windows/software/nodejs',
        icon: 'terminal', category: 'Development',
        iconUrl: 'https://logo.clearbit.com/nodejs.org',
        versions: ['20.11.1', '18.19.0', '16.20.2'],
        versionLinks: {
            '20.11.1': 'https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi',
            '18.19.0': 'https://nodejs.org/dist/v18.19.0/node-v18.19.0-x64.msi',
            '16.20.2': 'https://nodejs.org/dist/v16.20.2/node-v16.20.2-x64.msi'
        },
        platforms: ['windows', 'mac', 'linux']
    },

    // Multimedia
    {
        id: 'vlc',
        title: 'VLC Media Player', version: '3.0.20', size: '42 MB', description: 'Trình phát Video mã nguồn mở đa năng.',
        link: 'https://api.huynhtu.com/windows/software/vlc',
        icon: 'play', category: 'Multimedia',
        iconUrl: 'https://logo.clearbit.com/videolan.org',
        platforms: ['windows', 'mac', 'linux']
    },
    {
        id: 'spotify',
        title: 'Spotify PC', version: 'Latest', size: '85 MB', description: 'Ứng dụng nghe nhạc trực tuyến số 1.',
        link: 'https://api.huynhtu.com/windows/software/spotify',
        icon: 'play', category: 'Multimedia',
        iconUrl: 'https://logo.clearbit.com/spotify.com',
        platforms: ['windows', 'mac']
    },

    // Security
    {
        id: 'kaspersky',
        title: 'Kaspersky Free', version: '21.15', size: '3.5 MB', description: 'Diệt Virus miễn phí chất lượng hàng đầu.',
        link: 'https://api.huynhtu.com/windows/software/kaspersky',
        icon: 'shield', category: 'Security',
        iconUrl: 'https://logo.clearbit.com/kaspersky.com',
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
