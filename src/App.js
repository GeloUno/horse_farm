import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import { NavBar } from './components/Layout/NavBar';
import Attractions from './components/Layout/Attractions';
import TitleSection from './components/Layout/TitleSection';
import Opinions from './components/Layout/Opinions';
import Contact from './components/Layout/Contact';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
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
