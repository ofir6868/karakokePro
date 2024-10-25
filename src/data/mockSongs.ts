import type { Song } from '../types/song';

export const mockSongs: Song[] = [
  {
    id: '1',
    title: "Sweet Dreams",
    artist: "Eurythmics",
    thumbnailUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=200&fit=crop",
    duration: "3:45",
    videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    lyrics: [
      { startTime: 0, endTime: 2, text: "Sweet dreams are made of this" },
      { startTime: 2, endTime: 4, text: "Who am I to disagree?" },
      { startTime: 4, endTime: 6, text: "I travel the world and the seven seas" },
      { startTime: 6, endTime: 8, text: "Everybody's looking for something" },
      { startTime: 8, endTime: 10, text: "🎵 Musical Interlude 🎵" }
    ]
  },
  {
    id: '2',
    title: "Bohemian Rhapsody",
    artist: "Queen",
    thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=200&fit=crop",
    duration: "5:55",
    videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    lyrics: [
      { startTime: 0, endTime: 2, text: "Is this the real life?" },
      { startTime: 2, endTime: 4, text: "Is this just fantasy?" },
      { startTime: 4, endTime: 6, text: "Caught in a landslide" },
      { startTime: 6, endTime: 8, text: "No escape from reality" },
      { startTime: 8, endTime: 10, text: "Open your eyes..." }
    ]
  },
  {
    id: '3',
    title: "Test Song",
    artist: "Demo Artist",
    thumbnailUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
    duration: "0:10",
    videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    lyrics: [
      { startTime: 0, endTime: 2, text: "This is line one of the song" },
      { startTime: 2, endTime: 4, text: "Now we're at line number two" },
      { startTime: 4, endTime: 6, text: "Moving on to line three now" },
      { startTime: 6, endTime: 8, text: "Almost done with line four here" },
      { startTime: 8, endTime: 10, text: "Final line, number five!" }
    ]
  }
];