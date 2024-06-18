// src/App.tsx
import React, { useState, useEffect } from 'react';
import MusicPlayer from './components/MusicPlayer';
import PlaylistComponent from './components/Playlist';
import {DataStore} from "@aws-amplify/datastore";
import {Amplify} from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
Amplify.configure(amplifyconfig);
import {Song} from "./models";

const App: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  useEffect(() => {
    const fetchCurrentSong = async () => {
      const songs = await DataStore.query(Song);
      setCurrentSong(songs[0]); // Set the first song as the current song
    };

    fetchCurrentSong();
  }, []);

  const handlePlay = () => {
    console.log('Play button clicked');
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
        {currentSong && (
            <MusicPlayer song={currentSong} onPlay={handlePlay} onNext={handleNext} onPrev={handlePrev} />
        )}
        <h2>Playlist</h2>
        <PlaylistComponent />
      </div>
  );
};

export default App;
