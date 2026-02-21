import React from 'react';

interface BreadcrumbsProps {
    items: string[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    return (
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 mb-2">
            {items.map((item, i) => (
                <React.Fragment key={i}>
                    <span>{item}</span>
                    {i < items.length - 1 && <span className="text-zinc-700">/</span>}
                </React.Fragment>
            ))}
        </div>
    );
};
