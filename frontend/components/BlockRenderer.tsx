import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from './shared/CodeBlock';
import { Callout } from './shared/Callout';
import { Accordion } from './shared/Accordion';
import { WindowsDownloader } from './features/WindowsDownloader';
import { WindowsMenu } from './features/WindowsMenu';
import { GhostCatalog } from './features/ghost/GhostCatalog';
import { ActivationView } from './features/ActivationView';
import { SoftwareCatalog } from './shared/SoftwareCatalog';
import { XAICard } from './shared/XAICard';
import { ArrowRight, Calendar, Clock, Download, Monitor, Box } from 'lucide-react';
import { getIcon } from '../utils/icons';
import {
    DocSectionType,
    DownloadItem,
    NewsItem,
    GhostItem,
    ServiceItem,
    AccordionItem,
    IsoFormBlock,
    WindowsEdition
} from '../types';

interface BlockRendererProps {
    block: any;
    index: number;
    onNavigate: (id: string, type?: 'page' | 'news') => void;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ block, index, onNavigate }) => {
    switch (block.type as DocSectionType) {
        case 'text':
        case 'content':
            return (
                <div key={index} className="mb-10 max-w-4xl" id={block.title ? 'section-' + index : undefined}>
                    {block.title && (
                        <h2 className="text-xl font-bold text-white mb-4 tracking-tight" id={block.title.toLowerCase().replace(/\s+/g, '-')}>
                            {block.title}
                        </h2>
                    )}
                    <div className="text-zinc-400 leading-7 text-[15px] prose prose-invert max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {block.content}
                        </ReactMarkdown>
                    </div>
                </div>
            );
        case 'code':
            return <CodeBlock key={index} code={block.content} language={block.language} />;
        case 'callout':
            return <Callout key={index} variant={block.variant} title={block.title}>{block.content}</Callout>;
        case 'windows-release-grid':
            return (
                <div key={index} className="w-full mb-12">
                    <WindowsDownloader editions={block.content as WindowsEdition[]} />
                </div>
            );
        case 'windows-menu':
            return (
                <div key={index} className="w-full mb-12">
                    <WindowsMenu
                        menuItems={block.content as any[]}
                        type={block.menuType || 'windows'}
                        officeVersions={block.officeVersions}
                        onSelect={(cat, subcat, item) => {
                            console.log('Selected:', { category: cat, subcategory: subcat, item });
                        }}
                    />
                </div>
            );
        case 'services-grid':
            return (
                <div key={index} className="mb-12">
                    {block.title && <h3 className="text-lg font-bold text-white mb-6 tracking-tight" id="services">{block.title}</h3>}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                                        <span className="text-zinc-500">Xem chi tiết</span>
                                        <ArrowRight size={14} className="text-white" />
                                    </div>
                                }
                            />
                        ))}
                    </div>
                </div>
            );
        case 'news-grid':
            const newsItems = block.content as NewsItem[];
            if (!newsItems.length) return null;

            const featured = newsItems[0];
            const others = newsItems.slice(1);

            return (
                <div key={index} className="mb-12 space-y-8">
                    <div
                        onClick={() => onNavigate(featured.id, 'news')}
                        className="group relative w-full aspect-[2/1] md:aspect-[2.5/1] rounded-xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-[#0c0d0d]">
                            {featured.image && <img src={featured.image} alt="" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-2/3 z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-blue-500 text-white shadow-lg shadow-blue-500/20">Featured</span>
                                <span className="text-xs text-zinc-300 font-mono flex items-center gap-1.5"><Calendar size={12} /> {featured.date}</span>
                            </div>
                            <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-3 group-hover:text-blue-300 transition-colors">{featured.title}</h3>
                            <p className="text-sm md:text-base text-zinc-300 line-clamp-2 leading-relaxed">{featured.summary}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {others.map((item, i) => (
                            <div
                                key={i}
                                onClick={() => onNavigate(item.id, 'news')}
                                className="group flex flex-col gap-0 rounded-lg bg-[#0c0d0d] border border-white/5 hover:border-white/20 transition-all cursor-pointer overflow-hidden h-full hover:bg-[#111]"
                            >
                                <div className="w-full aspect-video bg-[#111] overflow-hidden relative">
                                    {item.image && <img src={item.image} alt="" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />}
                                    <div className="absolute top-3 left-3">
                                        <span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[10px] font-bold text-white border border-white/10">{item.category}</span>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-3 text-[10px] text-zinc-600 font-mono">
                                        <span>{item.date}</span>
                                        <span className="flex items-center gap-1"><Clock size={10} /> 5 min read</span>
                                    </div>
                                    <h4 className="text-[15px] font-bold text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors line-clamp-2">{item.title}</h4>
                                    <p className="text-[12px] text-zinc-500 line-clamp-3 mb-4 flex-1">{item.summary}</p>
                                    <div className="flex items-center text-[11px] text-zinc-400 group-hover:text-white transition-colors mt-auto pt-4 border-t border-white/5">
                                        Read article <ArrowRight size={12} className="ml-1 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case 'download-grid':
            return (
                <div key={index} className="mb-12">
                    {block.title && <h3 className="text-lg font-bold text-white mb-6 tracking-tight">{block.title}</h3>}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {(block.content as DownloadItem[]).map((item, i) => (
                            <XAICard
                                key={i}
                                title={item.title}
                                description={item.description}
                                icon={getIcon(item.icon || 'download')}
                                badge={item.version}
                                link={item.link}
                            />
                        ))}
                    </div>
                </div>
            );
        case 'software-catalog':
            return (
                <SoftwareCatalog
                    key={index}
                    initialItems={block.content as DownloadItem[]}
                />
            );
        case 'ghost-catalog':
            return (
                <GhostCatalog
                    key={index}
                    content={block.content as GhostItem[]}
                />
            );
        case 'activation-view':
            return (
                <ActivationView
                    key={index}
                    type={block.menuType === 'ohook' ? 'ohook' : 'hwid'}
                    keys={block.content as any[]}
                />
            );
        case 'accordion':
            return <Accordion key={index} items={block.content as AccordionItem[]} />;
        case 'iso-form':
            const form = block.content as IsoFormBlock;
            return (
                <div key={index} className="rounded-lg border border-white/10 bg-[#0c0d0d] p-8 max-w-3xl mb-12 shadow-inner">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-white">
                            {form.variant === 'windows' ? <Monitor size={24} /> : <Box size={24} />}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white tracking-tight">{form.title}</h3>
                            <p className="text-xs text-zinc-500">{form.description}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold">Select Version</label>
                                <select className="w-full h-11 bg-black border border-white/10 rounded-lg px-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors">
                                    <option>Windows 11 23H2</option>
                                    <option>Windows 10 22H2</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold">Language</label>
                                <select className="w-full h-11 bg-black border border-white/10 rounded-lg px-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors">
                                    <option>English (International)</option>
                                    <option>Vietnamese</option>
                                </select>
                            </div>
                        </div>
                        <button className="w-full h-11 mt-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors text-sm flex items-center justify-center gap-2">
                            <Download size={16} /> Create Download Link
                        </button>
                    </div>
                </div>
            );
        default:
            return null;
    }
};
