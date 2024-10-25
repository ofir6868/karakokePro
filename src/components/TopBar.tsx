import React from 'react';
import { Search, Mic2, Music2 } from 'lucide-react';
import { useSong } from '../context/SongContext';

export default function TopBar() {
  const { searchQuery, setSearchQuery } = useSong();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 h-16 flex items-center justify-between px-6 shadow-lg z-50">
      <div className="flex items-center space-x-2">
        <Music2 className="w-8 h-8 text-white animate-pulse" />
        <span className="text-2xl font-bold text-white">KaraokePro</span>
      </div>
      
      <form onSubmit={handleSubmit} className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for songs..."
            className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <Search className="absolute right-3 top-2.5 text-white/70 w-5 h-5" />
        </div>
      </form>

      <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 transition px-4 py-2 rounded-full text-white">
        <Mic2 className="w-5 h-5" />
        <span>Sing</span>
      </button>
    </div>
  );
}