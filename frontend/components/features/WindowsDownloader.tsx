import React, { useState, useMemo } from 'react';
import { WindowsEdition } from '../../types';
import { Copy, Check, ChevronRight, Heart, Apple, Terminal } from 'lucide-react';

interface WindowsDownloaderProps {
    editions: WindowsEdition[];
}

export const WindowsDownloader: React.FC<WindowsDownloaderProps> = ({ editions }) => {
    const [activeTabId, setActiveTabId] = useState<string>(editions[0]?.id || '');
    const [copiedText, setCopiedText] = useState<string | null>(null);

    const currentEdition = useMemo(() =>
        editions.find(e => e.id === activeTabId),
        [editions, activeTabId]);

    if (!currentEdition) return null;

    // Detect Category based on Title
    const isWindows = editions[0]?.title.toLowerCase().includes('windows');
    const isMac = editions[0]?.title.toLowerCase().includes('macos');
    const isLinux = !isWindows && !isMac;

    const mainTitle = isWindows
        ? (editions[0].title.includes('10') ? 'Windows 10 Download' : editions[0].title.includes('7') ? 'Windows 7 Download' : 'Windows Download')
        : isMac
            ? 'macOS Download'
            : 'Linux Download';

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), 2000);
    };

    // Dynamic Content Generators
    const renderIntroList = () => {
        if (isMac) {
            return (
                <ul className="space-y-2 text-sm text-[#A1A1AA] list-disc pl-5 marker:text-zinc-600">
                    <li><span className="text-[#F472B6] font-medium cursor-pointer hover:underline">Installation Guide</span></li>
                    <li><span className="text-[#F472B6] font-medium cursor-pointer hover:underline">Create Bootable USB for macOS</span></li>
                    <li>These are original <strong>InstallAssistant.pkg</strong> or <strong>IPSW</strong> files directly from Apple servers.</li>
                    <li>Supports both Intel and Apple Silicon (M1/M2/M3) Macs unless specified otherwise.</li>
                    <li>For Hackintosh users, please check <span className="text-[#F472B6] font-medium cursor-pointer hover:underline">OpenCore compatibility</span> before updating.</li>
                </ul>
            );
        }
        if (isLinux) {
            return (
                <ul className="space-y-2 text-sm text-[#A1A1AA] list-disc pl-5 marker:text-zinc-600">
                    <li><span className="text-[#F472B6] font-medium cursor-pointer hover:underline">Distro Release Notes</span></li>
                    <li><span className="text-[#F472B6] font-medium cursor-pointer hover:underline">Verify ISO Checksum (SHA256)</span></li>
                    <li>All ISOs are fetched from official mirrors (Canonical, Fedora Project, etc.).</li>
                    <li>LTS (Long Term Support) versions are recommended for stability.</li>
                    <li>Use tools like <span className="text-[#F472B6] font-medium cursor-pointer hover:underline">Rufus</span> or <span className="text-[#F472B6] font-medium cursor-pointer hover:underline">BalenaEtcher</span> to flash these images.</li>
                </ul>
            );
        }
        // Default Windows
        return (
            <ul className="space-y-2 text-sm text-[#A1A1AA] list-disc pl-5 marker:text-zinc-600">
                <li><span className="text-[#F472B6] font-medium cursor-pointer hover:underline">FAQ</span></li>
                <li><span className="text-[#F472B6] font-medium cursor-pointer hover:underline">{mainTitle.split(' Download')[0]} updates info.</span></li>
                <li><span className="text-[#F472B6] font-medium cursor-pointer hover:underline">How can I verify that these files are genuine?</span></li>
                <li>The Consumer ISO includes all editions, such as Home, Pro, and Education. Business ISO includes Enterprise/Education.</li>
                <li>Microsoft provides monthly updated ISOs. However, you can <span className="text-[#F472B6] font-medium cursor-pointer hover:underline">manually update Windows ISO file</span> if needed.</li>
            </ul>
        );
    };

    const renderInfoBox = () => {
        const text = isMac ? "Info on Apple Servers" : isLinux ? "Info on Mirrors" : "Info on Official links";
        return (
            <div className="bg-[#0f242e] border-l-4 border-[#164e63] p-4 mb-8 rounded-r flex items-center gap-3">
                <div className="text-[#22d3ee]">
                    <ChevronRight size={18} fill="currentColor" />
                </div>
                <span className="text-[#22d3ee] font-medium text-sm">{text}</span>
            </div>
        );
    };

    return (
        <div className="w-full animate-fade-in font-sans text-[#EDEDED]">

            {/* Intro Section */}
            <div className="mb-8 space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-white mb-2">{editions[0]?.title || mainTitle}</h1>
                <p className="text-[#A1A1AA]">
                    {isMac ? "Download genuine macOS installers directly from Apple." :
                        isLinux ? "Official open-source Linux distribution images." :
                            "All download links lead to genuine files only."}
                </p>
                {renderIntroList()}
            </div>

            {/* Edition Selection Grid */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Download Links</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {editions.map(edition => {
                        const isActive = activeTabId === edition.id;
                        // Clean up titles for the boxes
                        let shortTitle = edition.title
                            .replace('Windows 11', '')
                            .replace('Windows 10', '')
                            .replace('Windows 7', '')
                            .replace('macOS', '')
                            .replace('Linux', '')
                            .replace('Ubuntu', '')
                            .trim();

                        if (!shortTitle) shortTitle = edition.title;

                        return (
                            <button
                                key={edition.id}
                                onClick={() => setActiveTabId(edition.id)}
                                className={`
                                flex flex-col items-center justify-center p-4 rounded-lg border text-center transition-all h-28 relative
                                ${isActive
                                        ? 'bg-[#F472B6] border-[#F472B6] text-white shadow-[0_0_15px_rgba(244,114,182,0.4)]'
                                        : 'bg-[#1a1a1a] border-white/5 hover:border-white/20 text-zinc-300'
                                    }
                            `}
                            >
                                <div className="font-bold text-[15px] leading-tight mb-1">
                                    {shortTitle}
                                </div>
                                <div className={`text-xs font-medium ${isActive ? 'text-white/90' : 'text-zinc-500'}`}>
                                    {edition.subTitle}
                                </div>

                                {/* Icons based on content */}
                                {isActive && isWindows && edition.id.includes('consumer') && <Heart size={14} className="mt-2 fill-white text-white" />}
                                {!isActive && isWindows && edition.id.includes('consumer') && <Heart size={14} className="mt-2 text-[#F472B6]" />}

                                {isMac && <Apple size={14} className={`mt-2 ${isActive ? 'text-white' : 'text-zinc-500'}`} />}
                                {isLinux && <Terminal size={14} className={`mt-2 ${isActive ? 'text-white' : 'text-zinc-500'}`} />}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Info Alert Box */}
            {renderInfoBox()}

            {/* Selected Edition Details Header */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-2">{currentEdition.title} {currentEdition.subTitle}</h3>
                <div className="text-sm text-[#A1A1AA] mb-4">
                    {currentEdition.buildVersion}
                </div>
                <p className="text-sm text-[#A1A1AA] max-w-4xl leading-relaxed">
                    {isWindows && "Microsoft will no longer provide monthly updated ISOs for older versions. "}
                    {isMac && "Ensure your Mac meets the system requirements before installing. Create a backup using Time Machine. "}
                    {isLinux && "Verify the SHA256 checksum after downloading to ensure file integrity. "}
                    {isWindows && <span className="text-[#F472B6] cursor-pointer hover:underline">Manually update instructions</span>}
                </p>
            </div>

            {/* Table */}
            <div className="w-full overflow-hidden border border-[#262626] rounded-t-lg">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-[#0c0d0d]">
                        <thead>
                            <tr className="bg-[#1A1A1A] border-b border-[#262626]">
                                <th className="py-3 px-4 text-sm font-bold text-zinc-300 border-r border-[#262626]">Language</th>
                                <th className="py-3 px-4 text-sm font-bold text-zinc-300 border-r border-[#262626] w-24">Arch</th>
                                <th className="py-3 px-4 text-sm font-bold text-zinc-300 border-r border-[#262626] w-28">Version</th>
                                <th className="py-3 px-4 text-sm font-bold text-zinc-300 border-r border-[#262626] w-32">SHA256</th>
                                <th className="py-3 px-4 text-sm font-bold text-zinc-300">Link</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#262626]">
                            {currentEdition.isoList.map((iso, idx) => (
                                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-3 px-4 text-sm text-zinc-300 border-r border-[#262626]">
                                        {iso.language}
                                    </td>
                                    <td className="py-3 px-4 text-sm text-zinc-300 border-r border-[#262626]">
                                        {iso.arch}
                                    </td>
                                    <td className="py-3 px-4 text-sm text-zinc-300 border-r border-[#262626]">
                                        {iso.version}
                                    </td>
                                    <td className="py-3 px-4 border-r border-[#262626]">
                                        <div className="relative group cursor-pointer w-24" onClick={() => handleCopy(iso.sha256)}>
                                            <div className="text-xs font-mono text-zinc-400 truncate hover:text-white transition-colors">
                                                {iso.sha256 ? `${iso.sha256.substring(0, 10)}...` : 'N/A'}
                                            </div>
                                            {iso.sha256 && (
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[#0c0d0d] transition-opacity">
                                                    {copiedText === iso.sha256 ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="text-zinc-500" />}
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">
                                        <a href={iso.link} className="block group relative">
                                            <code className="text-xs font-mono text-[#F472B6] break-all hover:underline decoration-[#F472B6]">
                                                {iso.filename}
                                            </code>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            {currentEdition.isoList.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="py-8 text-center text-sm text-zinc-500">
                                        No files available for this edition.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};