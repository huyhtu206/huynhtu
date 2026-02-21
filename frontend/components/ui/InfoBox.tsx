import React from 'react';
import { Info, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface InfoBoxProps {
    type?: 'info' | 'warning' | 'tip';
    children: React.ReactNode;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ type = 'info', children }) => {
    const cfg = {
        info: { cls: 'bg-blue-500/[0.08] border-blue-500/25 text-blue-400', icon: <Info size={13} />, label: 'INFO' },
        warning: { cls: 'bg-amber-500/[0.08] border-amber-500/30 text-amber-400', icon: <AlertTriangle size={13} />, label: 'LƯU Ý' },
        tip: { cls: 'bg-green-500/[0.08] border-green-500/25 text-green-400', icon: <CheckCircle2 size={13} />, label: 'MẸO' },
    }[type];

    return (
        <div className={`border rounded-xl p-4 mb-5 ${cfg.cls.replace('text-', 'border-').split(' ')[0]} bg-${cfg.cls.split(' ')[0].replace('bg-', '')}`}>
            <div className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest mb-2 ${cfg.cls.split(' ').find(c => c.startsWith('text-'))}`}>
                {cfg.icon} {cfg.label}
            </div>
            <div className="text-[13px] text-zinc-300 leading-relaxed">{children}</div>
        </div>
    );
};
