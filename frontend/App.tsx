import React, { useState, useEffect } from 'react';
import { Shell } from './components/Shell';
import { BlockRenderer } from './components/BlockRenderer';
import { NewsDetail } from './components/features/NewsDetail';
import { XAICard } from './components/shared/XAICard';
import { DOCS_DATA } from './constants_data/docs_data';
import { NEWS_LIST } from './constants_data/news';
import { Monitor, LayoutGrid, Terminal, Search } from 'lucide-react';
import { WindowsMenuItem, OfficeVersion, NavItem, DocPage, DownloadItem, GhostItem, NewsItem, ServiceItem } from './types';
import { api } from './services/api';
import { NAVIGATION as STATIC_NAVIGATION } from './constants_data/navigation';
import { HWID_KEYS } from './constants_data/activation_keys';

function App() {
    const [activeSlug, setActiveSlug] = useState<string>('home');
    const [activeNewsId, setActiveNewsId] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Backend Data State
    const [windowsMenu, setWindowsMenu] = useState<WindowsMenuItem[]>([]);
    const [officeVersions, setOfficeVersions] = useState<OfficeVersion[]>([]);
    const [softwareItems, setSoftwareItems] = useState<DownloadItem[]>([]);
    const [ghostItems, setGhostItems] = useState<GhostItem[]>([]);
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [servicesItems, setServicesItems] = useState<ServiceItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch data on mount
    useEffect(() => {
        const loadBackendData = async () => {
            try {
                const [winMenu, offC2R, soft, ghost, news, serv] = await Promise.all([
                    api.getWindowsMenu(),
                    api.getOfficeC2RVersions(),
                    api.getSoftware(),
                    api.getGhost(),
                    api.getNews(),
                    api.getServices()
                ]);
                setWindowsMenu(winMenu || []);
                setOfficeVersions(offC2R || []);
                setSoftwareItems(soft || []);
                setGhostItems(ghost || []);
                setNewsItems(news || []);
                setServicesItems(serv || []);
            } catch (err) {
                console.error('Failed to load backend data:', err);
            } finally {
                setIsLoading(false);
            }
        };
        loadBackendData();
    }, []);

    // Generate dynamic navigation by merging backend data into STATIC_NAVIGATION
    const dynamicNavigation: NavItem[] = STATIC_NAVIGATION.map(folder => {
        // 1. Windows & Office
        if (folder.id === 'folder-1') {
            const windowsPages: NavItem[] = windowsMenu.map(item => ({ id: item.id, title: item.title }));
            const officePages: NavItem[] = [
                { id: 'office-c2r', title: 'Office C2R' },
                { id: 'office-msi', title: 'Office MSI VL' },
                { id: 'office-mac', title: 'Office for MacOS' }
            ];
            return { ...folder, pages: [...windowsPages, ...officePages] };
        }

        // 2. Ghost OS
        if (folder.id === 'folder-2') {
            // We can match them based on what's in navigation.ts or dynamically list from backend
            return folder;
        }

        return folder;
    });

    // Helper to get active page data, merging backend content if applicable
    const getActivePage = (): DocPage => {
        const fallback: DocPage = { id: 'home', title: 'Home', description: '', blocks: [], headings: [] };

        // --- Dynamic Routing Logic ---

        // 1. Windows pages
        const winItem = windowsMenu.find(m => m.id === activeSlug);
        if (winItem) {
            return {
                id: winItem.id, title: winItem.title,
                description: `Tải xuống ISO ${winItem.title} nguyên bản từ Microsoft.`,
                blocks: [{ type: 'windows-menu', content: [winItem], menuType: 'windows' }],
                headings: []
            };
        }

        // 2. Office pages
        if (activeSlug.startsWith('office-')) {
            const menuType = activeSlug === 'office-mac' ? 'office-mac' : 'office';
            return {
                id: activeSlug,
                title: activeSlug === 'office-c2r' ? 'Office C2R' : activeSlug === 'office-msi' ? 'Office MSI' : 'Office for Mac',
                description: `Tải xuống và cài đặt Microsoft Office phiên bản ${activeSlug.replace('office-', '').toUpperCase()}.`,
                blocks: [{ type: 'windows-menu', content: [], menuType: menuType, officeVersions: officeVersions }],
                headings: []
            };
        }

        // 3. Software categories
        if (activeSlug.startsWith('sw-')) {
            const parts = activeSlug.split('-');
            const platformSuffix = parts[1]; // 'win', 'mac', 'lin'
            const categoryKey = parts[2];

            const platformMap: Record<string, string> = { 'win': 'windows', 'mac': 'mac', 'lin': 'linux' };
            const categoryMap: Record<string, string> = {
                'graphics': 'Graphics', 'office': 'Office', 'security': 'Security', 'browser': 'Web Browsers',
                'chat': 'Communication', 'media': 'Multimedia', 'sys': 'Utilities', 'dev': 'Development',
                'game': 'Gaming', 'disk': 'Utilities', 'vpn': 'Communication', 'vm': 'Utilities',
                'pass': 'Security', 'remote': 'Communication', 'backup': 'Utilities', 'dl': 'Utilities'
            };

            const platformFilter = platformMap[platformSuffix];
            const categoryFilter = categoryMap[categoryKey];

            const filteredSoftware = softwareItems.filter(item =>
                (!platformFilter || item.platforms.includes(platformFilter as any)) &&
                (!categoryFilter || item.category === categoryFilter)
            );

            return {
                id: activeSlug,
                title: `Phần Mềm ${platformSuffix.toUpperCase()} - ${categoryFilter || 'Tất Cả'}`,
                description: `Kho phần mềm ${platformSuffix.toUpperCase()} chất lượng cao.`,
                blocks: [{ type: 'software-catalog', content: filteredSoftware }],
                headings: []
            };
        }

        // 4. Ghost OS
        if (activeSlug.startsWith('ghost-')) {
            const version = activeSlug.split('-')[1]; // '11', '10', '81', '7'
            const filteredGhost = ghostItems.filter(item => item.title.toLowerCase().includes(version));
            return {
                id: activeSlug,
                title: `Ghost Windows ${version}`,
                description: `Bản Ghost Windows ${version} mượt mà, tối ưu.`,
                blocks: [{ type: 'ghost-catalog', content: filteredGhost }],
                headings: []
            };
        }

        // 5. Activation Keys
        if (activeSlug.startsWith('activation-')) {
            const isHWID = activeSlug === 'activation-hwid';

            return {
                id: activeSlug,
                title: isHWID ? 'Windows 10/11 HWID' : 'Ohook Office',
                description: isHWID ? 'Kích hoạt bản quyền kỹ thuật số cho Windows.' : 'Kích hoạt Microsoft Office thông qua Ohook.',
                blocks: [{
                    type: 'activation-view',
                    content: isHWID ? HWID_KEYS : [],
                    menuType: isHWID ? 'hwid' : 'ohook'
                }],
                headings: []
            };
        }

        // 6. Home page dynamic sections
        if (activeSlug === 'home') {
            const staticHome = DOCS_DATA['home'] || fallback;
            return {
                ...staticHome,
                blocks: [
                    { type: 'services-grid', title: 'Dịch vụ của chúng tôi', content: servicesItems },
                    { type: 'news-grid', title: 'Tin tức công nghệ', content: newsItems },
                    ...staticHome.blocks
                ]
            };
        }

        // Fallback to static DOCS_DATA
        const page = DOCS_DATA[activeSlug] || DOCS_DATA['home'] || fallback;
        return { ...page, blocks: page.blocks || [] };
    };

    const activePage = getActivePage();

    useEffect(() => {
        console.log('App State:', { activeSlug, activePageId: activePage?.id, hasBlocks: !!activePage?.blocks });
    }, [activeSlug, activePage]);

    const handleNavigate = (id: string, type: 'page' | 'news' = 'page') => {
        console.log('Navigating to:', id, type);
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

    const currentNewsItem = (activeSlug === 'news' && activeNewsId && newsItems)
        ? newsItems.find(n => n.id === activeNewsId)
        : null;

    return (
        <Shell
            activeSlug={activeSlug}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
            handleNavigate={handleNavigate}
            items={dynamicNavigation}
        >
            {currentNewsItem ? (
                <NewsDetail item={currentNewsItem} onBack={() => setActiveNewsId(null)} />
            ) : (
                <>
                    {activeSlug === 'home' ? (
                        <div className="max-w-4xl">
                            <div className="mb-12 py-8">
                                <h1 className="text-[42px] font-bold tracking-tight text-white mb-4 leading-tight">
                                    Huynhtu Documentation
                                </h1>
                                <p className="text-[16px] text-zinc-500 max-w-2xl leading-relaxed">
                                    Cổng thông tin tổng hợp về phần mềm, hệ điều hành và các tiện ích hệ thống tối ưu nhất dành cho cộng đồng kỹ thuật viên.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-4">
                                    <button
                                        onClick={() => setIsSearchOpen(true)}
                                        className="flex items-center gap-3 px-6 py-2.5 bg-[#5771ED] text-white text-[14px] font-bold rounded-md hover:bg-[#465cd6] transition-colors"
                                    >
                                        <Search size={18} />
                                        <span>Tìm kiếm nhanh</span>
                                    </button>
                                    <div className="flex items-center px-4 py-2 border border-white/10 rounded-md text-zinc-500 text-[13px] font-mono">
                                        CTRL K to search
                                    </div>
                                </div>
                            </div>

                            <div className="mb-20">
                                <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-8 flex items-center gap-3">
                                    Quick Access
                                    <div className="h-px bg-white/10 flex-1"></div>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <XAICard
                                        title="Windows ISO"
                                        description="Tải xuống ISO gốc Windows 10, 11 từ Microsoft."
                                        icon={<Monitor size={20} />}
                                        onClick={() => handleNavigate('win-11')}
                                    />
                                    <XAICard
                                        title="Office Suite"
                                        description="Cấu hình và tải xuống bộ cài Office LTSC, Microsoft 365."
                                        icon={<LayoutGrid size={20} />}
                                        onClick={() => handleNavigate('office-c2r')}
                                    />
                                    <XAICard
                                        title="Software Catalog"
                                        description="Ứng dụng thiết yếu cho mọi nền tảng Windows, Mac, Linux."
                                        icon={<Terminal size={20} />}
                                        onClick={() => handleNavigate('sw-win')}
                                    />
                                </div>
                            </div>

                            {isLoading ? (
                                <div className="flex justify-center py-12">
                                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                                </div>
                            ) : (
                                activePage?.blocks?.map((block, i) => (
                                    <BlockRenderer key={i} block={block} index={i} onNavigate={handleNavigate} />
                                )) || null
                            )}
                        </div>
                    ) : (
                        <div className="pb-24">
                            <div className="mb-12">
                                <div className="flex items-center gap-2 text-[12px] font-medium text-zinc-500 mb-4 font-mono">
                                    <span>docs</span>
                                    <span className="opacity-30">/</span>
                                    <span className="text-zinc-300">{activePage?.title || activeSlug}</span>
                                </div>
                                <h1 className="text-[36px] font-bold tracking-tight text-white mb-6">
                                    {activePage?.title || activeSlug}
                                </h1>
                                <p className="text-[16px] text-zinc-500 leading-relaxed max-w-3xl">
                                    {activePage?.description || `Tải xuống file ISO ${activePage?.title || activeSlug} chính hãng từ Microsoft. Hỗ trợ tất cả ngôn ngữ và kiến trúc.`}
                                </p>
                            </div>

                            {isLoading ? (
                                <div className="flex justify-center py-12">
                                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                                </div>
                            ) : (
                                activePage?.blocks?.map((block, i) => (
                                    <BlockRenderer key={i} block={block} index={i} onNavigate={handleNavigate} />
                                )) || null
                            )}
                        </div>
                    )}
                </>
            )}
        </Shell>
    );
}

export default App;