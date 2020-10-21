import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const NavBar = ({ loginModalToggle, sideBarToggle }) => {
  const isAutrenticeted = false;

  const guestLinks = (
    <Fragment>
      <li>
        <h2>
          <Link to="/" className="sm-hiden">
            Atrakcje
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link to="/opinia" className="sm-hiden">
            Opinia
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link to="/kontakt" className="sm-hiden">
            Kontakt
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link to="/galeria" className="sm-hiden">
            Galeria
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/login"
            className="sm-hiden accessToggleModalShow"
            onClick={(e) => loginModalToggle(e)}
          >
            <i className="fas fa-sign-in-alt"></i>
            Zaloguj
          </Link>
        </h2>
      </li>
    </Fragment>
  );
  const userLinks = (
    <Fragment>
      <li>
        <h2>
          <Link to="/planer" className="sm-hiden">
            Planer
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link to="/rezerwacja" className="sm-hiden">
            Rezerwacja
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link to="/galeria" className="sm-hiden">
            Galeria
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link to="/logout" className="sm-hiden">
            <i className="fas fa-sign-out-alt"></i>
            Wyloguj
          </Link>
        </h2>
      </li>
    </Fragment>
  );
  return (
    <nav className="navbar">
      <ul className="menu-left">
        <li>
          <h2>
            <Link to="/" onClick={(e) => sideBarToggle(e)}>
              <i className="fas fa-bars"></i>
            </Link>
          </h2>
        </li>
      </ul>
      <ul className="menu-right">
        <li>
          <h2>
            <Link to="/" className="sm-hiden">
              Główna
            </Link>
          </h2>
        </li>
        {<Fragment>{isAutrenticeted ? userLinks : guestLinks}</Fragment>}
      </ul>
    </nav>
  );
};

// NavBar.prorTypes = {
//   sideBarToggle: PropTypes.func.isRequired,
//   loginModalToggle: PropTypes.func.isRequired,
// };

export default NavBar;
