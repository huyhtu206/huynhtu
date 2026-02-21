import React, { useState, useEffect } from 'react';
import { WindowsMenuItem, OfficeVersion, OfficeLanguage } from '../../types';
import { OFFICE_LANGUAGES, OFFICE_VERSIONS } from '../../constants_data/index';
import { api } from '../../services/api';
import { FaqAccordion } from '../ui/FaqAccordion';
import { WindowsVersionView } from './windows/WindowsVersionView';
import { OfficeC2RView } from './windows/OfficeC2RView';
import { OfficeMacView } from './windows/OfficeMacView';

interface WindowsMenuProps {
  menuItems?: WindowsMenuItem[];
  type?: 'windows' | 'office' | 'office-mac';
  onSelect?: (category: string, subcategory?: string, item?: string) => void;
  officeVersions?: OfficeVersion[];
  officeLanguages?: OfficeLanguage[];
}

export const WindowsMenu: React.FC<WindowsMenuProps> = ({
  menuItems = [],
  type = 'windows',
  onSelect,
  officeVersions = OFFICE_VERSIONS,
  officeLanguages = OFFICE_LANGUAGES,
}) => {
  const [menuData, setMenuData] = useState<WindowsMenuItem[]>(menuItems);
  const [loading, setLoading] = useState(false);

  // The active OS category (always the first – individual version pages pass 1 item)
  const activeCategory = menuData[0];

  useEffect(() => {
    if (type === 'windows' && menuItems.length === 0) {
      setLoading(true);
      api.getWindowsMenu().then(d => { setMenuData(d); setLoading(false); }).catch(() => setLoading(false));
    }
  }, [type, menuItems.length]);

  if (loading || (!activeCategory && type === 'windows')) {
    return (
      <div className="flex items-center gap-3 text-zinc-500 py-12">
        <div className="w-4 h-4 rounded-full border-2 border-zinc-600 border-t-white animate-spin" />
        <span className="text-sm">Đang tải dữ liệu...</span>
      </div>
    );
  }

  return (
    <div className="w-full font-sans text-[#EDEDED]">
      {/* ── FAQ Section (at the Top) ── */}
      {activeCategory?.faqs && activeCategory.faqs.length > 0 && (
        <FaqAccordion faqs={activeCategory.faqs.map(f => ({ question: f.question, answer: f.answer as React.ReactNode }))} />
      )}

      {/* ── View Dispatcher ── */}
      {type === 'office-mac' ? (
        <OfficeMacView officeVersions={officeVersions} />
      ) : type === 'office' ? (
        <OfficeC2RView officeVersions={officeVersions} officeLanguages={officeLanguages} />
      ) : activeCategory ? (
        <WindowsVersionView activeCategory={activeCategory} />
      ) : null}
    </div>
  );
};
