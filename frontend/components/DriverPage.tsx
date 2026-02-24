import React, { useState, useMemo, useEffect } from 'react';
import {
    Monitor, Apple, FolderOpen, Printer,
    Search, CloudDownload, ExternalLink, Cpu,
    Wifi, Volume2, Eye, HardDrive, Box, ChevronDown, ChevronRight, Filter, Loader2, Globe
} from 'lucide-react';
import { searchCatalog, getCatalogDownload, getDriverUrl, checkDriverVersion } from '../services/api';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface DriverItem {
    id: string;
    name: string;
    brand: string;
    device: string;       // e.g. "GeForce RTX 40 Series"
    version: string;
    date: string;
    size: string;
    link: string;
    category: string;    // GPU, LAN, Audio, Chipset, WiFi, Printer...
}

export interface DriverCategory {
    id: string;
    label: string;
    icon: React.ReactNode;
}

export interface DriverPlatform {
    id: string;
    label: string;
    icon: React.ReactNode;
    color: string;
    items: DriverItem[];
}

// ─── Category icon map ────────────────────────────────────────────────────────

const getCategoryIcon = (cat: string) => {
    const c = cat.toLowerCase();
    if (c.includes('gpu') || c.includes('video') || c.includes('display')) return <Eye size={13} />;
    if (c.includes('audio') || c.includes('sound')) return <Volume2 size={13} />;
    if (c.includes('wifi') || c.includes('wireless')) return <Wifi size={13} />;
    if (c.includes('lan') || c.includes('ethernet') || c.includes('network')) return <HardDrive size={13} />;
    if (c.includes('print')) return <Printer size={13} />;
    return <Cpu size={13} />;
};

// ─── Platform Tab Button ──────────────────────────────────────────────────────

const PlatformTab: React.FC<{
    platform: DriverPlatform;
    isActive: boolean;
    onClick: () => void;
}> = ({ platform, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`
            flex items-center gap-2.5 px-5 py-3.5 rounded-xl border text-sm font-bold transition-all
            ${isActive
                ? 'bg-[#1a1a1a] text-white shadow-lg'
                : 'bg-[#111] border-[#212121] text-[#666] hover:text-white hover:border-[#333] hover:bg-[#151515]'
            }
        `}
        style={isActive ? { borderColor: platform.color, boxShadow: `0 0 16px ${platform.color}20` } : {}}
    >
        <span style={isActive ? { color: platform.color } : {}}>{platform.icon}</span>
        {platform.label}
    </button>
);

// ─── Driver Row ───────────────────────────────────────────────────────────────

const DriverRow: React.FC<{
    item: DriverItem;
    accentColor: string;
    onCheck?: () => void;
    isChecking?: boolean;
    foundVersion?: string;
    enhancedLink?: string;
}> = ({ item, accentColor, onCheck, isChecking, foundVersion, enhancedLink }) => (
    <tr className="border-b border-[#1a1a1a] hover:bg-[#141414] transition-colors group">
        {/* Brand + Device */}
        <td className="py-3.5 px-5">
            <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#1a1a1a] border border-[#222] text-[#666] group-hover:text-white transition-colors shrink-0">
                    {getCategoryIcon(item.category)}
                </span>
                <div>
                    <div className="text-[13px] font-semibold text-[#e5e5e5] group-hover:text-white transition-colors leading-tight">
                        {item.name}
                        {foundVersion && <span className="ml-2 text-[10px] text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded">NEW: {foundVersion}</span>}
                    </div>
                    <div className="text-[11px] text-[#555] mt-0.5 font-mono flex items-center gap-2">
                        {item.brand} · {item.device}
                        {onCheck && (
                            <button
                                onClick={(e) => { e.preventDefault(); onCheck(); }}
                                disabled={isChecking}
                                className="text-[10px] text-[#426BF5] hover:underline flex items-center gap-1 disabled:opacity-50"
                            >
                                {isChecking ? <Loader2 size={10} className="animate-spin" /> : <Search size={10} />}
                                Kiểm tra bản mới
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </td>
        <td className="py-3.5 px-4 hidden md:table-cell">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#1a1a1a] border border-[#252525] text-[10px] font-bold text-[#888] uppercase tracking-wider">
                {item.category}
            </span>
        </td>
        <td className="py-3.5 px-4 hidden sm:table-cell">
            <span className="text-[12px] font-mono text-[#777]">{foundVersion || item.version}</span>
        </td>
        <td className="py-3.5 px-4 hidden lg:table-cell">
            <span className="text-[12px] text-[#555]">{item.date}</span>
        </td>
        <td className="py-3.5 px-4 hidden sm:table-cell">
            <span className="text-[11px] text-[#555] font-mono">{item.size}</span>
        </td>
        <td className="py-3.5 px-5 text-right">
            <a
                href={enhancedLink || item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] font-bold hover:opacity-80 transition-all"
                style={{ color: accentColor }}
            >
                <CloudDownload size={13} />
                Tải xuống
                <ExternalLink size={10} className="opacity-60" />
            </a>
        </td>
    </tr>
);

// ─── Main Component ───────────────────────────────────────────────────────────

interface DriverPageProps {
    platforms: DriverPlatform[];
}

export const DriverPage: React.FC<DriverPageProps> = ({ platforms }) => {
    const [activePlatformId, setActivePlatformId] = useState(platforms[0]?.id || '');
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [catalogResults, setCatalogResults] = useState<DriverItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isDefaultSearch, setIsDefaultSearch] = useState(false);
    const [downloadingId, setDownloadingId] = useState<string | null>(null);
    const [checkingId, setCheckingId] = useState<string | null>(null);
    const [foundVersions, setFoundVersions] = useState<Record<string, string>>({});

    const platform = useMemo(
        () => platforms.find(p => p.id === activePlatformId) ?? platforms[0],
        [platforms, activePlatformId]
    );

    const categories = useMemo(() => {
        const cats = Array.from(new Set(platform?.items.map(i => i.category) ?? []));
        return ['all', ...cats];
    }, [platform]);

    const filtered = useMemo(() => {
        let items = platform?.items ?? [];
        if (activeCategory !== 'all') items = items.filter(i => i.category === activeCategory);

        // Only filter by search if it's NOT a default auto-search query
        if (search && !isLoading && !isDefaultSearch) {
            const q = search.toLowerCase();
            items = items.filter(i =>
                i.name.toLowerCase().includes(q) ||
                i.brand.toLowerCase().includes(q) ||
                i.device.toLowerCase().includes(q) ||
                i.category.toLowerCase().includes(q)
            );
        }
        return items;
    }, [platform, activeCategory, search, isLoading, isDefaultSearch]);

    useEffect(() => {
        const isMsTarget = activePlatformId === 'all-windows' || activePlatformId === 'all-printer';
        if (isMsTarget && !search && catalogResults.length === 0) {
            const defaultQuery = activePlatformId === 'all-windows' ? 'Windows 11 x64 Driver' : 'Canon LBP 2900';
            setSearch(defaultQuery);
            setIsDefaultSearch(true);
            const triggerAuto = async () => {
                setIsLoading(true);
                try {
                    const results = await searchCatalog(defaultQuery);
                    if (results) {
                        const formattedResults: DriverItem[] = results.map((r: any) => ({
                            id: r.id,
                            name: r.name,
                            brand: r.brand,
                            device: r.device,
                            version: r.version,
                            date: r.date,
                            size: r.size,
                            link: '',
                            category: 'Microsoft Catalog'
                        }));
                        setCatalogResults(formattedResults);
                    }
                } finally {
                    setIsLoading(false);
                }
            };
            triggerAuto();
        }
    }, [activePlatformId]);

    const handleCatalogSearch = async () => {
        if (!search.trim()) return;
        setIsLoading(true);
        setCatalogResults([]);
        try {
            const results = await searchCatalog(search);
            if (results) {
                const formattedResults: DriverItem[] = results.map((r: any) => ({
                    id: r.id,
                    name: r.name,
                    brand: r.brand,
                    device: r.device,
                    version: r.version,
                    date: r.date,
                    size: r.size,
                    link: '',
                    category: 'Microsoft Catalog'
                }));
                setCatalogResults(formattedResults);
            }
        } catch (err) {
            console.error("Catalog search failed", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCatalogDownload = async (item: DriverItem) => {
        if (item.link) {
            window.open(item.link, '_blank');
            return;
        }
        setDownloadingId(item.id);
        try {
            const links = await getCatalogDownload(item.id);
            if (links && links.length > 0) {
                window.open(links[0], '_blank');
            } else {
                alert("Không tìm thấy link tải trực tiếp. Có thể driver này yêu cầu truy cập trực tiếp từ Microsoft.");
            }
        } catch (err) {
            console.error("Failed to get download link", err);
        } finally {
            setDownloadingId(null);
        }
    };

    const resolveVendorKey = (brand: string, category: string) => {
        const b = brand.toUpperCase();
        const c = category.toUpperCase();

        if (b === 'INTEL') {
            if (c.includes('GPU') || c.includes('GRAPHICS')) return 'INTEL_GFX';
            if (c.includes('WIFI') || c.includes('WIRELESS')) return 'INTEL_WIFI';
        } else if (b === 'HP' && c.includes('PRINTER')) {
            return 'HP_UPD';
        }
        return b;
    };

    const handlePatternCheck = async (item: DriverItem) => {
        const vendorKey = resolveVendorKey(item.brand, item.category);
        setCheckingId(item.id);
        try {
            const result = await checkDriverVersion(vendorKey, item.version);
            if (result && result.exists) {
                alert(`Đã xác minh: Link tải của ${item.brand} phiên bản ${item.version} hoạt động tốt!`);
            } else {
                if (vendorKey === 'NVIDIA') {
                    const versionNum = parseFloat(item.version);
                    const nextVersion = (versionNum + 0.01).toFixed(2);
                    const discovery = await checkDriverVersion(vendorKey, nextVersion);
                    if (discovery && discovery.exists) {
                        setFoundVersions(prev => ({ ...prev, [item.id]: nextVersion }));
                        alert(`Phát hiện phiên bản mới: ${nextVersion}!`);
                    } else {
                        alert(`Chưa tìm thấy bản mới hơn cho ${item.brand}.`);
                    }
                } else {
                    alert(`Không thể xác minh link cho ${item.brand} ${item.version}.`);
                }
            }
        } catch (err) {
            console.error("Pattern check failed", err);
        } finally {
            setCheckingId(null);
        }
    };

    const getEnhancedLink = (item: DriverItem) => {
        const vendorKey = resolveVendorKey(item.brand, item.category);
        const supported = ['NVIDIA', 'AMD', 'REALTEK', 'INTEL_GFX', 'INTEL_WIFI', 'HP_UPD', 'ASUS', 'LENOVO'];
        if (supported.includes(vendorKey)) {
            const version = foundVersions[item.id] || item.version;
            // For Laptop vendors, 'device' often contains the model (e.g. X541UA)
            return getDriverUrl(vendorKey, version, item.device);
        }
        return item.link;
    };

    return (
        <div className="w-full animate-fade-in font-sans text-[#EDEDED]">
            {/* Platform Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
                {platforms.map(p => (
                    <PlatformTab
                        key={p.id}
                        platform={p}
                        isActive={activePlatformId === p.id}
                        onClick={() => {
                            setActivePlatformId(p.id);
                            setActiveCategory('all');
                            setSearch('');
                            setIsDefaultSearch(false);
                            setCatalogResults([]);
                        }}
                    />
                ))}
            </div>

            {/* Filter Bar */}
            <div className="mb-6 bg-[#111] rounded-xl border border-[#1f1f1f] p-4 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                <div>
                    <h2 className="font-bold text-white text-[15px] flex items-center gap-2">
                        <span className="w-1 h-5 rounded-full" style={{ background: platform?.color }} />
                        {platform?.label} Drivers
                    </h2>
                    <p className="text-[12px] text-[#555] mt-0.5">
                        {filtered.length} / {platform?.items.length ?? 0} driver packages
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                    <div className="relative flex items-center gap-2">
                        <div className="relative">
                            <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#444]" />
                            <input
                                value={search}
                                onChange={e => {
                                    setSearch(e.target.value);
                                    setIsDefaultSearch(false);
                                    if (catalogResults.length > 0) setCatalogResults([]);
                                }}
                                onKeyDown={e => e.key === 'Enter' && handleCatalogSearch()}
                                placeholder="Tìm driver..."
                                className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-lg pl-7 pr-3 py-2 text-[12px] text-white placeholder:text-[#444] focus:outline-none focus:border-[#333] w-44"
                            />
                        </div>
                        {search && (
                            <button
                                onClick={handleCatalogSearch}
                                disabled={isLoading}
                                className="bg-[#1a1a1a] hover:bg-[#222] border border-[#222] text-white px-3 py-2 rounded-lg text-[11px] font-bold flex items-center gap-2 transition-all disabled:opacity-50"
                            >
                                {isLoading ? <Loader2 size={12} className="animate-spin" /> : <Globe size={12} />}
                                Tìm trên MS Catalog
                            </button>
                        )}
                    </div>
                    {categories.length > 1 && (
                        <div className="flex flex-wrap gap-1.5">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wide transition-all border
                                        ${activeCategory === cat
                                            ? 'text-white border-transparent'
                                            : 'bg-[#0d0d0d] border-[#1f1f1f] text-[#555] hover:text-white hover:border-[#333]'
                                        }
                                    `}
                                    style={activeCategory === cat
                                        ? { background: platform?.color, borderColor: platform?.color }
                                        : {}}
                                >
                                    {cat === 'all' ? <><Filter size={10} /> Tất cả</> : <>{getCategoryIcon(cat)} {cat}</>}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="w-full overflow-hidden border border-[#1a1a1a] rounded-xl bg-[#0a0a0a]">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#111] border-b border-[#1a1a1a]">
                                <th className="py-3 px-5 text-[10px] font-bold text-[#555] uppercase tracking-widest">Driver</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-[#555] uppercase tracking-widest hidden md:table-cell">Loại</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-[#555] uppercase tracking-widest hidden sm:table-cell">Phiên bản</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-[#555] uppercase tracking-widest hidden lg:table-cell">Ngày</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-[#555] uppercase tracking-widest hidden sm:table-cell">Dung lượng</th>
                                <th className="py-3 px-5 text-right text-[10px] font-bold text-[#555] uppercase tracking-widest">Tải xuống</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(item => {
                                const vendorKey = resolveVendorKey(item.brand, item.category);
                                const isSupported = ['NVIDIA', 'AMD', 'REALTEK', 'INTEL_GFX', 'INTEL_WIFI', 'HP_UPD'].includes(vendorKey);
                                return (
                                    <DriverRow
                                        key={item.id}
                                        item={item}
                                        accentColor={platform?.color ?? '#576FEC'}
                                        onCheck={isSupported ? () => handlePatternCheck(item) : undefined}
                                        isChecking={checkingId === item.id}
                                        foundVersion={foundVersions[item.id]}
                                        enhancedLink={getEnhancedLink(item)}
                                    />
                                );
                            })}
                            {catalogResults.length > 0 && (
                                <>
                                    <tr className="bg-[#0d0d0d]">
                                        <td colSpan={6} className="py-2 px-5">
                                            <div className="flex items-center gap-2 text-[10px] font-bold text-[#444] uppercase tracking-widest">
                                                <Globe size={10} /> Kết quả từ Microsoft Update Catalog
                                            </div>
                                        </td>
                                    </tr>
                                    {catalogResults.map(item => (
                                        <tr key={item.id} className="border-b border-[#1a1a1a] hover:bg-[#141414] transition-colors group">
                                            <td className="py-3.5 px-5">
                                                <div className="flex items-center gap-2.5">
                                                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#1a1a1a] border border-[#222] text-[#666] group-hover:text-white transition-colors shrink-0">
                                                        <Globe size={13} />
                                                    </span>
                                                    <div>
                                                        <div className="text-[13px] font-semibold text-[#e5e5e5] group-hover:text-white transition-colors leading-tight">
                                                            {item.name}
                                                        </div>
                                                        <div className="text-[11px] text-[#555] mt-0.5 font-mono">
                                                            {item.brand} · {item.device}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3.5 px-4 hidden md:table-cell">
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#1a1a1a] border border-[#252525] text-[10px] font-bold text-[#0078d4] uppercase tracking-wider">
                                                    MS Catalog
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-4 hidden sm:table-cell">
                                                <span className="text-[12px] font-mono text-[#777]">{item.version}</span>
                                            </td>
                                            <td className="py-3.5 px-4 hidden lg:table-cell">
                                                <span className="text-[12px] text-[#555]">{item.date}</span>
                                            </td>
                                            <td className="py-3.5 px-4 hidden sm:table-cell">
                                                <span className="text-[11px] text-[#555] font-mono">{item.size}</span>
                                            </td>
                                            <td className="py-3.5 px-5 text-right">
                                                <button
                                                    onClick={() => handleCatalogDownload(item)}
                                                    disabled={downloadingId === item.id}
                                                    className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#0078d4] hover:opacity-80 transition-all disabled:opacity-50"
                                                >
                                                    {downloadingId === item.id ? (
                                                        <Loader2 size={13} className="animate-spin" />
                                                    ) : (
                                                        <CloudDownload size={13} />
                                                    )}
                                                    Tải trực tiếp
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </>
                            )}
                            {filtered.length === 0 && catalogResults.length === 0 && !isLoading && (
                                <tr>
                                    <td colSpan={6} className="py-24 text-center">
                                        <div className="flex flex-col items-center gap-3 text-[#333]">
                                            <Box size={40} />
                                            <span className="text-sm">Không tìm thấy driver phù hợp</span>
                                            {search && (
                                                <button
                                                    onClick={handleCatalogSearch}
                                                    className="text-[12px] text-[#0078d4] hover:underline flex items-center gap-1.5"
                                                >
                                                    <Search size={12} /> Thử tìm trên Microsoft Update Catalog
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <p className="mt-3 text-[11px] text-[#444] text-right">
                Tất cả driver đều là bản gốc từ nhà sản xuất &mdash; không chỉnh sửa.
            </p>
        </div>
    );
};

export default DriverPage;
