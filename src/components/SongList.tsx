import React from 'react';
import { Play, Clock, Plus } from 'lucide-react';
import { mockSongs } from '../data/mockSongs';
import { useSong } from '../context/SongContext';

export default function SongList() {
  const { setSelectedSong, addToQueue } = useSong();

  const handlePlay = (e: React.MouseEvent, song: typeof mockSongs[0]) => {
    e.stopPropagation();
    setSelectedSong(song);
  };

  const handleAddToQueue = (e: React.MouseEvent, song: typeof mockSongs[0]) => {
    e.stopPropagation();
    addToQueue(song);
  };

  return (
    <div className="mt-12 py-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Popular Songs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSongs.map((song) => (
          <div 
            key={song.id} 
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative">
              <img src={song.thumbnailUrl} alt={song.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button 
                  onClick={(e) => handlePlay(e, song)}
                  className="bg-red-500 text-white p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-red-600"
                >
                  <Play className="w-6 h-6 fill-current" />
                </button>
                <button 
                  onClick={(e) => handleAddToQueue(e, song)}
                  className="bg-white text-gray-800 p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-gray-100"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">{song.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{song.artist}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                <span>{song.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}