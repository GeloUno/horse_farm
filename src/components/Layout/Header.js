import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import backgroundImageHorse from '../../assets/HorseBackground.png';

const styleBacgroundImage = {
  backgroundImage: `url(${backgroundImageHorse})`,
  // backgroundSize: 'cover',
  // backgroundPosition: ['40%', '50%'],
  //   height:'860px'
};

function Header() {
  return (
    <header>
      <div className="image-header" style={styleBacgroundImage}>
        <div className="text-header">
          <h1>Nauka jazdy konnej</h1>
          <Link to="/rezerwacja">
            <button type="submit" className="btn btn-withe-brown btn-header">
              Rezerwacja
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
