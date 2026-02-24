import React, { useState } from 'react';
import { ActivationSection as ActivationSectionType, ActivationKey } from '../types';
import { Copy, Check, ExternalLink } from 'lucide-react';

interface ActivationTableProps {
    data: ActivationSectionType[];
}

export const ActivationTable: React.FC<ActivationTableProps> = ({ data }) => {
    const [copiedKey, setCopiedKey] = useState<string | null>(null);

    const handleCopy = (key: string) => {
        navigator.clipboard.writeText(key);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
    };

    return (
        <div className="space-y-12">
            {data.map((section, idx) => (
                <div key={idx} className="animate-fade-in">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-[#576FEC] rounded-full"></span>
                        {section.title}
                    </h3>

                    <div className="w-full overflow-hidden border border-[#212121] rounded-xl shadow-sm bg-[#0d0d0d]">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#171717] border-b border-[#212121]">
                                        {section.headers.map((header, hIdx) => (
                                            <th
                                                key={hIdx}
                                                className="py-3.5 px-6 text-[11px] font-bold text-[#8e8ea0] uppercase tracking-wider"
                                            >
                                                {header.label}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#212121]">
                                    {section.items.map((item, itemIdx) => (
                                        <tr key={itemIdx} className="hover:bg-[#141414] transition-colors group">
                                            {section.headers.map((header, hIdx) => {
                                                const value = item[header.key as keyof ActivationKey];
                                                const isLinkColumn = header.key === 'ticketLink';
                                                const isFileLink = header.key === 'key' && value && (
                                                    value.startsWith('http') ||
                                                    value.includes('.ISO') ||
                                                    value.includes('.img') ||
                                                    value.includes('.pkg')
                                                );

                                                return (
                                                    <td key={hIdx} className="py-3.5 px-6">
                                                        {isLinkColumn && value ? (
                                                            <a
                                                                href={value.startsWith('http') ? value : '#'}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#576FEC] hover:text-[#7e91f3] transition-colors bg-[#576FEC]/10 px-3 py-1.5 rounded-lg"
                                                            >
                                                                Tải xuống
                                                                <ExternalLink size={13} />
                                                            </a>
                                                        ) : isFileLink ? (
                                                            <a
                                                                href={value!.startsWith('http') ? value! : '#'}
                                                                target={value!.startsWith('http') ? '_blank' : undefined}
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#576FEC] hover:text-[#7e91f3] transition-colors bg-[#576FEC]/10 px-3 py-1.5 rounded-lg"
                                                                onClick={(e) => {
                                                                    if (!value!.startsWith('http')) {
                                                                        e.preventDefault();
                                                                        alert(`Tải file: ${value}`);
                                                                    }
                                                                }}
                                                            >
                                                                {value}
                                                                <ExternalLink size={13} />
                                                            </a>
                                                        ) : (
                                                            <div className={`
                                                                flex items-center gap-2 text-sm font-medium transition-colors
                                                                ${header.key === 'product' ? 'text-white font-semibold group-hover:text-[#576FEC]' : 'text-[#8e8ea0] font-mono'}
                                                            `}>
                                                                <span>{value || '-'}</span>
                                                                {header.key === 'key' && value && !isFileLink && (
                                                                    <button
                                                                        onClick={() => handleCopy(value)}
                                                                        className="text-[#555] hover:text-[#576FEC] transition-colors"
                                                                        title="Sao chép"
                                                                    >
                                                                        {copiedKey === value ? <Check size={12} /> : <Copy size={12} />}
                                                                    </button>
                                                                )}
                                                            </div>
                                                        )}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
