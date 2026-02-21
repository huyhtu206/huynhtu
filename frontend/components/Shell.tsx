import React from 'react';
import { Header } from './layout/Header';
import { SidebarLeft } from './layout/SidebarLeft';
import { NavItem } from '../types';

interface ShellProps {
    children: React.ReactNode;
    activeSlug: string;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
    isSearchOpen?: boolean;
    setIsSearchOpen?: (open: boolean) => void;
    handleNavigate: (id: string, type?: 'page' | 'news') => void;
    items?: NavItem[];
}

export const Shell: React.FC<ShellProps> = ({
    children,
    activeSlug,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    handleNavigate,
    items
}) => {
    return (
        <div className="min-h-screen bg-[#141414] font-sans text-foreground selection:bg-white/20">
            <Header
                onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                onNavigate={handleNavigate}
            />

            <div className="flex max-w-[1600px] mx-auto">
                <SidebarLeft
                    items={items || []}
                    activeId={activeSlug}
                    onNavigate={handleNavigate}
                    isOpenMobile={isMobileMenuOpen}
                />

                <main className="flex-1 min-w-0 px-6 py-10 md:px-12 lg:px-12 border-l border-white/5 bg-[#141414]">
                    <div className="max-w-[1400px] mx-auto animate-fade-in">
                        {children}
                    </div>
                </main>
            </div>

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-30 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </div>
    );
};
