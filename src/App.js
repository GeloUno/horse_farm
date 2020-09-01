import React, { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import { NavBar } from './components/Layout/NavBar';
import Attractions from './components/Layout/Attractions';
import TitleSection from './components/Layout/TitleSection';
import Opinions from './components/Layout/Opinions';
import Contact from './components/Layout/Contact';
import Footer from './components/Layout/Footer';
import SideBar from './components/Users/SideBar';

function App() {
  const [sideBarShow, setSideBarShow] = useState(false);

  const sideBarToggle = (e) => {
    e.preventDefault();
    if (!e.target.classList.contains('sideBarBody')) {
      setSideBarShow(!sideBarShow);
    }
  };

  return (
    <div className="App">
      <NavBar sideBarToggle={sideBarToggle} />
      {sideBarShow && <SideBar sideBarToggle={sideBarToggle} />}
      <Header />
      <TitleSection title="Atrakcje" />
      <Attractions />
      <TitleSection title="Opinia" />
      <Opinions opinion={true} />
      <TitleSection title="kontakt" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
