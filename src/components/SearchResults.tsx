import React from 'react';
import { Play, Plus, Clock } from 'lucide-react';
import { useSong } from '../context/SongContext';

export default function SearchResults() {
  const { searchResults, setSelectedSong, addToQueue } = useSong();

  if (searchResults.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Search Results</h2>
      <div className="space-y-4">
        {searchResults.map((song) => (
          <div 
            key={song.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="flex">
              <div className="relative w-48 h-32">
                <img 
                  src={song.thumbnailUrl} 
                  alt={song.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                </div>
              </div>
              <div className="flex-1 p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">{song.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{song.artist}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{song.duration}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setSelectedSong(song)}
                    className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <Play className="w-5 h-5 fill-current" />
                  </button>
                  <button 
                    onClick={() => addToQueue(song)}
                    className="bg-gray-100 text-gray-800 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}