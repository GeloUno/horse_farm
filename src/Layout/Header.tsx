import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import backgroundImageHorse from '../assets/HorseBackground_ttbpbw/HorseBackground_ttbpbw_c_scale,w_1613.png';

const styleBacgroundImage = {
  backgroundImage: `url(${backgroundImageHorse})`,
  // backgroundSize: 'cover',
  // backgroundPosition: ['40%', '50%'],
  //   height:'860px'
};

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <header data-cy='headerPage'>
      <div data-cy='headerBackgroundImage' className="image-header" style={styleBacgroundImage}>
        <div className="text-header" data-cy='headerText'>
          <h1>Nauka jazdy konnej</h1>
          <button data-cy='headerButton'
            type="submit"
            className="btn btn-withe-brown btn-header"
            onClick={() => {
              history.push('/rezerwacja');
            }}
          >
            Rezerwacja
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
