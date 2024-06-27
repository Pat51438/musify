import React , { Suspense }from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import NavigationBar from './components/NavigationBar';
import SpotifySearch from './components/SpotifySearch';
import { UserProvider } from './components/UserContext';
import Profile from './Screens/Profil';
import './i18n';
const App: React.FC = () => {
    return (
        <Authenticator>
            {({ signOut }) => (
                <UserProvider>
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <div>
                            <NavigationBar onLogout={signOut} />
                            <Routes>
                                <Route path="/" element={<SpotifySearch />} />
                                <Route path="/profile" element={<Profile />} />
                            </Routes>
                        </div>
                    </Suspense>
                </Router>
                </UserProvider>
            )}
        </Authenticator>
    );
};

export default App;