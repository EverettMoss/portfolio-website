import Home from './components/home'
import Navbar from './components/navbar'
import Projects from './components/projects'
import Contact from './components/contact'
import Soundcloud from './components/soundcloud-stats'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<Contact />} />
        <Route path='/soundcloud' element={<Soundcloud />} />
      </Routes>
    </>

  );
}

export default App;
