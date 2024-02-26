import Home from './components/home'
import Navbar from './components/navbar'
import Projects from './components/projects'
import About from './components/about'
import Soundcloud from './components/soundcloud-stats'
import RewindInfo from './components/RewindInfo'
import MusicRewind from './components/music'
import SongCredits from './components/song-credits'
import PortfolioInfo from './components/portfolio-info'
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
        <Route path='/rewind-info' element={<RewindInfo />} />
        <Route path='/music-rewind' element={<MusicRewind />} />
        <Route path='/song-credits' element={<SongCredits />} />
        <Route path='/portfolio-info' element={<PortfolioInfo />} />
        <Route path='/names' element={<Names />} />
        <Route path='/twitch-widget' element={<TwitchWidget />} />
      </Routes>
    </>

  );
}

export default App;
