import { ServiceItem } from '../types';

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
