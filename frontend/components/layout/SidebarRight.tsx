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
        className="hidden xl:block w-64 bg-[#141414] border-l border-white/5 pt-8 pl-6 pr-4 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto scrollbar-hide"
    >
      <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4 opacity-80">
        Mục lục
      </h4>
      <div className="relative">
          {/* Active indicator line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5"></div>
          
          <ul className="space-y-3">
            {headings.map((heading) => (
              <li key={heading.id} className="pl-4 relative">
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
                    block text-[13px] leading-snug transition-colors duration-200
                    ${activeHeading === heading.id 
                      ? 'text-white font-medium' 
                      : 'text-zinc-500 hover:text-zinc-300'
                    }
                  `}
                >
                  {heading.text}
                </a>
                {/* Active dot */}
                {activeHeading === heading.id && (
                    <div className="absolute left-[-1px] top-1.5 w-[3px] h-[14px] bg-blue-500 rounded-r-full"></div>
                )}
              </li>
            ))}
          </ul>
      </div>
    </aside>
  );
};