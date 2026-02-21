import React, { useState } from 'react';
import { Copy, Check, Terminal, Shield, Download, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { OHOOK_KEYS } from '../../constants_data/ohook_keys';
import { DevToast } from '../layout/Header';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ActivationKey {
    edition: string;
    key: string;
    ticket: string;
}

interface ActivationViewProps {
    type: 'hwid' | 'ohook';
    keys?: ActivationKey[];
}

// ─── Inline copy button ───────────────────────────────────────────────────────

const CopyBtn: React.FC<{ text: string; compact?: boolean }> = ({ text, compact }) => {
    const [copied, setCopied] = useState(false);
    const handle = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
    };
    if (compact) {
        return (
            <button onClick={handle} title="Sao chép"
                className="p-1.5 rounded-md bg-transparent hover:bg-white/10 text-zinc-600 hover:text-zinc-300 transition-all opacity-0 group-hover:opacity-100 shrink-0">
                {copied ? <Check size={11} className="text-green-500" /> : <Copy size={11} />}
            </button>
        );
    }
    return (
        <button onClick={handle}
            className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-500 hover:text-zinc-300 transition-all shrink-0">
            {copied ? <><Check size={11} className="text-green-400" /> Copied</> : <><Copy size={11} /> Copy</>}
        </button>
    );
};

// ─── Inline command block ─────────────────────────────────────────────────────

const CmdBlock: React.FC<{ cmd: string }> = ({ cmd }) => (
    <div className="flex items-start gap-3 px-4 py-3 my-2 rounded-lg bg-[#0a0a0a] border border-white/10">
        <Terminal size={12} className="text-blue-400 shrink-0 mt-0.5" />
        <code className="flex-1 text-[12px] font-mono text-blue-400 select-all break-all leading-relaxed">{cmd}</code>
        <CopyBtn text={cmd} />
    </div>
);

// ─── Tip block ────────────────────────────────────────────────────────────────

const TipBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-start gap-3 mt-4 p-4 rounded-lg border border-yellow-500/15 bg-yellow-500/[0.04]">
        <Lightbulb size={14} className="text-yellow-400 shrink-0 mt-0.5" />
        <div className="text-[13px] text-zinc-400 leading-relaxed">{children}</div>
    </div>
);

// ─── Guide content ────────────────────────────────────────────────────────────

const HWID_STEPS = [
    { label: 'Bước 1', text: 'Đảm bảo bạn có kết nối internet hoạt động tốt.' },
    { label: 'Bước 2', text: 'Xác định phiên bản Windows của bạn. Tìm kiếm "Giới thiệu về máy tính của bạn" trong menu Bắt đầu.' },
    { label: 'Bước 3', text: 'Tải xuống tệp vé phù hợp từ bảng bên dưới; tệp vé phải khớp với phiên bản Windows của bạn.' },
    {
        label: 'Bước 4',
        content: (
            <>
                <p className="mb-2">Sao chép tệp vé đã tải vào thư mục:</p>
                <CmdBlock cmd="C:\ProgramData\Microsoft\Windows\ClipSVC\GenuineTicket" />
                <p className="text-zinc-600 text-[12px] mt-1">Thư mục <code className="text-blue-400">ProgramData</code> bị ẩn theo mặc định. Dán đường dẫn trực tiếp vào thanh địa chỉ Windows Explorer.</p>
            </>
        )
    },
    { label: 'Bước 5', text: 'Mở Cài đặt Kích hoạt Windows và nhấp vào "Thay đổi khóa sản phẩm".' },
    { label: 'Bước 6', text: 'Sao chép mã sản phẩm tương ứng từ bảng bên dưới và dán vào trường mã sản phẩm.' },
    { label: 'Bước 7', text: 'Sau vài giây, Windows sẽ được kích hoạt thành công.' },
];

const OHOOK_STEPS = [
    { label: 'Bước 1', text: 'Tải file sppc.dll từ trang chính thức của Ohook, hoặc tự biên dịch theo hướng dẫn riêng.' },
    {
        label: 'Bước 2',
        content: (
            <p>Tạo thư mục <code className="text-blue-400 text-[12px] bg-white/5 px-1.5 py-0.5 rounded">ohook</code> ở ổ C và giải nén file zip vào đó. Đường dẫn cần đúng: <code className="text-blue-400 text-[12px] bg-white/5 px-1.5 py-0.5 rounded">C:\ohook</code></p>
        )
    },
    {
        label: 'Bước 3',
        content: (
            <>
                <p className="mb-2">Mở Command Prompt với quyền Administrator, chạy lệnh sau để tạo symlink:</p>
                <CmdBlock cmd={'mklink "%ProgramFiles%\\Microsoft Office\\root\\vfs\\System\\sppcs.dll" "%windir%\\System32\\sppc.dll"'} />
            </>
        )
    },
    {
        label: 'Bước 4',
        content: (
            <>
                <p className="mb-2">Copy thư viện hook vào thư mục Office:</p>
                <CmdBlock cmd="cd /d C:\ohook" />
                <CmdBlock cmd={'copy /y sppc64.dll "%ProgramFiles%\\Microsoft Office\\root\\vfs\\System\\sppc.dll"'} />
            </>
        )
    },
    {
        label: 'Bước 5 (tuỳ chọn)',
        content: (
            <>
                <p className="mb-2">Để ngăn banner "There was a problem checking this device's license status" trên Office 365:</p>
                <CmdBlock cmd={'reg add HKCU\\Software\\Microsoft\\Office\\16.0\\Common\\Licensing\\Resiliency /v "TimeOfLastHeartbeatFailure" /t REG_SZ /d "2040-01-01T00:00:00Z" /f'} />
            </>
        )
    },
    {
        label: 'Bước 6',
        content: (
            <>
                <p className="mb-2">Tra bảng bên dưới để lấy key phù hợp với phiên bản Office, sau đó chạy:</p>
                <CmdBlock cmd="slmgr /ipk <key>" />
            </>
        )
    },
];

// Single collapsible guide accordion
const GuideAccordion: React.FC<{ isHWID: boolean }> = ({ isHWID }) => {
    const [open, setOpen] = useState(false);
    const steps = isHWID ? HWID_STEPS : OHOOK_STEPS;

    return (
        <div className={`border rounded-xl overflow-hidden transition-all duration-200 mb-8 ${open ? 'border-white/20 bg-[#111]' : 'border-white/[0.08] bg-[#0c0d0d] hover:border-white/15'}`}>
            <button
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                onClick={() => setOpen(!open)}
            >
                <span className="text-[14px] font-semibold text-white">
                    {isHWID ? 'Kích hoạt Windows thủ công' : 'Hướng dẫn sử dụng kích hoạt'}
                </span>
                {open
                    ? <ChevronUp size={15} className="text-zinc-400 shrink-0" />
                    : <ChevronDown size={15} className="text-zinc-600 shrink-0" />}
            </button>

            {open && (
                <div className="px-6 pb-6 border-t border-white/[0.06]">
                    <ol className="mt-5 space-y-5">
                        {steps.map((step, i) => (
                            <li key={i} className="flex gap-4">
                                <div className="flex-shrink-0 w-[72px] pt-0.5">
                                    <span className="text-[10px] font-black text-zinc-600 uppercase tracking-wider">{step.label}</span>
                                </div>
                                <div className="flex-1 text-[13px] text-zinc-400 leading-relaxed">
                                    {'text' in step ? step.text : step.content}
                                </div>
                            </li>
                        ))}
                    </ol>

                    {isHWID && (
                        <TipBlock>
                            Nếu gặp lỗi <code className="text-yellow-300 text-[12px]">0x803fa067</code> khi đổi khóa sản phẩm, hãy <strong className="text-zinc-200">ngắt kết nối internet</strong> và thử lại. Sau đó kết nối lại internet — Windows sẽ được kích hoạt.
                        </TipBlock>
                    )}
                </div>
            )}
        </div>
    );
};

// ─── Section label ────────────────────────────────────────────────────────────

const SectionLabel: React.FC<{ label: string }> = ({ label }) => (
    <div className="flex items-center gap-3 mb-4 mt-10 first:mt-0">
        <span className="text-[15px] font-extrabold text-zinc-200 tracking-tight">{label}</span>
        <div className="flex-1 h-px bg-white/10" />
    </div>
);

// ─── HWID table ───────────────────────────────────────────────────────────────

const HwidTable: React.FC<{ keys: ActivationKey[] }> = ({ keys }) => (
    <div className="overflow-hidden border border-white/10 rounded-lg bg-[#0E0E0E]">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-[#141414] border-b border-white/10">
                        <th className="py-3 px-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Phiên bản Windows</th>
                        <th className="py-3 px-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Generic Key</th>
                        <th className="py-3 px-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest text-center w-28">Ticket</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {keys.map((item, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                            <td className="py-4 px-6 text-[13px] font-bold text-zinc-300">{item.edition}</td>
                            <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                    <code className="text-[12px] font-mono text-zinc-400 group-hover:text-blue-400 transition-colors select-all">
                                        {item.key}
                                    </code>
                                    <CopyBtn text={item.key} compact />
                                </div>
                            </td>
                            <td className="py-3 px-4 text-center">
                                <a href={item.ticket === 'Link' ? '#' : item.ticket}
                                    className="text-[12px] font-bold text-blue-500 hover:text-blue-400 transition-colors">
                                    Ticket
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// ─── Ohook table group ────────────────────────────────────────────────────────

const OhookTableGroup: React.FC<{ id: string; title: string }> = ({ id, title }) => {
    const version = OHOOK_KEYS.find(v => v.id === id);
    if (!version) return null;
    return (
        <>
            <SectionLabel label={title} />
            <div className="overflow-hidden border border-white/10 rounded-lg bg-[#0E0E0E]">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#141414] border-b border-white/10">
                                <th className="py-3 px-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest w-[45%]">Sản phẩm</th>
                                <th className="py-3 px-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Generated Generic Key</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {version.items.map((item, idx) => (
                                <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="py-4 px-6 text-[13px] font-bold text-zinc-300">{item.product}</td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-2">
                                            <code className="text-[12px] font-mono text-zinc-400 group-hover:text-blue-400 transition-colors select-all">
                                                {item.key}
                                            </code>
                                            <CopyBtn text={item.key} compact />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

// ─── Main component ───────────────────────────────────────────────────────────

export const ActivationView: React.FC<ActivationViewProps> = ({ type, keys = [] }) => {
    const isHWID = type === 'hwid';
    const [devToast, setDevToast] = useState(false);
    const handleWip = (e: React.MouseEvent) => { e.preventDefault(); setDevToast(true); };

    return (
        <>
            <div className="max-w-[1100px] space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

                {/* Page header */}
                <div className="flex items-start gap-4 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Shield size={20} />
                    </div>
                    <div>
                        <h2 className="text-[22px] font-bold text-white tracking-tight mb-1">
                            {isHWID ? 'Windows 10/11 HWID Activation' : 'Microsoft Office Ohook Activation'}
                        </h2>
                        <p className="text-zinc-500 text-[13px] leading-relaxed max-w-2xl">
                            {isHWID
                                ? 'Kích hoạt bản quyền kỹ thuật số vĩnh viễn bằng Hardware ID. Không cần KMS, không cần internet sau khi kích hoạt.'
                                : 'Kích hoạt Office thông qua Ohook – phương pháp hiện đại, hỗ trợ cập nhật trực tiếp từ Microsoft, không bị Antivirus chặn.'}
                        </p>
                    </div>
                    <button onClick={handleWip}
                        className="ml-auto shrink-0 flex items-center gap-2 px-5 py-2.5 bg-white text-black text-[13px] font-bold rounded-lg hover:bg-zinc-200 transition-all">
                        <Download size={15} />
                        <span>MAS Script</span>
                    </button>
                </div>

                {/* Single guide accordion */}
                <GuideAccordion isHWID={isHWID} />

                {/* Tables */}
                {isHWID ? (
                    <>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[15px] font-extrabold text-zinc-200 tracking-tight">Generic Keys & Tickets</span>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>
                        <HwidTable keys={keys} />
                    </>
                ) : (
                    <div>
                        {OHOOK_KEYS.map(v => (
                            <OhookTableGroup key={v.id} id={v.id} title={v.title} />
                        ))}
                    </div>
                )}
            </div>
            <DevToast visible={devToast} onClose={() => setDevToast(false)} />
        </>
    );
};
