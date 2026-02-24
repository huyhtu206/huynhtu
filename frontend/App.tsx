import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SidebarLeft } from './components/SidebarLeft';
import { SidebarRight } from './components/SidebarRight';
import { Accordion } from './components/Accordion';
import { CodeBlock } from './components/CodeBlock';
import { Callout } from './components/Callout';
import { WindowsDownloader } from './components/WindowsDownloader';
import { OfficeDownloader } from './components/OfficeDownloader';
import { OfficeMSIDownloader } from './components/OfficeMSIDownloader';
import { SponsorPage } from './components/SponsorPage';
import { SearchModal } from './components/SearchModal';
import { NewsDetail } from './components/NewsDetail';
import { ActivationTable } from './components/ActivationTable';
import { DriverPage } from './components/DriverPage';
import { NAVIGATION, DOCS_DATA, PAGES_WITH_DRIVERS } from './constants';
import { DocSectionType, DownloadItem, NewsItem, PlatformType, ServiceItem, WindowsEdition, AccordionItem, OfficeDownloaderData, ActivationSection } from './types';
import { Terminal, Settings, Zap, Search, Box, Cpu, Globe, Shield, Command, Monitor, CloudDownload, Key, ArrowRight, Play, LayoutGrid } from 'lucide-react';
import { getResolveUrl } from './services/api';

// --- Helper Icons ---
const getIcon = (name: string, props: any = { size: 24 }) => {
    switch (name) {
        case 'windows': return <Monitor {...props} />;
        case 'office': return <LayoutGrid {...props} />;
        case 'remote': return <Command {...props} />;
        case 'key': return <Key {...props} />;
        case 'cpu': return <Cpu {...props} />;
        case 'shield': return <Shield {...props} />;
        case 'zap': return <Zap {...props} />;
        case 'globe': return <Globe {...props} />;
        case 'code': return <Terminal {...props} />;
        case 'settings': return <Settings {...props} />;
        case 'hard-drive': return <Box {...props} />;
        case 'download': return <CloudDownload {...props} />;
        case 'play': return <Play {...props} />;
        default: return <Terminal {...props} />;
    }
};

// --- OpenAI Style Card ---
interface XAICardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    badge?: string;
    onClick?: () => void;
    link?: string;
    footer?: React.ReactNode;
    image?: string; // For gradient backgrounds
}

const XAICard: React.FC<XAICardProps> = ({ title, description, icon, badge, onClick, link, footer, image }) => {
    const Wrapper = link && link !== '#' ? 'a' : 'div';
    return (
        <Wrapper
            href={link && link !== '#' ? link : undefined}
            target={link && link !== '#' ? "_blank" : undefined}
            onClick={onClick}
            className="group relative flex flex-col justify-between rounded-xl bg-[#0d0d0d] p-6 transition-all border border-[#212121] hover:border-[#333] cursor-pointer h-full overflow-hidden"
        >
            {image && (
                <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                    <img src={image} alt="" className="w-full h-full object-cover" />
                </div>
            )}
            <div className="relative z-10 w-full h-full flex flex-col justify-between">
                <div className="flex items-start justify-between mb-8">
                    <div className="text-white">
                        {icon}
                    </div>
                    {badge && (
                        <span className="rounded-full px-3 py-0.5 text-[11px] font-medium text-white bg-white/10 backdrop-blur-md border border-white/10">
                            {badge}
                        </span>
                    )}
                </div>
                <div>
                    <h3 className="text-[17px] font-semibold text-white mb-2 tracking-tight group-hover:text-white/90 transition-colors">{title}</h3>
                    <p className="text-[14px] text-[#8e8ea0] leading-relaxed line-clamp-2 group-hover:text-[#a1a1b3] transition-colors">{description}</p>
                </div>
                {footer && <div className="mt-4 pt-4 border-t border-white/5">{footer}</div>}
            </div>
        </Wrapper>
    );
}

// --- Quickstart Hero ---
const QuickstartHero: React.FC = () => {
    return (
        <div className="relative w-full rounded-2xl bg-[#0d0d0d] border border-[#212121] overflow-hidden mb-12 flex flex-col md:flex-row">
            <div className="flex-1 p-8 md:p-12 z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Developer quickstart</h2>
                <p className="text-[#8e8ea0] text-lg max-w-md mb-8">Make your first API request in minutes. Learn the basics of the OpenAI platform.</p>
                <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-[#e5e5e5] transition-all">
                    Get started
                </button>
            </div>
            <div className="flex-1 min-h-[300px] bg-[#1a1a1a] p-4 flex flex-col justify-center">
                <CodeBlock
                    language="javascript"
                    code={`import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
  model: "gpt-5.2",
  input: "Write a short bedtime story about a unicorn."
});

console.log(response.output_text);`}
                />
            </div>
        </div>
    );
};

// --- Catalogs ---

interface SoftwareCatalogProps {
    items: DownloadItem[];
    activePlatform: PlatformType;
    onPlatformChange: (p: PlatformType) => void;
}

const SoftwareCatalog: React.FC<SoftwareCatalogProps> = ({ items, activePlatform, onPlatformChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    if (!items || !Array.isArray(items)) return null;

    const filteredItems = items.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPlatform = item.platforms.includes(activePlatform);
        return matchesSearch && matchesPlatform;
    });

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#212121] pb-6">
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#8e8ea0]" />
                    <input
                        placeholder="Tìm kiếm phần mềm..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="h-10 w-full rounded-lg border border-[#212121] bg-[#0d0d0d] px-3 pl-10 text-[14px] text-white placeholder:text-[#525252] focus:border-[#444] focus:outline-none transition-colors"
                    />
                </div>
                <div className="flex bg-[#0d0d0d] p-1 rounded-lg border border-[#212121]">
                    {['windows', 'mac', 'linux'].map(p => (
                        <button
                            key={p}
                            onClick={() => onPlatformChange(p as PlatformType)}
                            className={`px-4 py-1.5 rounded-md text-[12px] font-medium uppercase tracking-wider transition-all ${activePlatform === p ? 'bg-[#1a1a1a] text-white' : 'text-[#8e8ea0] hover:text-white'}`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.map((item, i) => (
                    <XAICard
                        key={i}
                        title={item.title}
                        description={item.description}
                        icon={getIcon(item.icon || 'terminal')}
                        badge={item.version}
                        link={item.link === '#' || !item.link.includes('http') ? getResolveUrl('software', undefined, item.title) : item.link}
                    />
                ))}
            </div>
        </div>
    );
};

// --- Main App ---

function App() {
    const [activeSlug, setActiveSlug] = useState<string>('home');
    const [activeNewsId, setActiveNewsId] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activePlatform, setActivePlatform] = useState<PlatformType>('windows');

    const activePage = DOCS_DATA[activeSlug] || PAGES_WITH_DRIVERS[activeSlug] || DOCS_DATA['home'];

    const handleNavigate = (id: string, type: 'page' | 'news' = 'page') => {
        if (type === 'news') {
            setActiveSlug('news');
            setActiveNewsId(id);
        } else {
            setActiveSlug(id);
            setActiveNewsId(null);
        }
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderBlock = (block: any, index: number) => {
        switch (block.type as DocSectionType) {
            case 'quickstart-hero':
                return <QuickstartHero key={index} />;
            case 'grid-cards':
                return (
                    <div key={index} className="mb-12">
                        <div className="flex items-center justify-between mb-6">
                            {block.title && <h3 className="text-xl font-bold text-white tracking-tight">{block.title}</h3>}
                            <button className="text-[13px] text-[#8e8ea0] hover:text-white transition-colors flex items-center gap-1">
                                View all <ArrowRight size={14} />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {(block.content as any[]).map((item, i) => (
                                <XAICard
                                    key={i}
                                    title={item.title}
                                    description={item.description || ''}
                                    image={item.image}
                                />
                            ))}
                        </div>
                    </div>
                );
            case 'text':
                return (
                    <div key={index} className="mb-10 w-full" id={block.title ? 'section-' + index : undefined}>
                        {block.title && <h2 className="text-xl font-semibold text-white mb-4 tracking-tight" id={block.title ? block.title.toLowerCase().replace(/\s+/g, '-') : undefined}>{block.title}</h2>}
                        <div
                            className="text-[#8e8ea0] leading-relaxed text-[16px] prose prose-invert max-w-none prose-p:mb-4"
                            dangerouslySetInnerHTML={{ __html: block.content }}
                        />
                    </div>
                );
            case 'code':
                return <div key={index} className="mb-8"><CodeBlock code={block.content} language={block.language} /></div>;
            case 'accordion':
                return (
                    <div key={index} className="max-w-4xl mx-auto w-full mb-12">
                        <Accordion items={block.content as AccordionItem[]} />
                    </div>
                );
            case 'callout':
                return <Callout key={index} variant={block.variant} title={block.title}>{block.content}</Callout>;
            case 'windows-release-grid':
                return (
                    <div key={index} className="w-full mb-12">
                        <WindowsDownloader key={activeSlug + index} editions={block.content as WindowsEdition[]} />
                    </div>
                );
            case 'office-downloader':
                return (
                    <div key={index} className="w-full mb-12">
                        <OfficeDownloader data={block.content as OfficeDownloaderData} />
                    </div>
                );
            case 'office-msi-downloader': {
                const proxyBase = (import.meta as any).env?.VITE_PROXY_URL
                    ?? 'https://api.huynhtu.com';
                return (
                    <div key={index} className="w-full mb-12">
                        <OfficeMSIDownloader
                            sections={block.content as ActivationSection[]}
                            baseUrl={proxyBase}
                        />
                    </div>
                );
            }
            case 'sponsor-page':
                return <SponsorPage key={index} />;
            case 'services-grid':
                return (
                    <div key={index} className="mb-12">
                        {block.title && <h3 className="text-lg font-semibold text-white mb-6 tracking-tight" id="services">{block.title}</h3>}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {(block.content as ServiceItem[]).map((item, i) => (
                                <XAICard
                                    key={i}
                                    title={item.title}
                                    description={item.description}
                                    icon={getIcon(item.icon)}
                                    badge={item.price}
                                    link={item.link}
                                    footer={
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-[#8e8ea0]">Learn more</span>
                                            <ArrowRight size={14} className="text-white" />
                                        </div>
                                    }
                                />
                            ))}
                        </div>
                    </div>
                );
            case 'software-catalog':
                return (
                    <SoftwareCatalog
                        key={index}
                        items={block.content as DownloadItem[]}
                        activePlatform={activePlatform}
                        onPlatformChange={setActivePlatform}
                    />
                );
            case 'driver-page':
                return (
                    <div key={index} className="w-full mb-12">
                        <DriverPage platforms={block.content} />
                    </div>
                );
            case 'ghost-catalog':
                return (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        {(block.content as any[]).map((item, i) => (
                            <XAICard
                                key={i}
                                title={item.title}
                                description={item.description}
                                icon={getIcon('hard-drive')}
                                badge={item.version}
                                link="#"
                            />
                        ))}
                    </div>
                );
            case 'activation-section':
                return (
                    <div key={index} className="w-full mb-12">
                        <ActivationTable data={block.content as ActivationSection[]} />
                    </div>
                );
            case 'news-grid':
                const newsItems = block.content as NewsItem[];
                if (!newsItems.length) return null;
                return (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        {newsItems.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => handleNavigate(item.id, 'news')}
                                className="group cursor-pointer rounded-xl border border-[#212121] bg-[#0d0d0d] p-6 hover:border-[#333] transition-all"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[11px] font-mono text-[#8e8ea0]">{item.date}</span>
                                    <div className="flex items-center gap-1 text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span>Đọc</span>
                                        <ArrowRight size={12} />
                                    </div>
                                </div>
                                <h3 className="text-[16px] font-semibold text-white mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                                <p className="text-[14px] text-[#8e8ea0] line-clamp-2">{item.summary}</p>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };


    // Extract headings for right sidebar
    const headings = activePage.blocks
        .filter(s => s.type === 'text' && s.title)
        .map((s, i) => ({
            id: s.title ? s.title.toLowerCase().replace(/\s+/g, '-') : `section-${i}`,
            text: s.title || '',
            level: 2
        }));


    useEffect(() => {
        const handleInternalLinks = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            if (link && link.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const slug = link.getAttribute('href')?.substring(1);
                if (slug) {
                    handleNavigate(slug, 'page');
                }
            }
        };

        document.addEventListener('click', handleInternalLinks);
        return () => document.removeEventListener('click', handleInternalLinks);
    }, []);

    const [isDark, setIsDark] = useState(true);

    const isWindowsPage = activeSlug.startsWith('win-') || activeSlug.startsWith('ghost-') || activeSlug.startsWith('sw-win') || activeSlug === 'windows' || activeSlug === 'office-msi' || activeSlug === 'office-mac' || activeSlug.startsWith('driver-');

    return (
        <div
            data-theme={isDark ? 'dark' : 'light'}
            className={`h-screen ${isDark ? 'bg-[#000000] text-[#DCDCDC]' : 'bg-white text-black'} selection:bg-white selection:text-black flex flex-col overflow-hidden transition-colors duration-300`}
        >
            <Header
                onMenuClick={() => setIsMobileMenuOpen(true)}
                onNavigate={handleNavigate}
                onSearchClick={() => setIsSearchOpen(true)}
                isDark={isDark}
                onToggleTheme={() => setIsDark(!isDark)}
            />

            <div className="flex-1 max-w-none mx-auto w-full flex overflow-hidden">
                <SidebarLeft
                    items={NAVIGATION}
                    activeId={activeSlug}
                    onNavigate={handleNavigate}
                    isOpenMobile={isMobileMenuOpen}
                />

                <main className="flex-1 min-w-0 overflow-y-auto scrollbar-hide">
                    <div className="px-6 md:px-12 py-10 md:py-16">
                        {activeNewsId ? (
                            <NewsDetail
                                newsId={activeNewsId}
                                onBack={() => setActiveSlug('news')}
                            />
                        ) : (
                            <div className={`${isWindowsPage ? 'max-w-none' : 'max-w-5xl'} mx-auto animate-fade-in`}>
                                <div className="mb-12">
                                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-[var(--text-primary)]">{activePage.title}</h1>
                                    <p className={`text-xl text-[#8e8ea0] leading-relaxed ${isWindowsPage ? 'max-w-none' : 'max-w-3xl'}`}>{activePage.description}</p>
                                </div>

                                <div className="space-y-16">
                                    {activePage.blocks.map((block, index) => renderBlock(block, index))}
                                </div>
                            </div>
                        )}
                    </div>
                </main>

                {!isWindowsPage && <SidebarRight headings={headings} />}
            </div>

            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                onNavigate={handleNavigate}
            />

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-30 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </div>
    );
}

export default App;
