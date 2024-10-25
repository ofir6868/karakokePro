import React, { createContext, useContext, useState } from 'react';
import type { Song } from '../types/song';
import { mockSongs } from '../data/mockSongs';

interface SongContextType {
  selectedSong: Song | null;
  setSelectedSong: (song: Song) => void;
  queue: Song[];
  addToQueue: (song: Song) => void;
  removeFromQueue: (songId: string) => void;
  playNext: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: Song[];
}

const SongContext = createContext<SongContextType | undefined>(undefined);

export function SongProvider({ children }: { children: React.ReactNode }) {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [queue, setQueue] = useState<Song[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addToQueue = (song: Song) => {
    setQueue(current => [...current, song]);
    // Autoplay if no song is currently playing
    if (!selectedSong) {
      setSelectedSong(song);
    }
  };

  const removeFromQueue = (songId: string) => {
    setQueue(current => current.filter(song => song.id !== songId));
  };

  const playNext = () => {
    if (queue.length > 0) {
      const nextSong = queue[0];
      setSelectedSong(nextSong);
      setQueue(current => current.slice(1));
    }
  };

  const searchResults = mockSongs.filter(song => 
    searchQuery && (
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <SongContext.Provider value={{ 
      selectedSong, 
      setSelectedSong, 
      queue, 
      addToQueue, 
      removeFromQueue,
      playNext,
      searchQuery,
      setSearchQuery,
      searchResults
    }}>
      {children}
    </SongContext.Provider>
  );
}

export function useSong() {
  const context = useContext(SongContext);
  if (context === undefined) {
    throw new Error('useSong must be used within a SongProvider');
  }
  return context;
}