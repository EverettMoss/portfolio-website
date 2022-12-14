import Home from './components/home'
import Navbar from './components/navbar'
import Projects from './components/projects'
import About from './components/about'
import Soundcloud from './components/soundcloud-stats'
import MusicRewind from './components/music'
import AlbumCredits from './components/album-credits'
import Dice from './components/dice'
import Names from './components/name-api'
import TwitchWidget from './components/twitch-widget'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/soundcloud' element={<Soundcloud />} />
        <Route path='/music-rewind' element={<MusicRewind />} />
        <Route path='/album-cedits' element={<AlbumCredits />} />
        <Route path='/dice' element={<Dice />} />
        <Route path='/names' element={<Names />} />
        <Route path='/twitch-widget' element={<TwitchWidget />} />
      </Routes>
    </>

  );
}

export default App;
