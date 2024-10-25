export interface LyricLine {
  startTime: number;
  endTime: number;
  text: string;
  isHighlight?: boolean;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
  lyrics: LyricLine[];
}