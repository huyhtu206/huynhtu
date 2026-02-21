import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderCode = () => {
    return code.split('\n').map((line, i) => (
      <div key={i} className="table-row">
        <span className="table-cell text-right pr-4 select-none text-text-dim/30 text-xs w-8">
          {i + 1}
        </span>
        <span className="table-cell pl-4 whitespace-pre font-mono text-xs sm:text-sm text-text-muted">
          {applySimpleHighlighting(line, language)}
        </span>
      </div>
    ));
  };

  return (
    <div className="my-8 border border-border bg-[#0c0d0d] relative group">
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={handleCopy}
          className="p-1.5 hover:bg-white/10 transition-colors text-text-dim hover:text-white focus:outline-none border border-transparent hover:border-border/50"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} className="text-white" /> : <Copy size={14} />}
        </button>
      </div>
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-[#050505]">
        <span className="font-mono text-[10px] text-text-dim uppercase tracking-wider">{language}</span>
      </div>
      <div className="p-0 overflow-x-auto">
        <div className="table w-full py-4 px-2">
          {renderCode()}
        </div>
      </div>
    </div>
  );
};

const applySimpleHighlighting = (text: string, lang: string) => {
  // Monochromatic/High Contrast Theme for x.ai feel
  if (lang === 'bash') {
    if (text.trim().startsWith('#')) return <span className="text-text-dim italic">{text}</span>;
    if (text.trim().startsWith('npm')) {
        const parts = text.split(' ');
        return (
            <>
                <span className="text-white font-bold">{parts[0]}</span>{' '}
                <span className="text-text-muted">{parts.slice(1).join(' ')}</span>
            </>
        )
    }
    return <span className="text-white">{text}</span>;
  }
  
  const keywords = ['import', 'const', 'let', 'var', 'async', 'await', 'return', 'function', 'if', 'else', 'from', 'export', 'default', 'interface', 'type'];
  const textParts = text.split(/(\s+|[(){}[\].,;])/g);

  return textParts.map((part, index) => {
    if (keywords.includes(part)) {
      return <span key={index} className="text-white font-bold">{part}</span>;
    }
    if (part.startsWith("'") || part.startsWith('"') || part.startsWith("`")) {
      return <span key={index} className="text-[#A1A1AA]">{part}</span>;
    }
    if (part.match(/^[A-Z][a-zA-Z0-9]*$/) && part.length > 1) {
       return <span key={index} className="text-white">{part}</span>;
    }
    if (!isNaN(Number(part)) && part.trim() !== '') {
        return <span key={index} className="text-white font-bold">{part}</span>;
    }
    return <span key={index} className="text-text-muted">{part}</span>;
  });
};