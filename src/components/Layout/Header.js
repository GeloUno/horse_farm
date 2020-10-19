import React from 'react';
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
          <button type="submit" className="btn btn-header">
            Rezerwacja
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
