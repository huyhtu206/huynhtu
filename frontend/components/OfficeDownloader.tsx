import React, { useState, useMemo } from 'react';
import { OfficeDownloaderData } from '../types';
import { CloudDownload, Check, Globe, Box, ChevronRight } from 'lucide-react';

interface OfficeDownloaderProps {
    data: OfficeDownloaderData;
}

export const OfficeDownloader: React.FC<OfficeDownloaderProps> = ({ data }) => {
    const [activeTabId, setActiveTabId] = useState<string>(data.categories[0]?.id || '');
    const [selectedLang, setSelectedLang] = useState(data.languages[0]?.value || 'en-US');
    const [isLangOpen, setIsLangOpen] = useState(false);

    const currentCategory = useMemo(() =>
        data.categories.find(c => c.id === activeTabId),
        [data.categories, activeTabId]);

    const selectedLangLabel = useMemo(() =>
        data.languages.find(l => l.value === selectedLang)?.label || selectedLang,
        [data.languages, selectedLang]);

    if (!currentCategory) return null;

    return (
        <div className="w-full animate-fade-in font-sans text-[#EDEDED]" onClick={() => setIsLangOpen(false)}>

            {/* Category Selection Grid - EXTACT MATCH to WindowsDownloader */}
            <div className="mb-10">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#E14337] rounded-full"></span>
                    Chọn danh mục
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data.categories.map(category => {
                        const isActive = activeTabId === category.id;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveTabId(category.id)}
                                className={`
                                flex flex-col items-start justify-center p-5 rounded-lg border text-left transition-all relative overflow-hidden group
                                ${isActive
                                        ? 'bg-[#1a1a1a] border-[#E14337] text-white shadow-lg shadow-[#E14337]/10'
                                        : 'bg-[#141414] border-[#212121] hover:border-[#333] text-[#8e8ea0] hover:bg-[#1a1a1a]'
                                    }
                            `}
                            >
                                <div className="font-bold text-[14px] leading-tight mb-1 z-10">
                                    {category.title}
                                </div>
                                <div className={`text-[12px] font-medium z-10 ${isActive ? 'text-white/90' : 'text-[#8e8ea0]'}`}>
                                    {category.subTitle}
                                </div>

                                {isActive && (
                                    <div className="absolute right-2 top-2 text-[#E14337]">
                                        <Check size={14} />
                                    </div>
                                )}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Selected Category Details & PREMIUM Language Selector */}
            <div className="mb-6 bg-[#171717] p-6 rounded-xl border border-[#212121] flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white tracking-tight">{currentCategory.title} {currentCategory.subTitle}</h3>
                        <span className="text-[10px] font-mono text-[#8e8ea0] bg-black/40 px-2 py-0.5 rounded border border-white/5 uppercase tracking-tighter">
                            {currentCategory.buildVersion}
                        </span>
                    </div>
                    <p className="text-sm text-[#8e8ea0] max-w-2xl leading-relaxed">
                        {currentCategory.description || 'Danh sách các bản cài đặt Office C2R. Chọn ngôn ngữ phù hợp để tải xuống.'}
                    </p>
                </div>

                {/* Custom Premium Dropdown */}
                <div
                    className="relative w-full md:w-72"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsLangOpen(!isLangOpen);
                    }}
                >
                    <div className={`
                        w-full bg-[#0d0d0d] p-4 rounded-lg border transition-all cursor-pointer group/select flex items-center justify-between
                        ${isLangOpen ? 'border-[#576FEC] ring-1 ring-[#576FEC]/20 shadow-lg shadow-[#576FEC]/5' : 'border-[#212121] hover:border-[#333]'}
                    `}>
                        <div className="flex flex-col">
                            <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 flex items-center gap-2 transition-colors ${isLangOpen ? 'text-[#576FEC]' : 'text-[#525252]'}`}>
                                <Globe size={11} />
                                Ngôn ngữ hệ thống
                            </h4>
                            <div className="text-[13px] text-white font-medium truncate max-w-[200px]">
                                {selectedLangLabel}
                            </div>
                        </div>
                        <ChevronRight size={16} className={`text-[#525252] transition-transform duration-300 ${isLangOpen ? 'rotate-90 text-[#576FEC]' : ''}`} />
                    </div>

                    {/* Popover Menu */}
                    {isLangOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-[#0d0d0d] border border-[#212121] rounded-xl shadow-2xl z-[100] max-h-[320px] overflow-hidden flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="overflow-y-auto custom-scrollbar p-2">
                                {data.languages.map(lang => (
                                    <div
                                        key={lang.value}
                                        onClick={() => {
                                            setSelectedLang(lang.value);
                                            setIsLangOpen(false);
                                        }}
                                        className={`
                                            flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all mb-1
                                            ${selectedLang === lang.value
                                                ? 'bg-[#576FEC]/10 text-[#576FEC]'
                                                : 'text-[#8e8ea0] hover:bg-white/5 hover:text-white'}
                                        `}
                                    >
                                        <span className="text-[13px] font-medium">{lang.label}</span>
                                        {selectedLang === lang.value && <Check size={14} />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Table - EXACT MATCH to WindowsDownloader structure/style */}
            <div className="w-full overflow-hidden border border-[#212121] rounded-xl shadow-sm bg-[#0d0d0d]">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#171717] border-b border-[#212121]">
                                <th className="py-3.5 px-6 text-[11px] font-bold text-[#8e8ea0] uppercase tracking-wider">Sản phẩm</th>
                                <th className="py-3.5 px-6 text-[11px] font-bold text-[#8e8ea0] uppercase tracking-wider">Ứng dụng</th>
                                <th className="py-3.5 px-6 text-[11px] font-bold text-[#8e8ea0] uppercase tracking-wider text-center w-32">Tải x64</th>
                                <th className="py-3.5 px-6 text-[11px] font-bold text-[#8e8ea0] uppercase tracking-wider text-center w-32">Tải x32</th>
                                <th className="py-3.5 px-6 text-[11px] font-bold text-[#8e8ea0] uppercase tracking-wider text-right w-32">Offline</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#212121]">
                            {currentCategory.products.map((prod, idx) => {
                                // Direct Microsoft CDN URL Generation
                                const getUrl = (type: 'x64' | 'x86' | 'offline') => {
                                    const lang = selectedLang.toLowerCase();
                                    if (type === 'offline') {
                                        return `https://officecdn.microsoft.com/db/492350f6-3a01-4f97-b9c0-c7c6ddf67d60/media/${lang}/${prod.productId}.img`;
                                    }
                                    return `https://c2rsetup.officeapps.live.com/c2r/download.aspx?ProductreleaseID=${prod.productId}&platform=${type}&language=${lang}&version=O16GA`;
                                };

                                const downloadStyle = "inline-flex items-center gap-1.5 text-[#576FEC] hover:opacity-80 transition-all text-[12px] font-bold";

                                return (
                                    <tr key={idx} className="hover:bg-[#141414] transition-colors group">
                                        <td className="py-4 px-6">
                                            <div className="text-sm font-semibold text-[#e5e5e5] group-hover:text-[#576FEC] transition-colors">
                                                {prod.productId}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="text-xs text-[#8e8ea0] leading-relaxed max-w-[280px]">
                                                {prod.includedApps}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {prod.onlineX64 !== 'NA' ? (
                                                <a
                                                    href={getUrl('x64')}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={downloadStyle}
                                                >
                                                    <CloudDownload size={14} />
                                                    <span>Tải xuống</span>
                                                </a>
                                            ) : (
                                                <span className="text-[#262626] text-xs font-mono">—</span>
                                            )}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {prod.onlineX32 !== 'NA' ? (
                                                <a
                                                    href={getUrl('x86')}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={downloadStyle}
                                                >
                                                    <CloudDownload size={14} />
                                                    <span>Tải xuống</span>
                                                </a>
                                            ) : (
                                                <span className="text-[#262626] text-xs font-mono">—</span>
                                            )}
                                        </td>
                                        <td className="py-4 px-6 text-right font-mono text-[12px]">
                                            {prod.offlineX32X64 !== 'NA' ? (
                                                <a
                                                    href={getUrl('offline')}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={downloadStyle}
                                                >
                                                    <CloudDownload size={14} />
                                                    <span>Tải xuống</span>
                                                </a>
                                            ) : (
                                                <span className="text-[#262626]">—</span>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                            {currentCategory.products.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="py-24 text-center text-sm text-[#525252]">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="relative">
                                                <Box size={40} className="text-[#212121]" />
                                                <div className="absolute inset-0 bg-[#E14337]/5 blur-xl rounded-full"></div>
                                            </div>
                                            <span className="font-medium tracking-tight">Dữ liệu đang được cập nhật...</span>
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
