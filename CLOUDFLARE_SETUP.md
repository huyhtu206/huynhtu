# Hướng dẫn Cấp quyền Cloudflare cho Antigravity (AI Assistant)

Để tôi có thể tự động triển khai (deploy), quản lý Backend (Cloudflare Workers) và cơ sở dữ liệu (D1/KV) trực tiếp từ môi trường lập trình này, bạn cần cung cấp **Account ID** và một **API Token** với các quyền cụ thể.

## 1. Lấy Account ID
1. Đăng nhập vào [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Chọn trang Web của bạn hoặc chọn **Workers & Pages** ở thanh bên trái.
3. Ở cột bên phải (phần **Account Details**), bạn sẽ thấy chuỗi **Account ID**. Hãy sao chép chuỗi này.

## 2. Tạo API Token (Quyền hạn cần thiết)
Để bảo mật, chúng ta sẽ không dùng Global API Key. Hãy tạo một Token chỉ có quyền quản lý Workers:

1. Truy cập: [My Profile > API Tokens](https://dash.cloudflare.com/profile/api-tokens).
2. Nhấn **Create Token**.
3. Chọn Template: **Edit Cloudflare Workers**.
4. Cấu hình **Permissions** (Quyền):
   - **Account** | **Workers Scripts** | **Edit**
   - **Zone** | **Worker Routes** | **Edit** (Cực kỳ quan trọng để deploy lên domain riêng)
   - **Account** | **Workers KV Storage** | **Edit**
   - **User** | **Memberships** | **Read**
5. Cấu hình **Resources** (Phạm vi - Phần này hay gây lỗi):
   - **Account Resources**: Chọn `Include` | `Your Account`.
   - **Zone Resources**: Chọn `Include` | `Specific Zone` | **huynhtu.com**. 
     > [!IMPORTANT]
     > Nếu để "All Zones" có thể bị lỗi. Bạn cần chọn chính xác zone **huynhtu.com**.
6. Nhấn **Continue to summary** > **Create Token**.
7. **Sao chép Token này ngay lập tức**.

## 3. Cách cung cấp cho AI
Bạn có thể cung cấp cho tôi theo 2 cách:

- **Cách A (Khuyên dùng):** Lưu vào file `.env` trong thư mục `backend/` (tôi sẽ tự đọc):
  ```env
  CLOUDFLARE_ACCOUNT_ID=your_account_id_here
  CLOUDFLARE_API_TOKEN=your_api_token_here
  ```
- **Cách B:** Paste trực tiếp vào khung Chat này.

## 4. Tôi sẽ làm gì với quyền này?
Khi có quyền, tôi có thể thực thi các lệnh thông qua `wrangler`:
- `wrangler deploy`: Cập nhật mã nguồn Backend lên domain `api.huynhtu.com`.
- `wrangler secret put`: Quản lý các biến môi trường bảo mật (như API Keys của hãng).
- `wrangler tail`: Kiểm tra lỗi (logs) trực tiếp khi bạn gặp sự cố.
- `wrangler d1`: Tự động tạo và migrate cơ sở dữ liệu khi hệ thống mở rộng.

> [!IMPORTANT]
> **Bảo mật:** Tôi sẽ không bao giờ chia sẻ Token này ra bên ngoài. Token này chỉ được sử dụng để phục vụ việc xây dựng dự án huynhtu ngay tại máy của bạn.
