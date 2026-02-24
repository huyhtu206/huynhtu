import React, { useState, useMemo } from 'react';
import { WindowsEdition } from '../types';
import { Copy, Check, ChevronRight, Heart, Apple, Terminal, CloudDownload, Box } from 'lucide-react';
import { getResolveUrl } from '../services/api';

interface WindowsDownloaderProps {
    editions: WindowsEdition[];
}

export const WindowsDownloader: React.FC<WindowsDownloaderProps> = ({ editions }) => {
    const [activeTabId, setActiveTabId] = useState<string>(editions[0]?.id || '');
    const [copiedText, setCopiedText] = useState<string | null>(null);

    const currentEdition = useMemo(() =>
        editions.find(e => e.id === activeTabId),
        [editions, activeTabId]);

    if (!currentEdition) return null;

    const isWindows = editions[0]?.title.toLowerCase().includes('windows');
    const isMac = editions[0]?.title.toLowerCase().includes('macos');
    const isLinux = !isWindows && !isMac;

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), 2000);
    };

    return (
        <div className="w-full animate-fade-in font-sans text-[#EDEDED]">

            {/* Edition Selection Grid */}
            <div className="mb-10">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#426BF5] rounded-full"></span>
                    Chọn danh mục
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {editions.map(edition => {
                        const isActive = activeTabId === edition.id;
                        return (
                            <button
                                key={edition.id}
                                onClick={() => setActiveTabId(edition.id)}
                                className={`
                                flex flex-col items-start justify-center p-5 rounded-lg border text-left transition-all relative overflow-hidden group
                                ${isActive
                                        ? 'bg-[#1a1a1a] border-[#426BF5] text-white shadow-lg shadow-[#426BF5]/10'
                                        : 'bg-[#141414] border-[#212121] hover:border-[#333] text-[#8e8ea0] hover:bg-[#1a1a1a]'
                                    }
                            `}
                            >
                                <div className="font-bold text-[14px] leading-tight mb-1 z-10">
                                    {edition.title}
                                </div>
                                <div className={`text-[12px] font-medium z-10 ${isActive ? 'text-white/90' : 'text-[#8e8ea0]'}`}>
                                    {edition.subTitle}
                                </div>

                                {isActive && (
                                    <div className="absolute right-2 top-2 text-[#426BF5]">
                                        <Check size={14} />
                                    </div>
                                )}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Selected Edition Details */}
            <div className="mb-6 bg-[#171717] p-6 rounded-xl border border-[#212121]">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{currentEdition.title} {currentEdition.subTitle}</h3>
                    <span className="text-xs font-mono text-[#8e8ea0] bg-black/30 px-2 py-1 rounded">{currentEdition.buildVersion}</span>
                </div>
                <p className="text-sm text-[#8e8ea0] max-w-4xl leading-relaxed">
                    Danh sách các bản ISO gốc từ Microsoft. Chọn ngôn ngữ phù hợp để tải xuống.
                </p>
            </div>

            {/* Table */}
            <div className="w-full overflow-hidden border border-[#212121] rounded-xl shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-[#0d0d0d]">
                        <thead>
                            <tr className="bg-[#171717] border-b border-[#212121]">
                                <th className="py-3.5 px-6 text-[12px] font-bold text-[#8e8ea0] uppercase tracking-wider">Ngôn ngữ</th>
                                <th className="py-3.5 px-6 text-[12px] font-bold text-[#8e8ea0] uppercase tracking-wider w-24">Arch</th>
                                <th className="py-3.5 px-6 text-[12px] font-bold text-[#8e8ea0] uppercase tracking-wider w-32">SHA-1</th>
                                <th className="py-3.5 px-6 text-[12px] font-bold text-[#8e8ea0] uppercase tracking-wider text-right">Link tải</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#212121]">
                            {currentEdition.isoList.map((iso, idx) => (
                                <tr key={idx} className="hover:bg-[#141414] transition-colors group">
                                    <td className="py-4 px-6 text-sm text-[#e5e5e5] font-medium">
                                        {iso.language}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-[#8e8ea0]">
                                        {iso.arch}
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="relative group/copy cursor-pointer" onClick={() => handleCopy(iso.sha256)}>
                                            <div className="text-xs font-mono text-[#525252] truncate max-w-[100px] group-hover/copy:text-[#426BF5] transition-colors">
                                                {iso.sha256 || 'N/A'}
                                            </div>
                                            {iso.sha256 && (
                                                <div className="absolute right-0 top-0 opacity-0 group-hover/copy:opacity-100 transition-opacity">
                                                    {copiedText === iso.sha256 ? <Check size={12} className="text-[#426BF5]" /> : <Copy size={12} />}
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-right font-mono text-[12px]">
                                        <a
                                            href={(iso.link === '#' || isWindows) ? getResolveUrl('windows', currentEdition.msProductId?.toString() || iso.sha256, undefined, iso.language) : iso.link}
                                            title={iso.filename}
                                            className="inline-flex items-center gap-2 text-[#426BF5] hover:text-[#5c85ff] transition-colors truncate max-w-[300px]"
                                        >
                                            <CloudDownload size={14} className="shrink-0" />
                                            <span className="truncate">{iso.filename}</span>
                                        </a>
                                    </td>
                                    <td className="py-4 px-6 text-right hidden">
                                        {/* Kept for spacing if needed, but the link above is the main anchor */}
                                    </td>
                                </tr>
                            ))}
                            {currentEdition.isoList.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="py-20 text-center text-sm text-[#525252]">
                                        <div className="flex flex-col items-center gap-2">
                                            <Box size={32} className="opacity-20" />
                                            <span>Dữ liệu đang được cập nhật...</span>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};