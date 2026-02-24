import React, { useState, useMemo } from 'react';
import { ActivationSection } from '../types';
import { CloudDownload, Check, ExternalLink, Box } from 'lucide-react';

interface OfficeMSIDownloaderProps {
    sections: ActivationSection[];
    baseUrl?: string; // e.g. VLSC base or custom CDN
}

export const OfficeMSIDownloader: React.FC<OfficeMSIDownloaderProps> = ({ sections, baseUrl }) => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [filterArch, setFilterArch] = useState<'all' | 'x64' | 'x32'>('all');
    const [search, setSearch] = useState('');

    const activeSection = sections[activeIdx];

    const hasArch = useMemo(() => activeSection?.items.some(i => i.label), [activeSection]);

    const filtered = useMemo(() => {
        if (!activeSection) return [];
        return activeSection.items.filter(item => {
            const matchArch = filterArch === 'all' || item.label === filterArch;
            const matchSearch = !search ||
                (item.product?.toLowerCase().includes(search.toLowerCase()) ||
                    item.key?.toLowerCase().includes(search.toLowerCase()));
            return matchArch && matchSearch;
        });
    }, [activeSection, filterArch, search]);

    const getDownloadUrl = (filename: string) => {
        if (!filename) return '#';
        if (filename.startsWith('http')) return filename;
        if (baseUrl) return `${baseUrl}/${filename}`;
        // Microsoft VLSC style deep link
        return `https://www.microsoft.com/en-us/download/details.aspx?id=${filename}`;
    };

    const hasLinkCol = activeSection?.headers.some(h => h.key === 'ticketLink');

    return (
        <div className="w-full animate-fade-in font-sans text-[#EDEDED]">

            {/* Category Tab Grid — matches OfficeDownloader style */}
            <div className="mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {sections.map((section, idx) => {
                        const isActive = activeIdx === idx;
                        return (
                            <button
                                key={idx}
                                onClick={() => { setActiveIdx(idx); setFilterArch('all'); setSearch(''); }}
                                className={`
                                    flex flex-col items-start justify-center p-4 rounded-lg border text-left 
                                    transition-all relative overflow-hidden
                                    ${isActive
                                        ? 'bg-[#1a1a1a] border-[#E14337] text-white shadow-lg shadow-[#E14337]/10'
                                        : 'bg-[#141414] border-[#212121] hover:border-[#333] text-[#8e8ea0] hover:bg-[#1a1a1a]'
                                    }
                                `}
                            >
                                <div className="font-bold text-[13px] leading-tight z-10">
                                    {section.title.replace('Office ', '')}
                                </div>
                                <div className={`text-[11px] font-medium z-10 mt-0.5 ${isActive ? 'text-[#E14337]' : 'text-[#555]'}`}>
                                    {section.items.length} files
                                </div>
                                {isActive && (
                                    <div className="absolute right-2 top-2 text-[#E14337]">
                                        <Check size={13} />
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Filter Bar */}
            {activeSection && (
                <div className="mb-5 bg-[#171717] p-4 rounded-xl border border-[#212121] flex flex-col md:flex-row gap-3 md:items-center justify-between">
                    <div>
                        <h3 className="text-base font-bold text-white">{activeSection.title}</h3>
                        <p className="text-sm text-[#8e8ea0] mt-0.5">{activeSection.items.length} bản cài đặt MSI &mdash; Volume License</p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {/* Search */}
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Tìm kiếm..."
                            className="bg-[#0d0d0d] border border-[#212121] rounded-lg px-3 py-1.5 text-[13px] text-white placeholder:text-[#555] outline-none focus:border-[#444] w-36"
                        />
                        {/* Arch filter */}
                        {hasArch && (
                            <div className="flex bg-[#0d0d0d] border border-[#212121] rounded-lg overflow-hidden">
                                {(['all', 'x64', 'x32'] as const).map(a => (
                                    <button
                                        key={a}
                                        onClick={() => setFilterArch(a)}
                                        className={`px-3 py-1.5 text-[12px] font-medium uppercase transition-all ${filterArch === a ? 'bg-[#1a1a1a] text-white' : 'text-[#555] hover:text-white'}`}
                                    >
                                        {a === 'all' ? 'Tất cả' : a}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Table — exact match to C2R / OfficeDownloader style */}
            <div className="w-full overflow-hidden border border-[#212121] rounded-xl shadow-sm bg-[#0d0d0d]">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#171717] border-b border-[#212121]">
                                {activeSection?.headers.map((h, i) => (
                                    <th key={i} className={`py-3.5 px-6 text-[11px] font-bold text-[#8e8ea0] uppercase tracking-wider ${i === activeSection.headers.length - 1 ? 'text-right' : ''}`}>
                                        {h.label === 'Link' ? 'Tải xuống'
                                            : h.label === 'Arch' ? 'Kiến trúc'
                                                : h.label === 'Language' ? 'Ngôn ngữ'
                                                    : h.label === 'Product' ? 'Sản phẩm'
                                                        : h.label === 'Application' ? 'Ứng dụng'
                                                            : h.label === 'Activator' ? 'Trình kích hoạt'
                                                                : h.label === 'Applicable On' ? 'Tương thích với'
                                                                    : h.label === 'Serializer' ? 'Serializer'
                                                                        : h.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#212121]">
                            {filtered.map((item, idx) => (
                                <tr key={idx} className="hover:bg-[#141414] transition-colors group">
                                    {activeSection.headers.map((h, hIdx) => {
                                        const val = item[h.key as keyof typeof item] as string;
                                        const isLinkCol = h.key === 'ticketLink';
                                        const isFileCol = h.key === 'key' && val && (val.includes('.ISO') || val.includes('.img') || val.includes('.pkg') || val.startsWith('http'));
                                        const isLabel = h.key === 'label';
                                        const isLast = hIdx === activeSection.headers.length - 1;

                                        return (
                                            <td key={hIdx} className={`py-3.5 px-6 ${isLast ? 'text-right' : ''}`}>
                                                {(isLinkCol || isFileCol) && val ? (
                                                    <a
                                                        href={isLinkCol ? val : getDownloadUrl(val)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#576FEC] hover:opacity-80 transition-all"
                                                    >
                                                        <CloudDownload size={13} />
                                                        <span>Tải xuống</span>
                                                        <ExternalLink size={11} className="opacity-60" />
                                                    </a>
                                                ) : isLabel ? (
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#1a1a1a] border border-[#333] text-[11px] font-mono font-bold text-[#E14337]">
                                                        {val || '—'}
                                                    </span>
                                                ) : (
                                                    <span className={`text-[13px] ${hIdx === 0 ? 'font-semibold text-[#e5e5e5] group-hover:text-[#576FEC] transition-colors' : 'text-[#8e8ea0] font-mono text-[12px]'}`}>
                                                        {val || '—'}
                                                    </span>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={activeSection?.headers.length || 3} className="py-20 text-center">
                                        <div className="flex flex-col items-center gap-3 text-[#525252]">
                                            <Box size={36} />
                                            <span className="text-sm">Không tìm thấy kết quả</span>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <p className="mt-3 text-[11px] text-[#555] text-right">
                {filtered.length} / {activeSection?.items.length || 0} bản — Volume License (VL/KMS)
            </p>
        </div>
    );
};
