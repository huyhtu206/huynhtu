import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { NavItem } from '../types';

interface SidebarLeftProps {
    items: NavItem[];
    activeId: string;
    onNavigate: (id: string) => void;
    isOpenMobile: boolean;
}

export const SidebarLeft: React.FC<SidebarLeftProps> = ({ items, activeId, onNavigate, isOpenMobile }) => {
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
        'windows-office': true // Default expanded for main section
    });

    const toggleExpand = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setExpandedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const renderItem = (item: NavItem, depth = 0) => {
        const hasChildren = item.pages && item.pages.length > 0;
        const isExpanded = expandedItems[item.id];
        const isActive = activeId === item.id;

        if (item.isSection) {
            return (
                <li key={item.id} className="mt-8 mb-4 px-4">
                    <span className="text-[14px] font-bold text-[#FFFFFF] tracking-tight select-none">
                        {item.title}
                    </span>
                </li>
            );
        }

        const containerClass = `
      flex items-center justify-between px-4 py-2 rounded-md cursor-pointer transition-all duration-200 group
      ${isActive ? 'text-[#FFFFFF]' : 'text-[#A1A1A1] hover:text-[#FFFFFF]'}
      ${depth > 0 ? 'ml-4' : ''}
    `;

        const textClass = `text-[14px] ${isActive ? 'font-medium' : 'font-normal'} transition-colors`;

        return (
            <li key={item.id}>
                <div className={containerClass} onClick={() => onNavigate(item.id)}>
                    <span className={textClass}>{item.title}</span>
                    {hasChildren && (
                        <button
                            onClick={(e) => toggleExpand(item.id, e)}
                            className="p-1 rounded transition-colors"
                        >
                            <ChevronDown
                                size={16}
                                className={`text-[#525252] group-hover:text-[#FFFFFF] transition-transform duration-200 ${isExpanded ? '' : '-rotate-90'}`}
                            />
                        </button>
                    )}
                </div>
                {hasChildren && (
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <ul className="space-y-1">
                            {item.pages!.map((child) => renderItem(child, depth + 1))}
                        </ul>
                    </div>
                )}
            </li>
        );
    };

    return (
        <aside className={`
      ${isOpenMobile ? 'translate-x-0' : '-translate-x-full'}
      md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-[240px] 
      bg-[#000000] border-none flex flex-col transition-transform duration-300 ease-in-out
      h-[calc(100vh-56px)] overflow-y-auto sticky top-[56px] scrollbar-hide
    `}>
            <div className="flex-1 py-4 px-3">
                <ul className="space-y-0.5">
                    {items.map((item) => renderItem(item))}
                </ul>
            </div>
        </aside>
    );
};