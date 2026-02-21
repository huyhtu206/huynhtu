import React, { useState } from 'react';
import { GhostItem } from '../../../types';
import { Download, Check, Copy, User, Cpu, ShieldCheck, Box, Info } from 'lucide-react';

interface GhostCatalogProps {
    content: GhostItem[];
}

export const GhostCatalog: React.FC<GhostCatalogProps> = ({ content }) => {
    const [copiedHash, setCopiedHash] = useState<string | null>(null);

    const handleCopy = (hash: string) => {
        navigator.clipboard.writeText(hash);
        setCopiedHash(hash);
        setTimeout(() => setCopiedHash(null), 2000);
    };

    if (!content || content.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-zinc-500 border border-white/5 rounded-2xl bg-white/[0.01]">
                <Box size={40} className="mb-4 opacity-20" />
                <p className="text-sm font-medium">Không có bản Ghost nào khả dụng cho mục này.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-12">
            {content.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-2x border border-white/10 bg-[#0c0d0d] shadow-2xl transition-all hover:border-white/20">
                    <div className="flex flex-col lg:flex-row">
                        {/* ── Left Side: Preview & Badges ── */}
                        <div className="relative w-full lg:w-[400px] aspect-video lg:aspect-auto bg-[#111] overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                            <img
                                src={item.image || 'https://images.unsplash.com/photo-1633113088947-013686e5d90c?auto=format&fit=crop&q=80&w=800'}
                                alt={item.title}
                                className="h-full w-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                            <div className="absolute top-4 left-4 flex flex-col gap-2">
                                <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider shadow-lg">
                                    {item.version}
                                </div>
                                <div className="bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded-md text-[10px] font-medium border border-white/10 flex items-center gap-1.5">
                                    <User size={10} className="text-blue-400" /> {item.author}
                                </div>
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                                <span className="bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase border border-white/10">{item.arch}</span>
                                <span className="bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase border border-white/10">{item.boot}</span>
                            </div>
                        </div>

                        {/* ── Right Side: Content & Action ── */}
                        <div className="flex-1 p-6 lg:p-10">
                            <div className="flex flex-col h-full">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-400 text-[14px] leading-relaxed max-w-2xl">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                    {/* Features List */}
                                    <div>
                                        <h4 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-blue-500 mb-4">
                                            <ShieldCheck size={14} /> Đặc điểm nổi bật
                                        </h4>
                                        <ul className="space-y-2.5">
                                            {item.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-[13px] text-zinc-300">
                                                    <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0"></div>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Software List */}
                                    <div>
                                        <h4 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-purple-500 mb-4">
                                            <Cpu size={14} /> Soft tích hợp
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {item.softwareList.map((soft, i) => (
                                                <span key={i} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[11px] text-zinc-400 font-medium">
                                                    {soft}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Download Links Table */}
                                <div className="mt-auto pt-8 border-t border-white/5">
                                    <div className="overflow-hidden rounded-xl border border-white/5 bg-black/20">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="bg-white/5 text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                                                    <th className="px-6 py-3">Loại file</th>
                                                    <th className="px-6 py-3">Dung lượng</th>
                                                    <th className="px-6 py-3">MD5 Checksum</th>
                                                    <th className="px-6 py-3 text-right">Tải về</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                                {item.files.map((file, i) => (
                                                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                                        <td className="px-6 py-4">
                                                            <span className="text-[12px] font-bold text-white">{file.type}</span>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <span className="text-[12px] text-zinc-400">{file.size}</span>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div
                                                                className="flex items-center gap-2 cursor-pointer group/copy"
                                                                onClick={() => handleCopy(file.md5)}
                                                            >
                                                                <span className="font-mono text-[10px] text-zinc-600 group-hover/copy:text-zinc-400">{file.md5.substring(0, 16)}...</span>
                                                                {copiedHash === file.md5 ? (
                                                                    <Check size={12} className="text-green-500" />
                                                                ) : (
                                                                    <Copy size={12} className="text-zinc-700 opacity-0 group-hover/copy:opacity-100 transition-all" />
                                                                )}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <a
                                                                href={file.link}
                                                                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-[12px] font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                                                            >
                                                                <Download size={14} /> Download
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2 text-[11px] text-zinc-500 italic">
                                        <Info size={12} />
                                        <span>Gợi ý: Kiểm tra mã MD5 sau khi tải về để đảm bảo file không bị lỗi.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
