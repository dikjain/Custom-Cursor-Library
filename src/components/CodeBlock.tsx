import React, { useState } from 'react';
import { Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="absolute right-2 top-2">
        <button
          onClick={handleCopy}
          className="p-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
      <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
        <code className="text-sm text-gray-100">{code}</code>
      </pre>
      {copied && (
        <div className="absolute right-2 top-12 bg-green-500 text-white px-2 py-1 rounded text-sm">
          Copied!
        </div>
      )}
    </div>
  );
}