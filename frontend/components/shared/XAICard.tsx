import React from 'react';

export interface XAICardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    badge?: string;
    onClick?: () => void;
    link?: string;
    footer?: React.ReactNode;
}

export const XAICard: React.FC<XAICardProps> = ({ title, description, icon, badge, onClick, link, footer }) => {
    const Wrapper = link && link !== '#' ? 'a' : 'div';
    // If it's a link, we don't want the div's onClick to conflict or double fire, 
    // but the original code had onClick on the wrapper. 
    // If it's an anchor, onClick can still work (e.g. tracking).

    return (
        <Wrapper
            href={link && link !== '#' ? link : undefined}
            target={link && link !== '#' ? "_blank" : undefined}
            onClick={onClick}
            className="group relative flex flex-col justify-between rounded-md bg-[#0E0E0E] p-6 transition-all border border-white/5 hover:border-white/10 hover:bg-[#121212] cursor-pointer h-full"
        >
            <div className="flex items-start justify-between mb-8">
                <div className="text-white p-2.5 rounded-md bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                    {icon}
                </div>
                {badge && (
                    <span className="rounded px-2 py-0.5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest bg-white/5 border border-white/5">
                        {badge}
                    </span>
                )}
            </div>
            <div>
                <h3 className="text-[16px] font-bold text-white mb-2 tracking-tight">{title}</h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">{description}</p>
            </div>
            {footer && <div className="mt-6 pt-4 border-t border-white/5">{footer}</div>}
        </Wrapper>
    );
}
