import React, { useState, useEffect, useRef } from 'react';
import { Search, Monitor, FileText, Newspaper, Terminal, ChevronRight, X } from 'lucide-react';
import { DOCS_DATA, SOFTWARE_DATABASE, NEWS_LIST, NAVIGATION } from '../constants';
import { NavItem } from '../types';

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
        id: 'software',
        title: s.title,
        description: s.description,
        type: 'software' as const,
        group: 'Phần mềm'
    }));
    const allNews = NEWS_LIST.map(n => ({
        id: n.id || 'news',
        title: n.title,
        description: n.summary,
        type: 'news' as const,
        group: 'Tin tức'
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
                className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-2xl bg-[#111111] border border-[#2e2e2e] rounded-lg shadow-2xl overflow-hidden animate-fade-in">

                {/* Input */}
                <div className="flex items-center px-4 py-4 border-b border-[#2e2e2e]">
                    <Search className="w-5 h-5 text-[#8e8ea0] mr-4" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Tìm kiếm tài liệu, phần mềm, tin tức..."
                        className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-[#555] h-6 text-[16px]"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="flex items-center gap-3">
                        <kbd className="hidden md:inline-flex px-1.5 py-0.5 rounded bg-[#1a1a1a] border border-[#2e2e2e] text-[10px] text-[#8e8ea0] font-mono">ESC</kbd>
                        <button onClick={onClose} className="md:hidden text-[#8e8ea0]"><X size={20} /></button>
                    </div>
                </div>

                {/* Results */}
                <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-hide">
                    {!query && (
                        <div className="py-12 text-center">
                            <p className="text-[#8e8ea0] text-sm">Nhập từ khóa để tìm kiếm...</p>
                            <div className="flex justify-center gap-4 mt-4 text-xs text-[#555]">
                                <span className="flex items-center gap-1"><Terminal size={12} /> Lệnh</span>
                                <span className="flex items-center gap-1"><FileText size={12} /> Tài liệu</span>
                                <span className="flex items-center gap-1"><Newspaper size={12} /> Tin tức</span>
                            </div>
                        </div>
                    )}

                    {query && filteredResults.length === 0 && (
                        <div className="py-8 text-center text-[#8e8ea0] text-sm">
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
                                    className="w-full flex items-center gap-4 px-3 py-3 rounded hover:bg-[#1a1a1a] group transition-colors text-left border border-transparent hover:border-[#2e2e2e]"
                                >
                                    <div className="p-2 rounded bg-[#1a1a1a] text-[#8e8ea0] group-hover:text-white border border-[#2e2e2e] transition-colors">
                                        {result.type === 'page' && <FileText size={18} />}
                                        {result.type === 'software' && <Terminal size={18} />}
                                        {result.type === 'news' && <Newspaper size={18} />}
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <div className="flex items-center justify-between mb-0.5">
                                            <span className="text-[14px] font-medium text-white truncate">{result.title}</span>
                                            <span className="text-[10px] text-[#8e8ea0] font-mono uppercase tracking-wider bg-[#1a1a1a] px-1.5 py-0.5 rounded">{result.group}</span>
                                        </div>
                                        {result.description && (
                                            <p className="text-[13px] text-[#8e8ea0] truncate group-hover:text-[#d1d5db] transition-colors">{result.description}</p>
                                        )}
                                    </div>
                                    <ChevronRight size={16} className="text-[#555] group-hover:text-[#8e8ea0] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {filteredResults.length > 0 && (
                    <div className="px-4 py-2.5 border-t border-[#2e2e2e] bg-[#000000] text-[11px] text-[#8e8ea0] flex justify-between">
                        <span>{filteredResults.length} kết quả</span>
                        <span>Dùng phím mũi tên để di chuyển</span>
                    </div>
                )}
            </div>
        </div>
    );
};