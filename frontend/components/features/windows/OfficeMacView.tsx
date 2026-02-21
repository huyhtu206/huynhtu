import React, { useState } from 'react';
import { OfficeVersion } from '../../../types';
import { FileDown, Shield, Check, Info, AlertTriangle, ChevronRight } from 'lucide-react';
import { DevToast } from '../../layout/Header';

interface OfficeMacViewProps {
    officeVersions: OfficeVersion[];
}

export const OfficeMacView: React.FC<OfficeMacViewProps> = ({ officeVersions }) => {
    const [selectedOfficeVersionId, setSelectedOfficeVersionId] = useState<string>(officeVersions[0]?.id || '');
    const [devToast, setDevToast] = useState(false);
    const handleWip = (e: React.MouseEvent) => { e.preventDefault(); setDevToast(true); };

    const selectedOfficeVersion = officeVersions.find(v => v.id === selectedOfficeVersionId);

    return (
        <>
            <div className="animate-in fade-in duration-300">
                {/* ── Breadcrumbs ── */}
                <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-8 pb-4 border-b border-white/5">
                    <a href="/" className="hover:text-white transition-colors">Home</a>
                    <ChevronRight size={10} />
                    <span className="text-zinc-500">Download Center</span>
                    <ChevronRight size={10} />
                    <span className="text-primary">Office For Mac</span>
                </nav>

                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Office For Mac</h1>
                    <p className="text-[13px] text-zinc-500 leading-relaxed font-medium">Hệ thống cung cấp bộ cài đặt Office chính chủ từ Microsoft dành cho MacOS. Đảm bảo tính ổn định và tương thích cao nhất.</p>
                </header>

                {/* ── Office Installer Section ── */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1 h-6 bg-primary" />
                        <h2 className="text-[14px] font-bold text-white uppercase tracking-widest">Office Installer</h2>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-10">
                        {officeVersions.map(ver => (
                            <button key={ver.id} onClick={() => setSelectedOfficeVersionId(ver.id)}
                                className={`px-6 py-3 rounded border text-[12px] font-bold uppercase transition-all ${selectedOfficeVersionId === ver.id
                                    ? 'bg-primary border-primary text-white'
                                    : 'bg-transparent border-white/10 text-zinc-500 hover:text-white hover:border-white/20'}`}>
                                {ver.title}
                            </button>
                        ))}
                    </div>

                    {selectedOfficeVersion && (
                        <div className="space-y-6">
                            {/* OS Info */}
                            <div className="p-6 rounded border border-white/5 bg-[#141414]">
                                <p className="text-[13px] text-zinc-400 font-medium whitespace-pre-line leading-relaxed">
                                    {selectedOfficeVersion.description}
                                </p>
                                <div className="mt-4 flex gap-4 text-[11px] font-bold uppercase tracking-widest text-zinc-600">
                                    <span>GEN: {selectedOfficeVersion.generation || 'N/A'}</span>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-hidden border border-white/10 rounded bg-[#0E0E0E]">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#141414] border-b border-white/10">
                                            <th className="py-3 px-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Application</th>
                                            <th className="py-3 px-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest text-right">Download Link</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {selectedOfficeVersion.products.map(product => (
                                            <tr key={product.id} className="hover:bg-white/[0.02] transition-colors group">
                                                <td className="py-4 px-6 text-[13px] font-bold text-zinc-300">{product.name}</td>
                                                <td className="py-4 px-6 text-right">
                                                    {product.links.offline && product.links.offline !== 'NA'
                                                        ? <button onClick={handleWip} className="text-primary hover:text-white text-[12px] font-bold transition-colors">Download PKG</button>
                                                        : <span className="text-zinc-800 text-[11px] font-bold">NA</span>}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </section>

                {/* ── Office Activation ── */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1 h-6 bg-green-500" />
                        <h2 className="text-[14px] font-bold text-white uppercase tracking-widest">Office Activation</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        {[
                            'Cài đặt phiên bản Office tương ứng từ bảng trên.',
                            'Nếu đã mở ứng dụng Office, hãy chạy Office-Reset Tool để xóa license cũ.',
                            'Chạy file activator pkg. Không mở ứng dụng Office trong lúc cài đặt.',
                            'Office của bạn đã được kích hoạt thành công.'
                        ].map((step, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded border border-white/5 bg-[#141414] items-start">
                                <div className="shrink-0 w-6 h-6 rounded bg-primary/10 border border-primary/20 flex items-center justify-center text-[12px] font-bold text-primary">
                                    {i + 1}
                                </div>
                                <p className="text-[13px] text-zinc-400 font-medium">{step}</p>
                            </div>
                        ))}
                    </div>

                    <div className="overflow-hidden border border-white/10 rounded bg-[#0E0E0E]">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#141414] border-b border-white/10">
                                    <th className="py-3 px-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Serializer</th>
                                    <th className="py-3 px-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest text-center">Version Link</th>
                                    <th className="py-3 px-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest text-right">Compatibility</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-[13px]">
                                {[
                                    ['Office 2024', 'Download Link', 'Sequoia, Sonoma, Ventura'],
                                    ['Office 2021', 'Download Link', 'Sonoma → Mojave'],
                                    ['Office 2019', 'Download Link', 'High Sierra, Sierra'],
                                    ['Office 2016', 'Download Link', 'El Capitan, Yosemite'],
                                ].map(([s, a, m]) => (
                                    <tr key={s} className="hover:bg-white/[0.02] transition-colors">
                                        <td className="py-4 px-6 font-bold text-zinc-300">{s}</td>
                                        <td className="py-4 px-6 text-primary text-center font-bold hover:text-white cursor-pointer transition-colors" onClick={handleWip}>{a}</td>
                                        <td className="py-4 px-6 text-zinc-600 italic text-right text-[12px]">{m}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ── Note & Troubleshooting ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    <div className="p-6 rounded border border-white/10 bg-[#0E0E0E]">
                        <h3 className="text-[13px] font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Info size={14} className="text-primary" /> Technical Note
                        </h3>
                        <p className="text-[12px] text-zinc-500 leading-relaxed font-medium">Đây là phương pháp kích hoạt chính thức từ Microsoft dành cho thuê bao doanh nghiệp. Không sử dụng các công cụ crack bên thứ ba.</p>
                    </div>
                    <div className="p-6 rounded border border-red-500/10 bg-[#0E0E0E]">
                        <h3 className="text-[13px] font-bold text-red-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <AlertTriangle size={14} /> Troubleshooting
                        </h3>
                        <p className="text-[12px] text-zinc-500 leading-relaxed font-medium">Nếu kích hoạt không thành công, hãy gỡ bỏ Office hoàn toàn, chạy Office-Reset Tool và cài đặt lại từ đầu.</p>
                    </div>
                </div>
            </div>
            <DevToast visible={devToast} onClose={() => setDevToast(false)} />
        </>
    );
};

