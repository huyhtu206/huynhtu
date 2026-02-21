import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface AccordionItem {
    question: string;
    answer: string;
    open?: boolean; // Initial state
}

interface AccordionProps {
    items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
    // Track open state for each item by index
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4 mb-10">
            {items.map((item, i) => {
                const isOpen = openIndex === i || (item.open && openIndex === null); // Allow initial open state if no interaction yet
                return (
                    <div key={i} className="rounded-lg border border-white/5 bg-[#0c0d0d] overflow-hidden transition-all duration-300">
                        <button
                            onClick={() => toggle(i)}
                            className="w-full px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors text-left focus:outline-none"
                        >
                            <span className="text-sm font-bold text-white tracking-tight">{item.question}</span>
                            <ChevronDown
                                size={16}
                                className={`text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            />
                        </button>
                        <div
                            className={`
                                overflow-hidden transition-all duration-300 ease-in-out
                                ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
                            `}
                        >
                            <div className="px-6 pb-6 pt-0 text-[13px] text-zinc-400 border-t border-white/5 mt-2 pt-4 leading-relaxed prose prose-invert max-w-none">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {item.answer}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
