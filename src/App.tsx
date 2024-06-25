import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import NavigationBar from './components/NavigationBar';
import SpotifySearch from './components/SpotifySearch';
import Profile from './Screens/Profil';
import './i18n';
const App: React.FC = () => {
    return (
        <Authenticator>
            {({ signOut }) => (
                <Router>
                    <div>
                        <NavigationBar onLogout={signOut}  />
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