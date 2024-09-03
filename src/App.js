import React, { useState } from 'react';
import Menu from './components/Menu';
import Settings from './components/Settings';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import languages from './components/languages.json';

import Home from "./components/Home"
import Movies from './components/Movies';
import TVShows from './components/TVShows';
import Sports from './components/Sports';
import Live from './components/Live';

function App() {
  const [language, setLanguage] = useState('English');
  const [menuItems, setMenuItems] = useState({
    Home: 'Home',
    Movies: 'Movies',
    'TV Shows': 'TV Shows',
    Sports: 'Sports',
    Live: 'Live'
  });

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setMenuItems(languages[lang]);
  };

  return (
    <Router>
      <div className="App">
        <Menu menuItems={menuItems} language={language} />
        <Settings handleLanguageChange={handleLanguageChange} language={language} />
        <Routes>
  <Route exact path="/home" element={<Home />} />
  <Route exact path="/movies" element={<Movies />} />
  <Route exact path="/tv-shows" element={<TVShows />} />
  <Route exact path="/sports" element={<Sports />} />
  <Route exact path="/live" element={<Live />} />
</Routes>
      </div>
    </Router>
  );
}

export default App;