# Backend — Rust Cloudflare Worker

API backend cho website huynhtu.dev, chạy trên Cloudflare Workers bằng Rust.

## Cấu trúc

```
backend/
├── Cargo.toml          # Rust dependencies
├── wrangler.toml       # Cloudflare Workers config
└── src/
    ├── lib.rs          # Worker entrypoint + router + CORS
    ├── data/
    │   ├── mod.rs
    │   ├── navigation.rs   # GET /api/navigation
    │   ├── software.rs     # GET /api/software
    │   ├── news.rs         # GET /api/news
    │   └── office.rs       # GET /api/office/msi, /api/office/mac
    └── routes/
        ├── mod.rs
        └── pages.rs        # GET /api/pages/:slug
```

## Setup

### Yêu cầu
- Rust 1.70+ với target `wasm32-unknown-unknown`
- Node.js 18+ (cho Wrangler CLI)
- Tài khoản Cloudflare (free tier đủ dùng)

```bash
# Thêm target WASM
rustup target add wasm32-unknown-unknown

# Cài Wrangler
npm install -g wrangler

# Cài cargo deps
cargo build
```

## Development

```bash
# Chạy local (test Worker)
wrangler dev
```

Worker sẽ chạy tại `http://localhost:8787`. Test bằng:

```bash
curl http://localhost:8787/api/navigation
curl http://localhost:8787/api/office/msi
curl http://localhost:8787/api/office/mac
curl http://localhost:8787/api/news
```

## Deploy

```bash
# Login Cloudflare
wrangler login

# Deploy lên production
wrangler deploy
```

## Frontend Integration

Tạo file `frontend/.env.local`:
```
VITE_API_URL=https://your-worker.workers.dev
```

Khi không có `VITE_API_URL`, frontend sẽ dùng dữ liệu từ `constants.ts` (offline mode).

## API Endpoints

| Method | Path | Mô tả |
|--------|------|--------|
| GET | `/api/navigation` | Cây điều hướng |
| GET | `/api/software` | Kho phần mềm |
| GET | `/api/news` | Tin tức |
| GET | `/api/office/msi` | Office MSI VL downloads |
| GET | `/api/office/mac` | Office for Mac downloads |
| GET | `/api/pages/:slug` | Thông tin trang theo slug |
