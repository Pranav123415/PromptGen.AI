import React from 'react';
import { Sparkles, BookOpen, History } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-gray-900 to-gray-800 border-b border-blue-500/20 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-8 h-8 text-blue-400" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            PromptForge
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <button className="text-gray-300 hover:text-white flex items-center space-x-2 transition-colors">
            <BookOpen className="w-4 h-4" />
            <span>Learn</span>
          </button>
          <button className="text-gray-300 hover:text-white flex items-center space-x-2 transition-colors">
            <History className="w-4 h-4" />
            <span>History</span>
          </button>
        </nav>
      </div>
    </header>
  );
}