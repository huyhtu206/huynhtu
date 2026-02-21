import { NavItem } from '../types';

export const NAVIGATION: NavItem[] = [
    {
        id: 'folder-1',
        title: 'Windows & Office',
        pages: [
            { id: 'win-11', title: 'Windows 11' },
            { id: 'win-10', title: 'Windows 10' },
            { id: 'win-ltsc', title: 'Windows LTSC' },
            { id: 'win-arm64', title: 'Windows ARM64' },
            { id: 'win-server', title: 'Windows Server' },
            { id: 'win-81', title: 'Windows 8.1' },
            { id: 'win-8', title: 'Windows 8' },
            { id: 'win-7', title: 'Windows 7' },
            { id: 'win-vista', title: 'Windows Vista' },
            { id: 'win-xp', title: 'Windows XP' },
            { id: 'office-c2r', title: 'Office C2R' },
            { id: 'office-msi', title: 'Office MSI VL' },
            { id: 'office-mac', title: 'Office for MacOS' },
        ]
    },
    {
        id: 'folder-2',
        title: 'GHOST OS',
        pages: [
            { id: 'ghost-11', title: 'Ghost Windows 11' },
            { id: 'ghost-10', title: 'Ghost Windows 10' },
            { id: 'ghost-81', title: 'Ghost Windows 8.1 Update Final' },
            { id: 'ghost-7', title: 'Ghost Windows 7 SP1 AIO x64/x86' },
            { id: 'ghost-vista', title: 'Ghost Windows Vista' },
            { id: 'ghost-xp', title: 'Ghost Windows XP' },
        ]
    },
    {
        id: 'folder-3',
        title: 'Software',
        pages: [
            { id: 'sw-win', title: 'Phần Mềm Windows' },
            { id: 'sw-mac', title: 'Phần Mềm MacOS' },
            { id: 'sw-linux', title: 'Phần Mềm Linux' }
        ]
    },
    {
        id: 'folder-5',
        title: 'Utilities',
        pages: [
            { id: 'usb-boot', title: 'Tạo USB Boot' },
            { id: 'active-win', title: 'Active Windows & Office' },
            { id: 'block-adobe', title: 'Block Adobe / Patch' },
            { id: 'fix-win', title: 'Sửa Lỗi Windows' },
            { id: 'opt-sys', title: 'Tối Ưu Hệ Thống' },
        ]
    },
    {
        id: 'folder-6',
        title: 'Driver',
        pages: [
            { id: 'drv-vga', title: 'Driver VGA / GPU' },
            { id: 'drv-audio', title: 'Driver Âm Thanh' },
            { id: 'drv-net', title: 'Driver Mạng (LAN / WiFi)' },
            { id: 'drv-print', title: 'Driver Máy In' },
            { id: 'drv-cam', title: 'Driver Camera & Scan' },
            { id: 'drv-game', title: 'Driver Gaming & Controller' },
            { id: 'drv-aio', title: 'Driver Tổng Hợp' },
        ]
    },
    {
        id: 'folder-7',
        title: 'Tutorials',
        pages: [
            { id: 'tut-install-win', title: 'Cài Đặt Windows' },
            { id: 'tut-install-mac', title: 'Cài Đặt MacOS' },
            { id: 'tut-install-lin', title: 'Cài Đặt Linux' },
            { id: 'tut-install-soft', title: 'Cài Đặt Phần Mềm' },
            { id: 'tut-active', title: 'Active & Bản Quyền' },
            { id: 'tut-maint', title: 'Bảo Trì & Sửa Chữa' },
            { id: 'tut-net', title: 'Mạng & Bảo Mật' },
        ]
    },
    {
        id: 'folder-8',
        title: 'Tips & Tricks',
        pages: [
            { id: 'tip-win', title: 'Thủ Thuật Windows' },
            { id: 'tip-mac', title: 'Thủ Thuật MacOS' },
            { id: 'tip-office', title: 'Thủ Thuật Office' },
            { id: 'tip-browser', title: 'Thủ Thuật Trình Duyệt' },
            { id: 'tip-mobile', title: 'Thủ Thuật Điện Thoại' },
        ]
    },
    {
        id: 'folder-9',
        title: 'Activation Key',
        pages: [
            { id: 'activation-hwid', title: 'HWID Windows 10/11' },
            { id: 'activation-ohook', title: 'Ohook Office' },
        ]
    },
    {
        id: 'folder-10',
        title: 'News & Reviews',
        pages: [
            { id: 'news-tech', title: 'Tin Tức Công Nghệ' },
            { id: 'news-review', title: 'Đánh Giá & So Sánh' },
            { id: 'news-new', title: 'Phần Mềm Mới Ra Mắt' },
            { id: 'news-site', title: 'Thông Báo Website' },
        ]
    }
];
