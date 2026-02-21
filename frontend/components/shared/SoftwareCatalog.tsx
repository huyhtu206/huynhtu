import React, { useState, useEffect } from 'react';
import { Search, Download, Terminal, Check, Layers, ChevronRight, LayoutGrid, List, Trash2, PackageCheck, Copy } from 'lucide-react';
import { DownloadItem, PlatformType } from '../../types';
import { api } from '../../services/api';
import { getIcon } from '../../utils/icons';

interface SoftwareCatalogProps {
    initialItems?: DownloadItem[];
    initialPlatform?: PlatformType;
}

export const SoftwareCatalog: React.FC<SoftwareCatalogProps> = ({ initialItems = [], initialPlatform = 'windows' }) => {
    const [items, setItems] = useState<DownloadItem[]>(initialItems);
    const [activePlatform, setActivePlatform] = useState<PlatformType>(initialPlatform);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
    const [selectedVersions, setSelectedVersions] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await api.getSoftware();
                setItems(data);
                // Initialize default versions
                const versions: Record<string, string> = {};
                data.forEach(item => {
                    versions[item.id || item.title] = item.version;
                });
                setSelectedVersions(versions);
            } catch (err) {
                console.error("Failed to fetch software:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const filteredItems = items.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags?.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesPlatform = (item.platforms as string[]).includes(activePlatform);
        return matchesSearch && matchesPlatform;
    });

    const toggleSelect = (title: string) => {
        const next = new Set(selectedItems);
        if (next.has(title)) next.delete(title);
        else next.add(title);
        setSelectedItems(next);
    };

    const handleVersionChange = (id: string, version: string) => {
        setSelectedVersions(prev => ({ ...prev, [id]: version }));
    };

    const copyCommand = (cmd: string) => {
        navigator.clipboard.writeText(cmd);
        alert(`Đã sao chép: ${cmd}`);
    };

    return (
        <div className="space-y-6">
            {/* Minimal Header: Search + Platform Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-10">
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                    <input
                        placeholder="Tìm kiếm ứng dụng..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="h-10 w-full rounded bg-[#141414] border border-white/5 px-10 text-[13px] text-white placeholder:text-zinc-600 focus:border-[#5771ED]/50 focus:outline-none transition-all"
                    />
                </div>

                <div className="flex bg-[#141414] p-1 rounded border border-white/5">
                    {(['windows', 'mac', 'linux'] as PlatformType[]).map(p => (
                        <button
                            key={p}
                            onClick={() => setActivePlatform(p)}
                            className={`px-6 h-8 rounded text-[11px] font-bold uppercase tracking-widest transition-all ${activePlatform === p ? 'bg-[#5771ED] text-white' : 'text-zinc-500 hover:text-white'}`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <div className="flex items-center justify-center py-20">
                    <div className="w-8 h-8 border-2 border-[#5771ED]/20 border-t-[#5771ED] rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="space-y-12">
                    {Array.from(new Set(filteredItems.map(i => i.category || 'Khác'))).map(category => (
                        <div key={category} className="space-y-4">
                            <h2 className="text-[12px] font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2 px-1">
                                <Layers size={14} className="text-[#5771ED]" />
                                {category}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {filteredItems.filter(i => (i.category || 'Khác') === category).map((item) => {
                                    const itemId = item.id || item.title;
                                    const currentVer = selectedVersions[itemId] || item.version;
                                    const isSelected = selectedItems.has(item.title);

                                    return (
                                        <div key={itemId} className="flex flex-col bg-[#141414] border border-white/5 rounded-lg p-5 hover:border-white/10 transition-all group relative overflow-hidden">
                                            {/* Decoration */}
                                            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                                                {getIcon(item.icon || 'package', { size: 64 })}
                                            </div>

                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="w-10 h-10 shrink-0 bg-white/5 rounded flex items-center justify-center p-2 border border-white/5 group-hover:bg-white/10 transition-colors">
                                                    {item.iconUrl ? (
                                                        <img src={item.iconUrl} alt={item.title} className="w-full h-full object-contain" />
                                                    ) : (
                                                        getIcon(item.icon || 'package', { size: 20, className: "text-white opacity-80" })
                                                    )}
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <h3 className="text-[15px] font-bold text-white truncate leading-tight mb-1">{item.title}</h3>
                                                    <div className="flex items-center gap-2">
                                                        <div className="relative">
                                                            <select
                                                                value={currentVer}
                                                                onChange={(e) => handleVersionChange(itemId, e.target.value)}
                                                                className="bg-white/5 text-[11px] font-bold text-zinc-400 border border-white/10 px-1.5 py-0.5 rounded cursor-pointer hover:border-zinc-500 outline-none appearance-none pr-4"
                                                            >
                                                                <option value={item.version}>{item.version}</option>
                                                                {item.versions?.filter(v => v !== item.version).map(v => (
                                                                    <option key={v} value={v}>{v}</option>
                                                                ))}
                                                            </select>
                                                            <ChevronRight size={8} className="absolute right-1 top-1/2 -translate-y-1/2 rotate-90 text-zinc-600 pointer-events-none" />
                                                        </div>
                                                        <span className="text-[10px] font-bold text-zinc-600 truncate uppercase mt-0.5">{item.size}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-[12px] text-zinc-500 mb-6 line-clamp-2 h-9 leading-relaxed font-medium">
                                                {item.description}
                                            </p>

                                            <div className="mt-auto flex gap-2">
                                                <a
                                                    href={item.versionLinks?.[currentVer] || item.link}
                                                    className="flex-1 h-9 flex items-center justify-center gap-2 bg-[#5771ED] hover:bg-[#465cd6] text-white rounded text-[12px] font-bold transition-all"
                                                    title={`Download ${item.title} v${currentVer}`}
                                                >
                                                    <Download size={14} />
                                                    Tải nhanh
                                                </a>
                                                <button
                                                    onClick={() => toggleSelect(item.title)}
                                                    className={`w-9 h-9 shrink-0 rounded flex items-center justify-center transition-all ${isSelected ? 'bg-red-500/20 text-red-400 border border-red-500/20' : 'bg-white/5 text-zinc-400 border border-white/5 hover:bg-white/10 hover:text-white'}`}
                                                >
                                                    {isSelected ? <Check size={16} /> : <PackageCheck size={16} />}
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Floating Selection Bar */}
            {selectedItems.size > 0 && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-[#5771ED] text-white py-3 px-6 rounded shadow-2xl flex items-center justify-between z-50 animate-in slide-in-from-bottom-5 border border-white/10">
                    <div className="flex items-center gap-4">
                        <div className="bg-white text-[#5771ED] w-8 h-8 rounded flex items-center justify-center text-[16px] font-bold">
                            {selectedItems.size}
                        </div>
                        <p className="text-[13px] font-bold hidden sm:block uppercase tracking-widest">Items Selected</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button onClick={() => setSelectedItems(new Set())} className="p-2 hover:bg-white/10 rounded transition-all">
                            <Trash2 size={18} />
                        </button>
                        <button className="bg-white text-[#5771ED] px-6 py-2 rounded font-bold text-[12px] uppercase tracking-widest hover:bg-zinc-100 transition-all flex items-center gap-2">
                            Deploy Now <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
