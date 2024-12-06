import React, { useState } from 'react';
import { CursorConfig } from '../types/cursor';
import { CursorPreview } from './CursorPreview';
import { CodeBlock } from './CodeBlock';
import { Code } from 'lucide-react';

interface CursorCardProps {
  cursor: CursorConfig;
}

export function CursorCard({ cursor }: CursorCardProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <CursorPreview cursor={cursor} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{cursor.name}</h3>
        <p className="text-gray-400 mb-4">{cursor.description}</p>
        <button
          onClick={() => setShowCode(!showCode)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Code className="w-4 h-4" />
          {showCode ? 'Hide Code' : 'View Code'}
        </button>
        
        {showCode && (
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-2">HTML</h4>
              <CodeBlock code={cursor.html} language="html" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">CSS</h4>
              <CodeBlock code={cursor.css} language="css" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">JavaScript</h4>
              <CodeBlock code={cursor.giveCode && cursor.giveCode.trim() !== '' ? cursor.giveCode : '// No JavaScript code'} language="javascript" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}