import { NewsItem } from '../types';

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
