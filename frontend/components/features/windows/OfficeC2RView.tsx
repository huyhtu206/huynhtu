import React, { useState } from 'react';
import { OfficeVersion, OfficeLanguage } from '../../../types';
import { Globe, FileDown } from 'lucide-react';
import { DevToast } from '../../layout/Header';

interface OfficeC2RViewProps {
    officeVersions: OfficeVersion[];
    officeLanguages: OfficeLanguage[];
}

export const OfficeC2RView: React.FC<OfficeC2RViewProps> = ({ officeVersions, officeLanguages }) => {
    const [selectedOfficeVersionId, setSelectedOfficeVersionId] = useState<string>(officeVersions[0]?.id || '');
    const [selectedLanguageCode, setSelectedLanguageCode] = useState<string>('en-us');
    const [devToast, setDevToast] = useState(false);

    const selectedOfficeVersion = officeVersions.find(v => v.id === selectedOfficeVersionId);
    const isMSI = selectedOfficeVersionId.startsWith('msi');

    const handleDownload = (e: React.MouseEvent) => {
        e.preventDefault();
        setDevToast(true);
    };

    return (
        <>
            <div className="animate-in fade-in duration-300">
                {isMSI && (
                    <div className="px-5 py-3 bg-[#141414] border border-amber-500/20 rounded mb-6 text-[13px] text-zinc-500">
                        <span className="text-amber-500 font-bold mr-2 uppercase tracking-tighter">Lưu ý:</span>
                        Các phiên bản MSI đã ngừng nhận bản cập nhật bảo mật.
                    </div>
                )}

                {/* Language Selector */}
                <div className="mb-8 p-6 bg-[#0E0E0E] border border-white/5 rounded">
                    <h3 className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Globe size={14} /> Cấu hình ngôn ngữ
                    </h3>
                    <div className="flex flex-wrap items-center gap-4">
                        <select
                            value={selectedLanguageCode}
                            onChange={e => setSelectedLanguageCode(e.target.value)}
                            className="h-10 bg-[#141414] border border-white/10 text-white px-4 rounded text-[13px] appearance-none cursor-pointer hover:border-white/20 transition-all focus:outline-none font-bold min-w-[200px]"
                        >
                            {officeLanguages.map(lang => (
                                <option key={lang.code} value={lang.code}>{lang.name} [{lang.code}]</option>
                            ))}
                        </select>
                        <div className="flex flex-wrap gap-1">
                            {['en-us', 'vi-vn', 'fr-fr', 'de-de', 'zh-cn'].map(code => (
                                <button key={code} onClick={() => setSelectedLanguageCode(code)}
                                    className={`px-3 py-1.5 rounded text-[11px] font-bold border transition-all ${selectedLanguageCode === code ? 'bg-[#5771ED] border-[#5771ED] text-white' : 'border-white/5 text-zinc-600 hover:text-white hover:border-white/20'}`}>
                                    {code}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Version Selection */}
                <div className="mb-10">
                    <h3 className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <FileDown size={14} /> Chọn phiên bản Office
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {officeVersions.map(ver => (
                            <button key={ver.id} onClick={() => setSelectedOfficeVersionId(ver.id)}
                                className={`px-4 py-2 rounded border text-[12px] font-bold transition-all ${selectedOfficeVersionId === ver.id
                                    ? (isMSI ? 'bg-amber-600 border-amber-600 text-white' : 'bg-[#5771ED] border-[#5771ED] text-white')
                                    : 'bg-transparent border-white/10 text-zinc-500 hover:text-white hover:border-white/20'}`}>
                                {ver.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Office Table */}
                {selectedOfficeVersion && (
                    <div className="overflow-hidden border border-white/10 rounded bg-[#0E0E0E]">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#141414] border-b border-white/10">
                                        <th className="py-3 px-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Sản phẩm</th>
                                        <th className="py-3 px-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Ứng dụng đi kèm</th>
                                        <th className="py-3 px-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest text-center">x64</th>
                                        <th className="py-3 px-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest text-center">x32</th>
                                        <th className="py-3 px-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest text-center">Offline</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {selectedOfficeVersion.products.map(product => (
                                        <tr key={product.id} className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="py-4 px-6 text-[13px] font-bold text-zinc-300">
                                                {product.name}
                                            </td>
                                            <td className="py-4 px-6 text-[11px] text-zinc-600 font-medium max-w-[200px]">
                                                {product.includedApps.join(', ')}
                                            </td>
                                            {(['online_x64', 'online_x86', 'offline'] as const).map(lk => {
                                                const link = product.links[lk];
                                                const ok = link && link !== 'NA';
                                                return (
                                                    <td key={lk} className="py-4 px-4 text-center">
                                                        {ok
                                                            ? <button onClick={handleDownload} className="text-[#5771ED] hover:text-white text-[12px] font-bold transition-colors">
                                                                Download
                                                            </button>
                                                            : <span className="text-zinc-800 text-[11px] font-bold">NA</span>}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
            <DevToast visible={devToast} onClose={() => setDevToast(false)} />
        </>
    );
};
