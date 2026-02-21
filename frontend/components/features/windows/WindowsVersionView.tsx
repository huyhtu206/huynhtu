import React, { useState } from 'react';
import { WindowsMenuItem } from '../../../types';
import { FileDown, Check, Copy, Monitor, ShieldCheck } from 'lucide-react';
import { DevToast } from '../../layout/Header';

interface WindowsVersionViewProps {
    activeCategory: WindowsMenuItem;
}

export const WindowsVersionView: React.FC<WindowsVersionViewProps> = ({ activeCategory }) => {
    const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<string>(activeCategory.subcategories?.[0]?.id || '');
    const [selectedItemId, setSelectedItemId] = useState<string>(activeCategory.subcategories?.[0]?.items?.[0]?.id || '');
    const [copiedText, setCopiedText] = useState<string | null>(null);
    const [devToast, setDevToast] = useState(false);

    const selectedSubcategory = activeCategory.subcategories?.find(s => s.id === selectedSubcategoryId);
    const selectedItem = selectedSubcategory?.items.find(i => i.id === selectedItemId);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), 2000);
    };

    const handleDownload = (e: React.MouseEvent) => {
        e.preventDefault();
        setDevToast(true);
    };

    return (
        <>
            <div className="animate-in fade-in duration-300">
                {/* ── Selection UI ── */}
                <div className="mb-10 space-y-8">
                    {activeCategory.subcategories && activeCategory.subcategories.length > 1 && (
                        <div>
                            <h3 className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <FileDown size={14} /> Chọn phiên bản
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {activeCategory.subcategories.map(sub => (
                                    <button key={sub.id}
                                        onClick={() => { setSelectedSubcategoryId(sub.id); setSelectedItemId(sub.items[0]?.id || ''); }}
                                        className={`px-4 py-2 rounded border text-[12px] font-bold transition-all ${selectedSubcategoryId === sub.id
                                            ? 'bg-[#5771ED] border-[#5771ED] text-white'
                                            : 'bg-transparent border-white/10 text-zinc-500 hover:text-white hover:border-white/20'}`}>
                                        {sub.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Edition Selection */}
                    {selectedSubcategory && selectedSubcategory.items.length > 0 && (
                        <div className="p-1 bg-[#0E0E0E] border border-white/5 rounded">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                                {selectedSubcategory.items.map(item => {
                                    const isActive = selectedItemId === item.id;
                                    return (
                                        <button key={item.id} onClick={() => setSelectedItemId(item.id)}
                                            className={`px-4 py-3 rounded text-[13px] font-bold text-left transition-all flex items-center justify-between group ${isActive
                                                ? 'bg-white/5 text-white'
                                                : 'text-zinc-500 hover:text-white hover:bg-white/[0.02]'}`}>
                                            <span className="truncate">{item.name}</span>
                                            {isActive && <Check size={14} className="text-[#5771ED]" />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* ── Info Bar ── */}
                <div className="mb-8 p-4 rounded border border-white/5 bg-[#141414] flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                        <p className="text-[12px] text-zinc-500 leading-relaxed font-medium">
                            <span className="text-white font-bold mr-2 uppercase tracking-tighter">Hệ thống:</span>
                            CPU 1GHz+ 2 Cores, RAM 4GB, Storage 64GB, UEFI, TPM 2.0.
                            <span className="text-primary ml-1">Sử dụng Rufus để bỏ qua yêu cầu phần cứng.</span>
                        </p>
                    </div>
                    <div className="shrink-0 flex gap-6 text-[12px]">
                        <div className="flex flex-col items-center">
                            <span className="text-zinc-600 font-bold uppercase text-[10px] mb-0.5">Arch</span>
                            <span className="text-white font-bold">x64 / ARM64</span>
                        </div>
                        <div className="flex flex-col items-center border-l border-white/10 pl-6">
                            <span className="text-zinc-600 font-bold uppercase text-[10px] mb-0.5">Status</span>
                            <span className="text-green-500 font-bold">MSDN Official</span>
                        </div>
                    </div>
                </div>

                {/* ── Table ── */}
                {selectedItem?.releases && selectedItem.releases.length > 0 && (
                    <div className="overflow-hidden border border-white/10 rounded-lg bg-[#0E0E0E]">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#141414] border-b border-white/10">
                                        <th className="py-3 px-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Ngôn ngữ</th>
                                        <th className="py-3 px-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest text-center">Build</th>
                                        <th className="py-3 px-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest text-center">Release</th>
                                        <th className="py-3 px-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest text-center">Size</th>
                                        <th className="py-3 px-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest hidden lg:table-cell">SHA-256</th>
                                        <th className="py-3 px-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest text-center w-32">Download</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {selectedItem.releases.flatMap(r => r.files).map((file, idx) => (
                                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="py-4 px-6 text-[13px] font-bold text-zinc-300">
                                                {file.language}
                                            </td>
                                            <td className="py-4 px-4 text-[12px] font-mono text-zinc-500 text-center">{file.buildNumber || '—'}</td>
                                            <td className="py-4 px-4 text-[12px] text-zinc-500 text-center">{file.releaseDate || '—'}</td>
                                            <td className="py-4 px-4 text-[12px] font-bold text-zinc-400 text-center">{file.size || '—'}</td>
                                            <td className="py-4 px-6 hidden lg:table-cell">
                                                <div className="flex items-center gap-2 cursor-pointer font-mono text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors" onClick={() => handleCopy(file.sha256)}>
                                                    <span className="truncate w-32 font-bold">{file.sha256 || '—'}</span>
                                                    {file.sha256 && (copiedText === file.sha256
                                                        ? <Check size={11} className="text-green-500 shrink-0" />
                                                        : <Copy size={11} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />)}
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 text-center">
                                                <button onClick={handleDownload}
                                                    className="inline-flex items-center gap-2 text-[12px] font-bold text-white bg-[#5771ED] hover:bg-[#465cd6] px-5 py-2 rounded transition-all active:scale-95">
                                                    <span>Download</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
            <DevToast visible={devToast} onClose={() => setDevToast(false)} />
        </>
    );
};
