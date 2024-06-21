import React ,{useState} from 'react';
import NavigationBar from './components/NavigationBar';
import SpotifySearch from "./components/SpotifySearch";
import { Authenticator } from '@aws-amplify/ui-react';
import Profil from "../src/Screens/Profil"
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
Amplify.configure(config);

const App: React.FC = () => {
    const [showProfileForm, setShowProfileForm] = useState(false);

    const handleCreateProfile = () => {
        setShowProfileForm(true);
    };
  return (
      <Authenticator>
        {({ signOut, user }) => (
            <div>
                <NavigationBar onLogout={signOut} username={user?.username} onCreateProfile={handleCreateProfile} />
                {showProfileForm ? <Profil /> : <SpotifySearch />}
            </div>
        )}
      </Authenticator>
  );
};

export default App;