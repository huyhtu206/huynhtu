import React, { useEffect, useState } from 'react';

interface SidebarRightProps {
  headings: { id: string; text: string; level: number }[];
}

export const SidebarRight: React.FC<SidebarRightProps> = ({ headings }) => {
  const [activeHeading, setActiveHeading] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // Simple scroll spy logic
      let current = '';
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = heading.id;
        }
      }
      setActiveHeading(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  return (
    <aside
      className="hidden xl:block w-[200px] bg-[#000000] pt-6 pl-4 pr-4 h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto scrollbar-hide border-none"
    >
      <h4 className="text-[10px] font-semibold text-white uppercase tracking-wider mb-3">
        Trên trang này
      </h4>
      <div className="relative">
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id} className="relative">
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(heading.id);
                  if (el) {
                    window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
                    setActiveHeading(heading.id);
                  }
                }}
                className={`
                    block text-[12px] leading-snug transition-colors duration-200 pl-3 border-l-2
                    ${activeHeading === heading.id
                    ? 'border-[#426BF5] text-white'
                    : 'border-transparent text-[#8e8ea0] hover:text-[#426BF5]'
                  }
                  `}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};