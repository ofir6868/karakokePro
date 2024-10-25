import React from 'react';
import { X, Music } from 'lucide-react';
import { useSong } from '../context/SongContext';

export default function QueueList() {
  const { queue, removeFromQueue } = useSong();

  if (queue.length === 0) {
    return (
      <div className="text-center py-8">
        <Music className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-500">No songs in queue</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {queue.map((song, index) => (
        <div 
          key={`${song.id}-${index}`}
          className="flex items-center justify-between bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <img 
              src={song.thumbnailUrl} 
              alt={song.title}
              className="w-12 h-12 rounded object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-800">{song.title}</h3>
              <p className="text-sm text-gray-600">{song.artist}</p>
            </div>
          </div>
          <button
            onClick={() => removeFromQueue(song.id)}
            className="p-1 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Remove from queue"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      ))}
    </div>
  );
}