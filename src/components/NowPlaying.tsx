import React from 'react';
import { useSong } from '../context/SongContext';
import VideoPlayer from './VideoPlayer';
import { Music2 } from 'lucide-react';

export default function NowPlaying() {
  const { selectedSong } = useSong();

  if (!selectedSong) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <Music2 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
        <h2 className="text-xl font-semibold text-gray-600 mb-2">No Song Selected</h2>
        <p className="text-gray-500">Choose a song from the list below to start singing!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedSong.title}</h2>
        <p className="text-gray-600">{selectedSong.artist}</p>
      </div>
      
      <VideoPlayer 
        videoUrl={selectedSong.videoUrl}
        lyrics={selectedSong.lyrics}
      />
    </div>
  );
}