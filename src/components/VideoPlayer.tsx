import React, { useState, useEffect, useRef } from 'react';
import type { LyricLine } from '../types/song';
import { useSong } from '../context/SongContext';

interface VideoPlayerProps {
  videoUrl: string;
  lyrics: LyricLine[];
}

export default function VideoPlayer({ videoUrl, lyrics }: VideoPlayerProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { selectedSong, playNext } = useSong();

  const currentLyrics = lyrics.filter(
    line => currentTime >= line.startTime && currentTime <= line.endTime
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset video when song changes
    video.currentTime = 0;
    setCurrentTime(0);
    setIsPlaying(false);

    const timeUpdate = () => setCurrentTime(video.currentTime);
    const handleEnded = () => {
      playNext();
    };

    video.addEventListener('timeupdate', timeUpdate);
    video.addEventListener('ended', handleEnded);
    
    return () => {
      video.removeEventListener('timeupdate', timeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [selectedSong, playNext]);

  return (
    <div className="relative bg-black rounded-xl overflow-hidden">
      <video
        ref={videoRef}
        className="w-full aspect-video"
        src={videoUrl}
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex flex-col items-center">
          {currentLyrics.map((line, index) => (
            <div
              key={index}
              className="text-2xl font-bold text-white text-center mb-2 animate-fade-in"
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              {line.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}