import React, { useState } from 'react';
import { NavItem } from '../../types';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface SidebarLeftProps {
    items: NavItem[];
    activeId: string;
    onNavigate: (id: string) => void;
    isOpenMobile: boolean;
}

export const SidebarLeft: React.FC<SidebarLeftProps> = ({ items, activeId, onNavigate, isOpenMobile }) => {
    // Helper to check if a node or its children contains the active ID
    const containsActiveId = (item: NavItem): boolean => {
        if (item.id === activeId) return true;
        if (item.pages) {
            return item.pages.some(child => containsActiveId(child));
        }
        return false;
    };

    // Recursively get all IDs that have sub-pages to initialize as expanded
    const getAllExpanded = (nodes: NavItem[]) => {
        let acc: Record<string, boolean> = {};
        nodes.forEach(node => {
            if (node.pages?.length) {
                // Expand if it's top level OR if it contains the active ID
                acc[node.id] = true;
                Object.assign(acc, getAllExpanded(node.pages));
            }
        });
        return acc;
    }

    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(() => getAllExpanded(items));

    const toggleExpand = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
    }

    const renderItem = (item: NavItem, depth = 0) => {
        const isActive = activeId === item.id;
        const hasChildren = item.pages && item.pages.length > 0;
        const isExpanded = expandedItems[item.id];
        const isParentActive = hasChildren && containsActiveId(item);

        // Styles based on depth and state
        let containerClass = "relative flex items-center justify-between cursor-pointer transition-colors duration-200 select-none group";
        let textClass = "font-medium text-[14px] truncate flex-1";

        if (depth === 0) {
            // Top Level Items (Headers)
            containerClass += " py-3 px-0"; // No background for root items usually
            if (isParentActive) {
                textClass += " text-[#e879f9]"; // Pink highlight for active parent
            } else {
                textClass += " text-zinc-200 hover:text-white";
            }
        } else {
            // Nested Items
            containerClass += " py-2.5 pr-3";
            // Indentation handled by padding-left dynamically

            if (isActive) {
                // Active Child Item styling (Dark background block)
                containerClass += " bg-[#262626] text-white";
                textClass += " text-white";
            } else {
                containerClass += " hover:bg-[#1a1a1a] text-zinc-400 hover:text-white";
                textClass += "";
            }
        }

        // Indentation style
        const indentStyle = { paddingLeft: depth === 0 ? '0px' : `${depth * 16}px` };

        return (
            <li key={item.id}>
                <div
                    className={containerClass}
                    style={indentStyle}
                    onClick={(e) => {
                        if (hasChildren) {
                            toggleExpand(item.id, e);
                        } else {
                            onNavigate(item.id);
                        }
                    }}
                >
                    <span className={textClass}>{item.title}</span>

                    {/* Chevron on the Right */}
                    {hasChildren && (
                        <span className={`text-zinc-500 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                            <ChevronDown size={16} />
                        </span>
                    )}
                </div>

                {/* Children */}
                {hasChildren && isExpanded && (
                    <ul className="flex flex-col">
                        {item.pages?.map(subItem => renderItem(subItem, depth + 1))}
                    </ul>
                )}
            </li>
        );
    }

    return (
        <aside
            className={`
        fixed inset-y-0 left-0 z-40 w-[280px] bg-[#141414] border-r border-white/5 flex flex-col transition-transform duration-300
        ${isOpenMobile ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:sticky md:top-16 md:h-[calc(100vh-4rem)]
      `}
        >
            <div className="flex-1 overflow-y-auto py-6 px-4 scrollbar-hide">
                <ul className="space-y-0.5">
                    {items.map((item, index) => (
                        <React.Fragment key={item.id}>
                            {renderItem(item)}
                        </React.Fragment>
                    ))}
                </ul>
            </div>

            {/* Footer / Credits area similar to image "Contact Us" */}
            <div className="px-4 py-6 mt-auto border-t border-white/5">
                <div className="text-[11px] text-zinc-600 font-mono mb-2">Developed by HuynhTu</div>
                <div className="flex items-center gap-4 text-zinc-500">
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                </div>
            </div>
        </aside>
    );
};