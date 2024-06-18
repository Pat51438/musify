import React, { useState, useEffect } from 'react';
import MusicPlayer from './components/MusicPlayer';
import PlaylistComponent from './components/Playlist';
import { DataStore } from '@aws-amplify/datastore';
import { Song } from './models';

const App: React.FC = () => {
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurrentSong = async () => {
      const songs = await DataStore.query(Song);
      if (songs.length > 0) {
        setCurrentSongId(songs[0].id); // Set the first song ID as the current song
      } else {
        setCurrentSongId(null); // No song available
      }
    };

    fetchCurrentSong();
  }, []);

  const handlePlay = () => {
    console.log('Play button clicked');
  };

  const handlePause = () => {
    console.log('Pause button clicked');
  };

  const handleNext = () => {
    console.log('Next button clicked');
  };

  const handlePrev = () => {
    console.log('Previous button clicked');
  };

  return (
      <div>
        <h1>Music Player</h1>
        <MusicPlayer
            songId={currentSongId}
            onPlay={handlePlay}
            onPause={handlePause}
            onNext={handleNext}
            onPrev={handlePrev}
        />
        <h2>Playlist</h2>
        <PlaylistComponent />
      </div>
  );
};

export default App;
