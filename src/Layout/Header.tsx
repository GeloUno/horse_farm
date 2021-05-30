import React from 'react';
import { useHistory } from 'react-router-dom';
import { isMobile } from 'react-device-detect'
import '../App.css';
import backgroundImageHorse from '../assets/HorseBackground_ttbpbw/HorseBackground_ttbpbw_c_scale,w_1613.png';

import backgroundImageHorseMobile from '../assets/HorseBackground_ttbpbw/HorseBackground_ttbpbw_ar_1_1,c_fill,g_auto__c_scale,w_746.png';

const backgroundImage = () => {
  console.log(`isMobile`, isMobile)
  if (isMobile) {
    return `${backgroundImageHorseMobile}`
  } else {
    return `${backgroundImageHorse}`
  }
}
const styleBackgroundImage = {
  backgroundImage: `url(${backgroundImage()})`,
};

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <header data-cy='headerPage'>
      <div data-cy='headerBackgroundImage' className="image-header" style={styleBackgroundImage}>
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
