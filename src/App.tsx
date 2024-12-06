import React from 'react';
import { cursors } from './data/cursors';
import { CursorCard } from './components/CursorCard';
import { MousePointer2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-12 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MousePointer2 className="w-8 h-8 text-blue-500" />
          <h1 className="text-4xl font-bold">Cursor Library</h1>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of cool and animated cursors. 
          <br />
          Click "View Code" to get the HTML, CSS, and JavaScript code for each cursor.
        </p>
      </header>

      <main className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursors.map((cursor) => (
            <CursorCard key={cursor.id} cursor={cursor} />
          ))}
        </div>
      </main>

      <footer className="text-center py-8 text-gray-400">
        <p>Created by Dikshit Mahanot</p>
      </footer>
    </div>
  );
}

export default App;