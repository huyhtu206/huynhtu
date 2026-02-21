import { DocPage } from '../types';
import { WINDOWS_MENU } from './os_data';
import { OFFICE_VERSIONS, OFFICE_MAC_VERSIONS, OFFICE_MSI_VERSIONS } from './office';
import { SOFTWARE_DATABASE, GHOST_OS_DATABASE } from './software';

export const DOCS_DATA: Record<string, DocPage> = {
    'home': {
        id: 'home',
        title: 'Trang chủ',
        description: 'Chào mừng đến với Huynhtu Documentation',
        blocks: [],
        headings: []
    },
    'windows': {
        id: 'windows',
        title: 'Windows',
        description: 'Tải xuống ISO Windows nguyên bản từ Microsoft.',
        blocks: [{ type: 'windows-menu', content: WINDOWS_MENU, menuType: 'windows' }],
        headings: []
    },
    'win-11': {
        id: 'win-11',
        title: 'Windows 11',
        description: 'ISO Windows 11 nguyên bản từ Microsoft.',
        blocks: [{ type: 'windows-menu', content: [WINDOWS_MENU.find(i => i.id === 'win-11')!], menuType: 'windows' }],
        headings: []
    },
    'win-10': {
        id: 'win-10',
        title: 'Windows 10',
        description: 'ISO Windows 10 nguyên bản từ Microsoft.',
        blocks: [{ type: 'windows-menu', content: [WINDOWS_MENU.find(i => i.id === 'win-10')!], menuType: 'windows' }],
        headings: []
    },
    'win-ltsc': {
        id: 'win-ltsc',
        title: 'Windows LTSC',
        description: 'Windows Long-Term Servicing Channel.',
        blocks: [{ type: 'windows-menu', content: [WINDOWS_MENU.find(i => i.id === 'win-ltsc')!], menuType: 'windows' }],
        headings: []
    },
    'win-arm64': {
        id: 'win-arm64',
        title: 'Windows ARM64',
        description: 'Windows for ARM architecture.',
        blocks: [{ type: 'windows-menu', content: [WINDOWS_MENU.find(i => i.id === 'win-arm64')!], menuType: 'windows' }],
        headings: []
    },
    'win-server': {
        id: 'win-server',
        title: 'Windows Server',
        description: 'Windows Server editions.',
        blocks: [{ type: 'windows-menu', content: [WINDOWS_MENU.find(i => i.id === 'win-server')!], menuType: 'windows' }],
        headings: []
    },
    'win-81': {
        id: 'win-81',
        title: 'Windows 8.1',
        description: 'Tải xuống Windows 8.1.',
        blocks: [{ type: 'windows-menu', content: [WINDOWS_MENU.find(i => i.id === 'win-81')!], menuType: 'windows' }],
        headings: []
    },
    'win-8': {
        id: 'win-8',
        title: 'Windows 8',
        description: 'Tải xuống Windows 8.',
        blocks: [{ type: 'windows-menu', content: [WINDOWS_MENU.find(i => i.id === 'win-8')!], menuType: 'windows' }],
        headings: []
    },
    'win-7': {
        id: 'win-7',
        title: 'Windows 7',
        description: 'Tải xuống Windows 7 SP1.',
        blocks: [{ type: 'windows-menu', content: [WINDOWS_MENU.find(i => i.id === 'win-7')!], menuType: 'windows' }],
        headings: []
    },
    'win-vista': {
        id: 'win-vista',
        title: 'Windows Vista',
        description: 'Tải xuống Windows Vista SP2.',
        blocks: [{ type: 'windows-menu', content: [WINDOWS_MENU.find(i => i.id === 'win-vista')!], menuType: 'windows' }],
        headings: []
    },
    'win-xp': {
        id: 'win-xp',
        title: 'Windows XP',
        description: 'Tải xuống Windows XP SP3.',
        blocks: [{ type: 'windows-menu', content: [WINDOWS_MENU.find(i => i.id === 'win-xp')!], menuType: 'windows' }],
        headings: []
    },
    'office': {
        id: 'office',
        title: 'Microsoft Office',
        description: 'Bộ công cụ văn phòng Microsoft Office.',
        blocks: [{ type: 'windows-menu', content: [], menuType: 'office', officeVersions: OFFICE_VERSIONS }],
        headings: []
    },
    'office-c2r': {
        id: 'office-c2r',
        title: 'Office C2R',
        description: 'Office Click-to-Run Installer.',
        blocks: [{ type: 'windows-menu', content: [], menuType: 'office', officeVersions: OFFICE_VERSIONS }],
        headings: []
    },
    'office-mac': {
        id: 'office-mac',
        title: 'Office for MacOS',
        description: 'Office for Apple Silicon and Intel Macs.',
        blocks: [{ type: 'windows-menu', content: [], menuType: 'office-mac', officeVersions: OFFICE_MAC_VERSIONS }],
        headings: []
    },
    'office-msi': {
        id: 'office-msi',
        title: 'Office MSI VL',
        description: 'Office Volume License (MSI) Installer.',
        blocks: [{ type: 'windows-menu', content: [], menuType: 'office', officeVersions: OFFICE_MSI_VERSIONS }],
        headings: []
    },
    'software': {
        id: 'software',
        title: 'Phần mềm',
        description: 'Kho lưu trữ phần mềm thiết yếu.',
        blocks: [{ type: 'software-catalog', content: SOFTWARE_DATABASE }],
        headings: []
    },
    'sw-win': {
        id: 'sw-win',
        title: 'Phần Mềm Windows',
        description: 'Phần mềm tốt nhất trên Windows.',
        blocks: [{ type: 'software-catalog', content: SOFTWARE_DATABASE.filter(s => s.platforms.includes('windows')) }],
        headings: []
    },
    'sw-mac': {
        id: 'sw-mac',
        title: 'Phần Mềm MacOS',
        description: 'Phần mềm tốt nhất trên MacOS.',
        blocks: [{ type: 'software-catalog', content: SOFTWARE_DATABASE.filter(s => s.platforms.includes('mac')) }],
        headings: []
    },
    'sw-linux': {
        id: 'sw-linux',
        title: 'Phần Mềm Linux',
        description: 'Phần mềm tốt nhất cho Linux.',
        blocks: [{ type: 'software-catalog', content: SOFTWARE_DATABASE.filter(s => s.platforms.includes('linux')) }],
        headings: []
    },
    'ghost-win': {
        id: 'ghost-win',
        title: 'Ghost OS',
        description: 'Bản Ghost mượt mà, tối ưu hóa.',
        blocks: [{ type: 'ghost-catalog', content: GHOST_OS_DATABASE }],
        headings: []
    },
    'ghost-11': {
        id: 'ghost-11',
        title: 'Ghost Windows 11',
        description: 'Bản Ghost Windows 11 mượt mà.',
        blocks: [{ type: 'ghost-catalog', content: GHOST_OS_DATABASE.filter(g => g.tags.includes('Win 11')) }],
        headings: []
    },
    'ghost-10': {
        id: 'ghost-10',
        title: 'Ghost Windows 10',
        description: 'Bản Ghost Windows 10 mượt mà.',
        blocks: [{ type: 'ghost-catalog', content: GHOST_OS_DATABASE.filter(g => g.tags.includes('Win 10')) }],
        headings: []
    },
    'ghost-81': {
        id: 'ghost-81',
        title: 'Ghost Windows 8.1',
        description: 'Bản Ghost Windows 8.1 mượt mà.',
        blocks: [{ type: 'ghost-catalog', content: GHOST_OS_DATABASE.filter(g => g.tags.includes('Win 8.1')) }],
        headings: []
    },
    'ghost-7': {
        id: 'ghost-7',
        title: 'Ghost Windows 7',
        description: 'Bản Ghost Windows 7 mượt mà.',
        blocks: [{ type: 'ghost-catalog', content: GHOST_OS_DATABASE.filter(g => g.tags.includes('Win 7')) }],
        headings: []
    },
    'news': {
        id: 'news',
        title: 'Tin tức',
        description: 'Cập nhật tin tức công nghệ mới nhất.',
        blocks: [{ type: 'news-grid', content: [] }],
        headings: []
    },
    'usb-boot': {
        id: 'usb-boot',
        title: 'Tạo USB Boot Cài Win',
        description: 'Hướng dẫn tạo USB cứu hộ, cài Win tốt nhất.',
        blocks: [
            { type: 'callout', content: 'Nên chuẩn bị một USB ít nhất 8GB.', variant: 'info' },
            {
                type: 'accordion',
                content: [
                    { question: '1. Rufus', answer: 'Cách đơn giản nhất để tạo USB cài Win.' },
                    { question: '2. Ventoy', answer: 'Hỗ trợ nhiều ISO trên một USB.' }
                ]
            }
        ],
        headings: []
    },
    'active-win': {
        id: 'active-win',
        title: 'Kích Hoạt Bản Quyền',
        description: 'Kích hoạt Windows và Office an toàn.',
        blocks: [
            { type: 'callout', content: 'Khuyến khích mua Key bản quyền.', variant: 'warning' },
            { type: 'code', content: 'slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX\nslmgr /skms kms8.msguides.com\nslmgr /ato', language: 'powershell' }
        ],
        headings: []
    }
};
