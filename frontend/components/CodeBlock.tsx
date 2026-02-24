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
      <div key={i} className="flex leading-6">
        <span className="w-8 text-right pr-4 select-none text-[#525252] font-mono text-xs tabular-nums">
          {i + 1}
        </span>
        <span className="flex-1 whitespace-pre font-mono text-[13px] text-[#e5e5e5]">
          {applySimpleHighlighting(line, language)}
        </span>
      </div>
    ));
  };

  return (
    <div className="my-6 bg-[#000000] border border-[#212121] relative group rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-[#0d0d0d] border-b border-[#212121]">
        <span className="font-mono text-[11px] text-[#8e8ea0] tracking-wider">{language}</span>
        <button
          onClick={handleCopy}
          className="p-1 text-[#8e8ea0] hover:text-white transition-colors focus:outline-none"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} className="text-white" /> : <Copy size={14} />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <div className="min-w-fit">
          {renderCode()}
        </div>
      </div>
    </div>
  );
};

const applySimpleHighlighting = (text: string, lang: string) => {
  if (lang === 'bash') {
    if (text.trim().startsWith('#')) return <span className="text-[#525252] italic">{text}</span>;
    return <span className="text-[#e5e5e5]">{text}</span>;
  }

  const keywords = ['import', 'const', 'let', 'var', 'async', 'await', 'return', 'function', 'if', 'else', 'from', 'export', 'default', 'interface', 'type'];
  const textParts = text.split(/(\s+|[(){}[\].,;])/g);

  return textParts.map((part, index) => {
    if (keywords.includes(part)) {
      return <span key={index} className="text-[#569cd6]">{part}</span>; // VSCode-ish blue
    }
    if (part.startsWith("'") || part.startsWith('"') || part.startsWith("`")) {
      return <span key={index} className="text-[#ce9178]">{part}</span>; // Orange-ish for strings
    }
    if (part.match(/^[A-Z][a-zA-Z0-9]*$/) && part.length > 1) {
      return <span key={index} className="text-[#4ec9b0]">{part}</span>; // Teal for types
    }
    if (!isNaN(Number(part)) && part.trim() !== '') {
      return <span key={index} className="text-[#b5cea8]">{part}</span>; // Greenish for numbers
    }
    return <span key={index} className="text-[#e5e5e5]">{part}</span>;
  });
};