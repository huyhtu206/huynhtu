import React from 'react';
import { Menu, Search, Github, Sun, Moon, ExternalLink, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onNavigate: (id: string) => void;
  onSearchClick: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, onNavigate, onSearchClick, isDark, onToggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg-primary)] border-b border-[var(--border)] h-[56px] transition-all duration-200">
      <div className="flex h-full max-w-none mx-auto items-center justify-between px-4 md:px-6">

        {/* Left: Logo */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              onClick={onMenuClick}
            >
              <Menu size={20} />
            </button>

            <div
              className="flex items-center cursor-pointer select-none gap-2.5"
              onClick={() => onNavigate('home')}
            >
              <div className="font-bold text-[18px] tracking-tight text-[var(--text-primary)] flex items-center gap-2">
                <span className="whitespace-nowrap">Huynhtu Storage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div
            onClick={onSearchClick}
            className="w-full relative group cursor-pointer"
          >
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors" />
            <div className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg py-2 pl-9 pr-12 text-[14px] text-[var(--text-secondary)] group-hover:border-[var(--accent)] transition-all">
              Tìm kiếm
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 text-[14px] font-medium text-[var(--bg-primary)] bg-[var(--text-primary)] rounded-full hover:opacity-80 transition-all"
          >
            <span>Tài trợ</span>
          </a>

          <div className="flex items-center gap-4">
            <button
              onClick={onSearchClick}
              className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Search size={20} />
            </button>

            <button
              onClick={onToggleTheme}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors border border-[var(--border)] p-1.5 rounded-lg hover:bg-[var(--bg-secondary)]"
            >
              {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};