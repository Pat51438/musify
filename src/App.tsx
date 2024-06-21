import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import SpotifySearch from "./components/SpotifySearch";
import { Authenticator } from '@aws-amplify/ui-react';
import Profile from "../src/Screens/Profil";
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
                <Router>
                    <div>
                        <NavigationBar onLogout={signOut} username={user?.username}  onCreateProfile={handleCreateProfile}/>
                        <Routes>
                            <Route path="/" element={<SpotifySearch />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </div>
                </Router>
            )}
        </Authenticator>
  );
};

export default App;