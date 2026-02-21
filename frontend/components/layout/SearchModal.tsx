import React, { useState, useEffect, useRef } from 'react';
import { Search, Monitor, FileText, Newspaper, Terminal, ChevronRight, X } from 'lucide-react';
import { DOCS_DATA, SOFTWARE_DATABASE, NEWS_LIST, NAVIGATION } from '../../constants_data/index';
import { NavItem } from '../../types';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (id: string, type?: 'page' | 'news') => void;
}

interface SearchResult {
    id: string;
    title: string;
    description?: string;
    type: 'page' | 'software' | 'news';
    group: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Flatten Navigation pages for search
    const getPages = (items: NavItem[]): SearchResult[] => {
        let results: SearchResult[] = [];
        for (const item of items) {
            if (item.pages) {
                results = [...results, ...getPages(item.pages)];
            } else if (!item.isSection) {
                const doc = DOCS_DATA[item.id];
                results.push({
                    id: item.id,
                    title: item.title,
                    description: doc?.description,
                    type: 'page',
                    group: 'Pages'
                });
            }
        }
        return results;
    };

    const allPages = getPages(NAVIGATION);
    const allSoftware = SOFTWARE_DATABASE.map(s => ({
        id: 'software', // Will navigate to software page, better if we could deep link but simple Nav for now
        title: s.title,
        description: s.description,
        type: 'software' as const,
        group: 'Software'
    }));
    const allNews = NEWS_LIST.map(n => ({
        id: n.id || 'news', // Assuming id exists
        title: n.title,
        description: n.summary,
        type: 'news' as const,
        group: 'News'
    }));

    const allData = [...allPages, ...allNews, ...allSoftware];

    const filteredResults = query
        ? allData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description?.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 8)
        : [];

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            setQuery('');
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                // Toggle logic handled by parent, but if open, close it, if closed, parent opens it.
                // Here we just handle close if open to avoid conflicts
                if (isOpen) onClose();
            }
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-2xl bg-[#0E0E0E] border border-white/10 rounded overflow-hidden animate-fade-in">

                {/* Input */}
                <div className="flex items-center px-6 py-5 border-b border-white/5 bg-[#141414]">
                    <Search className="w-5 h-5 text-zinc-500 mr-4" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Tìm kiếm tài liệu, phần mềm..."
                        className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-zinc-600 font-bold text-[16px]"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="flex items-center gap-3">
                        <kbd className="hidden md:inline-flex px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-zinc-600 font-mono">ESC</kbd>
                    </div>
                </div>

                {/* Results */}
                <div className="max-h-[60vh] overflow-y-auto p-3 scrollbar-hide bg-[#0E0E0E]">
                    {!query && (
                        <div className="py-16 text-center">
                            <p className="text-zinc-600 text-sm font-bold uppercase tracking-widest">Nhập từ khóa để tìm kiếm</p>
                            <div className="flex justify-center gap-6 mt-6 text-[11px] text-zinc-700 font-bold uppercase tracking-widest">
                                <span className="flex items-center gap-2"><Terminal size={14} /> Lệnh</span>
                                <span className="flex items-center gap-2"><FileText size={14} /> Tài liệu</span>
                                <span className="flex items-center gap-2"><Newspaper size={14} /> Tin tức</span>
                            </div>
                        </div>
                    )}

                    {query && filteredResults.length === 0 && (
                        <div className="py-12 text-center text-zinc-600 text-sm font-bold">
                            Không tìm thấy kết quả cho "{query}"
                        </div>
                    )}

                    {filteredResults.length > 0 && (
                        <div className="space-y-1">
                            {filteredResults.map((result, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        onNavigate(result.id, result.type === 'news' ? 'news' : 'page');
                                        onClose();
                                    }}
                                    className="w-full flex items-center gap-5 px-4 py-3 rounded hover:bg-white/5 group transition-all text-left border border-transparent hover:border-white/5"
                                >
                                    <div className="p-2.5 rounded bg-[#141414] text-zinc-600 group-hover:text-primary border border-white/5 transition-colors">
                                        {result.type === 'page' && <FileText size={18} />}
                                        {result.type === 'software' && <Terminal size={18} />}
                                        {result.type === 'news' && <Newspaper size={18} />}
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-[14px] font-bold text-white truncate">{result.title}</span>
                                            <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest border border-white/5 px-2 py-0.5 rounded">{result.group}</span>
                                        </div>
                                        {result.description && (
                                            <p className="text-[12px] text-zinc-500 truncate font-medium">{result.description}</p>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {filteredResults.length > 0 && (
                    <div className="px-6 py-3 border-t border-white/5 bg-[#141414] text-[10px] text-zinc-600 flex justify-between font-bold uppercase tracking-widest">
                        <span>{filteredResults.length} Kết quả</span>
                        <span>Sử dụng phím mũi tên để di chuyển</span>
                    </div>
                )}
            </div>
        </div>
    );
};