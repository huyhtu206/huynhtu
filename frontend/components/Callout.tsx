import React from 'react';
import { Info, AlertTriangle, Lightbulb, Flame } from 'lucide-react';

interface CalloutProps {
  variant: 'info' | 'warning' | 'tip' | 'danger';
  title?: string;
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({ variant, title, children }) => {
  const styles = {
    info: {
      borderColor: 'border-[#2e2e2e]',
      bg: 'bg-[#111111]',
      iconColor: 'text-[#8e8ea0]',
      Icon: Info,
    },
    warning: {
      borderColor: 'border-yellow-500/20',
      bg: 'bg-yellow-500/5',
      iconColor: 'text-yellow-500',
      Icon: AlertTriangle,
    },
    tip: {
      borderColor: 'border-[#10a37f]/20',
      bg: 'bg-[#10a37f]/5',
      iconColor: 'text-[#10a37f]',
      Icon: Lightbulb,
    },
    danger: {
      borderColor: 'border-red-500/20',
      bg: 'bg-red-500/5',
      iconColor: 'text-red-500',
      Icon: Flame,
    },
  }[variant];

  const { Icon } = styles;

  return (
    <div className={`my-6 border ${styles.borderColor} ${styles.bg} p-4 rounded-md flex gap-4`}>
      <div className="flex-shrink-0 mt-0.5">
        <Icon size={18} className={styles.iconColor} />
      </div>
      <div className="flex-1">
        {title && <h5 className="font-semibold text-sm text-white mb-1">{title}</h5>}
        <div className="text-sm text-[#8e8ea0] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};