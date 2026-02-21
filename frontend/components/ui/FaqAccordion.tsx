import React, { useState } from 'react';
import { HelpCircle, ChevronUp, ChevronDown } from 'lucide-react';

interface FaqItem {
    question: string;
    answer: React.ReactNode;
}

interface FaqAccordionProps {
    faqs: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    if (!faqs || faqs.length === 0) return null;

    return (
        <div className="space-y-2 mb-10">
            {faqs.map((faq, i) => {
                const isOpen = openIdx === i;
                return (
                    <div key={i} className={`border rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? 'border-white/20 bg-[#111]' : 'border-white/[0.08] bg-[#0c0d0d] hover:border-white/15'}`}>
                        <button
                            className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                            onClick={() => setOpenIdx(isOpen ? null : i)}
                        >
                            <span className="flex items-center gap-3 text-[13px] font-semibold text-white leading-snug">
                                <HelpCircle size={14} className={`shrink-0 ${isOpen ? 'text-[#426DF6]' : 'text-zinc-600'}`} />
                                {faq.question}
                            </span>
                            {isOpen
                                ? <ChevronUp size={14} className="text-zinc-400 shrink-0" />
                                : <ChevronDown size={14} className="text-zinc-600 shrink-0" />}
                        </button>
                        {isOpen && (
                            <div className="px-5 pb-5 text-[13px] text-zinc-400 leading-relaxed border-t border-white/[0.06]">
                                <div className="pt-4">{faq.answer}</div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
