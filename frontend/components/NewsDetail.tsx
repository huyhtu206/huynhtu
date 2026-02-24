import React from 'react';
import { NewsItem } from '../types';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

interface NewsDetailProps {
    item: NewsItem;
    onBack: () => void;
}

export const NewsDetail: React.FC<NewsDetailProps> = ({ item, onBack }) => {
    return (
        <div className="animate-fade-in max-w-4xl mx-auto pb-20">
            {/* Breadcrumb / Back */}
            <button 
                onClick={onBack}
                className="group flex items-center gap-2 text-sm text-[#8e8ea0] hover:text-white mb-8 transition-colors"
            >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                Back to News
            </button>

            {/* Header */}
            <div className="mb-10">
                <div className="flex items-center gap-3 text-xs font-mono text-[#8e8ea0] mb-4 uppercase tracking-wider">
                    <span className="text-[#10a37f]">{item.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar size={12}/> {item.date}</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                    {item.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-[#8e8ea0] pb-8 border-b border-[#2e2e2e]">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white border border-[#2e2e2e]">
                            <User size={16} />
                        </div>
                        <span>By <span className="text-white font-medium">{item.author || 'HuynhTu'}</span></span>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            {item.image && (
                <div className="w-full aspect-video rounded-lg overflow-hidden mb-12 border border-[#2e2e2e] bg-[#111111]">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
            )}

            {/* Content Body */}
            <div className="prose prose-invert prose-zinc max-w-none">
                <div dangerouslySetInnerHTML={{ __html: item.content }} className="text-[#d1d5db] leading-8 space-y-6 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-10 [&>h3]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>li]:mb-2 [&>code]:bg-[#1a1a1a] [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:font-mono [&>code]:text-sm [&>code]:border [&>code]:border-[#2e2e2e]" />
            </div>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-[#2e2e2e]">
                    <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                            <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#2e2e2e] text-[#8e8ea0] text-xs hover:bg-[#2e2e2e] hover:text-white transition-colors">
                                <Tag size={12} /> {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};