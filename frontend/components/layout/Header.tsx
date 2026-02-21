import React, { useState, useEffect } from 'react';
import { Menu, Moon, Sun, Github, Hammer } from 'lucide-react';

// ─── "Đang Phát Triển" toast ──────────────────────────────────────────────────

interface DevToastProps {
    visible: boolean;
    onClose: () => void;
}

export const DevToast: React.FC<DevToastProps> = ({ visible, onClose }) => {
    useEffect(() => {
        if (visible) {
            const t = setTimeout(onClose, 3000);
            return () => clearTimeout(t);
        }
    }, [visible, onClose]);

    if (!visible) return null;
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center gap-3 px-5 py-3.5 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl">
                <Hammer size={15} className="text-yellow-400 shrink-0" />
                <div>
                    <p className="text-[13px] font-bold text-white">Đang Phát Triển</p>
                    <p className="text-[11px] text-zinc-500">Tính năng này chưa sẵn sàng, vui lòng thử lại sau.</p>
                </div>
                <button onClick={onClose} className="ml-2 text-zinc-600 hover:text-white transition-colors text-[16px] leading-none">&times;</button>
            </div>
        </div>
    );
};

// ─── Theme helpers ────────────────────────────────────────────────────────────

export function useTheme() {
    const [isDark, setIsDark] = useState<boolean>(() => {
        try {
            const stored = localStorage.getItem('theme');
            if (stored) return stored === 'dark';
        } catch { /* ignore */ }
        return true; // default dark
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }
        try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch { /* ignore */ }
    }, [isDark]);

    return { isDark, toggle: () => setIsDark(d => !d) };
}

// ─── Header ───────────────────────────────────────────────────────────────────

interface HeaderProps {
    onMenuClick: () => void;
    onNavigate: (id: string) => void;
    onSearchClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, onNavigate }) => {
    const { isDark, toggle } = useTheme();
    const [devToast, setDevToast] = useState(false);

    const wip = (e: React.MouseEvent) => {
        e.preventDefault();
        setDevToast(true);
    };

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-[#0E0E0E] border-b border-white/5 h-14">
                <div className="flex h-full max-w-[1600px] mx-auto items-center justify-between px-6">

                    {/* Left: Mobile menu + Logo + Nav */}
                    <div className="flex items-center gap-6 md:gap-8 z-10">
                        <button
                            className="md:hidden text-zinc-400 hover:text-white transition-colors p-1"
                            onClick={onMenuClick}
                        >
                            <Menu size={20} />
                        </button>

                        {/* Logo */}
                        <div
                            className="flex items-center cursor-pointer select-none gap-2.5"
                            onClick={() => onNavigate('home')}
                        >
                            <div className="bg-white text-black p-1 rounded-sm">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="font-bold text-[15px] tracking-tight text-white hidden sm:block">
                                Huynhtu<span className="text-zinc-500 font-normal mx-1">|</span>Docs
                            </span>
                        </div>

                        {/* Nav Links */}
                        <nav className="hidden md:flex items-center gap-6">
                            <button onClick={() => onNavigate('home')} className="text-[13px] font-medium text-white hover:text-zinc-300 transition-colors">
                                Home
                            </button>
                            <button onClick={() => onNavigate('windows')} className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors">
                                OS
                            </button>
                            <button onClick={() => onNavigate('software')} className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors">
                                Software
                            </button>
                            <button onClick={wip} className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors">
                                News
                            </button>
                        </nav>
                    </div>

                    {/* Center: Search (disabled → WIP) */}
                    <div className="hidden lg:flex flex-1 justify-center max-w-[400px]">
                        <button
                            onClick={wip}
                            className="w-full h-9 flex items-center justify-between px-4 bg-[#141414] border border-white/5 rounded hover:border-white/10 transition-all text-zinc-500 cursor-not-allowed opacity-60"
                        >
                            <div className="flex items-center gap-2.5">
                                <Hammer size={13} />
                                <span className="text-[12px] font-medium">Đang phát triển...</span>
                            </div>
                            <kbd className="h-5 flex items-center justify-center rounded border border-white/10 bg-white/5 px-1.5 font-sans text-[9px] font-bold">
                                Ctrl K
                            </kbd>
                        </button>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-1">
                        {/* Mobile search → WIP */}
                        <button onClick={wip} className="lg:hidden p-2 text-zinc-500 hover:text-white transition-colors">
                            <Hammer size={17} />
                        </button>

                        {/* Dark/Light toggle */}
                        <button onClick={toggle} title={isDark ? 'Chuyển sang sáng' : 'Chuyển sang tối'}
                            className="p-2 text-zinc-500 hover:text-white transition-colors">
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        {/* GitHub */}
                        <a href="https://github.com/huyhtu206" target="_blank" rel="noreferrer"
                            className="p-2 text-zinc-500 hover:text-white transition-colors">
                            <Github size={18} />
                        </a>
                    </div>
                </div>
            </header>

            <DevToast visible={devToast} onClose={() => setDevToast(false)} />
        </>
    );
};