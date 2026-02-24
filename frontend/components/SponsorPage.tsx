import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';

// QR code images as inline SVG data or simple fallback display
const PAYMENT_METHODS = [
    {
        id: 'momo',
        name: 'MoMo',
        color: '#A0147E',
        bg: 'rgba(160,20,126,0.08)',
        border: 'rgba(160,20,126,0.3)',
        account: '0901 234 567',
        holder: 'HUYNH TU',
        deepLink: 'https://me.momo.vn/huynhtu',
        logo: (
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#A0147E" />
                <text x="24" y="32" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial">M</text>
            </svg>
        ),
        badge: 'Ví điện tử',
        cta: 'Ủng hộ qua MoMo',
    },
    {
        id: 'vcb',
        name: 'Vietcombank',
        color: '#007B40',
        bg: 'rgba(0,123,64,0.08)',
        border: 'rgba(0,123,64,0.3)',
        account: '1234 5678 9012',
        holder: 'HUYNH TU',
        deepLink: 'https://vcb.com.vn',
        logo: (
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#007B40" />
                <text x="24" y="32" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial">VCB</text>
            </svg>
        ),
        badge: 'Ngân hàng',
        cta: 'Chuyển khoản VCB',
    },
    {
        id: 'paypal',
        name: 'PayPal',
        color: '#003087',
        bg: 'rgba(0,48,135,0.08)',
        border: 'rgba(0,48,135,0.3)',
        account: 'donate@huynhtu.dev',
        holder: 'huynhtu.dev',
        deepLink: 'https://paypal.me/huynhtu',
        logo: (
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#003087" />
                <text x="24" y="33" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial">Pay</text>
            </svg>
        ),
        badge: 'Quốc tế',
        cta: 'Ủng hộ qua PayPal',
    },
];

const SPONSORS = [
    { name: 'Nguyễn Văn Hùng', amount: '500.000đ', date: '02/2026' },
    { name: 'Trần Thị Lan', amount: '300.000đ', date: '02/2026' },
    { name: 'Lê Minh Tuấn', amount: '200.000đ', date: '02/2026' },
    { name: 'Phạm Thị Mai', amount: '150.000đ', date: '01/2026' },
    { name: 'Hoàng Văn Nam', amount: '100.000đ', date: '01/2026' },
    { name: 'Vũ Thị Thu', amount: '50.000đ', date: '01/2026' },
    { name: 'Bùi Quốc Cường', amount: '50.000đ', date: '01/2026' },
    { name: 'Đinh Thị Hoa', amount: '30.000đ', date: '01/2026' },
];

const FAQ = [
    {
        q: 'Tôi ủng hộ rồi, sẽ nhận được gì?',
        a: 'Tên bạn sẽ được ghi vào danh sách nhà tài trợ trên website. Bạn cũng sẽ được hỗ trợ ưu tiên khi gặp vấn đề kỹ thuật.'
    },
    {
        q: 'Số tiền ủng hộ được dùng làm gì?',
        a: 'Toàn bộ dùng để nâng cấp lưu trữ (storage), cải thiện tốc độ tải xuống (CDN), và duy trì tên miền + máy chủ.'
    },
    {
        q: 'Tôi có thể ủng hộ hàng tháng không?',
        a: 'Có! Bạn có thể cài đặt lệnh chuyển khoản định kỳ qua ứng dụng ngân hàng hoặc PayPal Subscription.'
    },
    {
        q: 'Website có chia sẻ thông tin tài khoản của tôi không?',
        a: 'Không. Chúng tôi chỉ hiển thị tên bạn cung cấp và số tiền ủng hộ để cảm ơn công khai. Thông tin ngân hàng hoàn toàn bảo mật.'
    },
    {
        q: 'Làm thế nào để xác nhận ủng hộ thành công?',
        a: 'Nhắn tin kèm ảnh chụp giao dịch qua Zalo hoặc Facebook. Chúng tôi sẽ xác nhận trong vòng 24 giờ.'
    },
];

export const SponsorPage: React.FC = () => {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);

    return (
        <div className="max-w-4xl mx-auto space-y-16 pb-16 animate-fade-in">

            {/* Hero */}
            <div className="text-center space-y-4 pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#576FEC]/10 border border-[#576FEC]/20 text-[#576FEC] text-[12px] font-semibold tracking-wider uppercase">
                    <Heart size={12} className="fill-[#576FEC]" /> Ủng hộ dự án
                </div>
                <h1 className="text-4xl font-black text-white tracking-tight">
                    Giúp chúng tôi <span className="text-[#576FEC]">lưu trữ</span> tốt hơn
                </h1>
                <p className="text-[#8e8ea0] text-base max-w-xl mx-auto leading-relaxed">
                    Hiện tại, kho lưu trữ của website <strong className="text-white">không đủ dung lượng</strong> để chứa toàn bộ ISO Windows/Office gốc.
                    Mỗi đóng góp của bạn sẽ giúp chúng tôi <strong className="text-white">nâng cấp lưu trữ và cải thiện tốc độ tải xuống</strong> cho mọi người.
                </p>
            </div>

            {/* Problem stats */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: 'Dung lượng thiếu', value: '~2TB', sub: 'ISO + Ghost + Software' },
                    { label: 'Tốc độ hiện tại', value: '~5 MB/s', sub: 'CDN giới hạn băng thông' },
                    { label: 'Mục tiêu', value: '50 MB/s', sub: 'Sau khi nâng cấp' },
                ].map((s, i) => (
                    <div key={i} className="bg-[#0d0d0d] border border-[#212121] rounded-xl p-5 text-center">
                        <div className="text-2xl font-black text-white mb-1">{s.value}</div>
                        <div className="text-[13px] font-semibold text-[#e5e5e5] mb-0.5">{s.label}</div>
                        <div className="text-[11px] text-[#555]">{s.sub}</div>
                    </div>
                ))}
            </div>

            {/* Payment methods */}
            <div>
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-5 bg-[#576FEC] rounded-full inline-block" />
                    Phương thức ủng hộ
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {PAYMENT_METHODS.map(m => (
                        <div
                            key={m.id}
                            className="relative rounded-2xl border p-6 flex flex-col gap-4 transition-all hover:scale-[1.02] hover:shadow-xl"
                            style={{ background: m.bg, borderColor: m.border }}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {m.logo}
                                    <div>
                                        <div className="font-bold text-white text-[15px]">{m.name}</div>
                                        <div className="text-[11px] px-2 py-0.5 rounded-full border text-[10px] font-semibold" style={{ color: m.color, borderColor: m.border }}>
                                            {m.badge}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-black/20 rounded-xl p-3 space-y-1">
                                <div className="text-[11px] text-[#8e8ea0] uppercase tracking-wider">
                                    {m.id === 'paypal' ? 'Email / Link' : 'Số tài khoản'}
                                </div>
                                <div className="font-mono font-bold text-white text-[14px] tracking-wider select-all">
                                    {m.account}
                                </div>
                                <div className="text-[11px] text-[#8e8ea0]">{m.holder}</div>
                            </div>

                            <a
                                href={m.deepLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-[13px] text-white transition-all hover:opacity-90 active:scale-95"
                                style={{ background: m.color }}
                            >
                                {m.cta}
                                <ExternalLink size={13} />
                            </a>
                        </div>
                    ))}
                </div>
                <p className="mt-3 text-[12px] text-[#555] text-center">
                    Sau khi ủng hộ, nhắn tin kèm ảnh chụp giao dịch qua Zalo / Facebook để được ghi danh
                </p>
            </div>

            {/* Sponsor list */}
            <div>
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-5 bg-[#576FEC] rounded-full inline-block" />
                    Danh sách ủng hộ
                </h2>
                <div className="border border-[#212121] rounded-xl overflow-hidden bg-[#0d0d0d]">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-[#171717] border-b border-[#212121]">
                                <th className="py-3 px-5 text-left text-[11px] font-bold text-[#8e8ea0] uppercase tracking-wider">Tên</th>
                                <th className="py-3 px-5 text-right text-[11px] font-bold text-[#8e8ea0] uppercase tracking-wider">Số tiền</th>
                                <th className="py-3 px-5 text-right text-[11px] font-bold text-[#8e8ea0] uppercase tracking-wider">Thời gian</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#212121]">
                            {SPONSORS.map((s, i) => (
                                <tr key={i} className="hover:bg-[#141414] transition-colors">
                                    <td className="py-3.5 px-5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 rounded-full bg-[#576FEC]/20 flex items-center justify-center text-[#576FEC] text-[11px] font-bold">
                                                {s.name.charAt(0)}
                                            </div>
                                            <span className="text-[13px] font-medium text-white">{s.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3.5 px-5 text-right">
                                        <span className="text-[13px] font-bold text-[#576FEC]">{s.amount}</span>
                                    </td>
                                    <td className="py-3.5 px-5 text-right">
                                        <span className="text-[12px] text-[#555] font-mono">{s.date}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="px-5 py-3 border-t border-[#212121] bg-[#0a0a0a]">
                        <p className="text-[11px] text-[#555] text-center">Tổng số lượt ủng hộ: {SPONSORS.length} người • Cảm ơn tất cả! 💙</p>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div>
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-5 bg-[#576FEC] rounded-full inline-block" />
                    Câu hỏi thường gặp
                </h2>
                <div className="space-y-2">
                    {FAQ.map((f, i) => (
                        <div key={i} className="border border-[#212121] rounded-xl overflow-hidden bg-[#0d0d0d]">
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between px-5 py-4 text-left"
                            >
                                <span className="text-[14px] font-semibold text-white">{f.q}</span>
                                <span className={`text-[#8e8ea0] transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}>
                                    ▾
                                </span>
                            </button>
                            {openFaq === i && (
                                <div className="px-5 pb-4 text-[13px] text-[#8e8ea0] leading-relaxed border-t border-[#1a1a1a]">
                                    <p className="pt-3">{f.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
