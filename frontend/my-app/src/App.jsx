import {React, useState} from 'react';
import './app.scss'
import Topbar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import MyJorney from './components/MyJourney/MyJourney.jsx';
import Skills from './components/Skills/Skills.jsx';
import RateMyWebsite from './components/RateMyWebsite/RateMyWebsite.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';
import Intro from './components/Intro/Intro.jsx';
import Menu from './components/Menu/Menu.jsx';

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Home />
        <Intro />
        <MyJorney />
        <Skills />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
