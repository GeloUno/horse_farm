import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import { NavBar } from './components/Layout/NavBar';
import Attractions from './components/Layout/Attractions';
import TitleSection from './components/Layout/TitleSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <TitleSection title="Atrakcje" />
      <Attractions />
    </div>
  );
}

export default App;
