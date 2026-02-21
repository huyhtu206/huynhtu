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
      borderColor: 'border-white/20',
      bg: 'bg-white/5',
      iconColor: 'text-white',
      Icon: Info,
    },
    warning: {
      borderColor: 'border-yellow-500/30',
      bg: 'bg-yellow-500/5',
      iconColor: 'text-yellow-500',
      Icon: AlertTriangle,
    },
    tip: {
      borderColor: 'border-white/20',
      bg: 'bg-transparent',
      iconColor: 'text-white',
      Icon: Lightbulb,
    },
    danger: {
      borderColor: 'border-red-500/30',
      bg: 'bg-red-500/5',
      iconColor: 'text-red-500',
      Icon: Flame,
    },
  }[variant];

  const { Icon } = styles;

  return (
    <div className={`my-8 border ${styles.borderColor} ${styles.bg} p-6 flex gap-5`}>
      <div className="flex-shrink-0">
        <Icon size={18} className={styles.iconColor} />
      </div>
      <div className="flex-1">
        {title && <h5 className="font-bold text-sm text-white uppercase tracking-wider mb-2">{title}</h5>}
        <div className="text-sm text-text-muted leading-relaxed font-light">
          {children}
        </div>
      </div>
    </div>
  );
};