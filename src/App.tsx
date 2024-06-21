import React from 'react';
import NavigationBar from './components/NavigationBar';
import SpotifySearch from "./components/SpotifySearch";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
Amplify.configure(config);

const App: React.FC = () => {

  const onLogout = async () => {
    console.log('Previous button clicked');
  };

  return (
      <Authenticator>
        {
           <div>
              <NavigationBar onLogout={onLogout} />
              <SpotifySearch />
            </div>
        }
      </Authenticator>
  );
};

export default App;