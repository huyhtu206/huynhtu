import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AccordionItem } from '../types';

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 mb-10 max-w-3xl">
      {items.map((item, index) => (
        <div key={index} className="border border-[#212121] rounded-xl bg-[#0d0d0d] overflow-hidden transition-all hover:border-[#333]">
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-5 text-left transition-colors"
          >
            <span className="font-semibold text-white text-[15px] tracking-tight">{item.question}</span>
            <div className={`text-[#8e8ea0] transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
              <ChevronDown size={18} />
            </div>
          </button>

          {openIndex === index && (
            <div className="px-5 pb-5 text-[14px] text-[#8e8ea0] leading-relaxed animate-fade-in">
              <div dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
