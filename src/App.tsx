import React from 'react';
import TopBar from './components/TopBar';
import SongList from './components/SongList';
import { SongProvider } from './context/SongContext';
import NowPlaying from './components/NowPlaying';
import QueueList from './components/QueueList';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <SongProvider>
      <div className="min-h-screen bg-gray-50">
        <TopBar />
        <main className="container mx-auto px-4 pt-24 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <NowPlaying />
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-4">
                <h2 className="text-xl font-semibold mb-4">Up Next</h2>
                <QueueList />
              </div>
            </div>
          </div>
          <SearchResults />
          <SongList />
        </main>
      </div>
    </SongProvider>
  );
}

export default App;