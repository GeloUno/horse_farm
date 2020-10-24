import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { NavList } from './NavList';

const NavBar = ({
  loginModalToggle,
  sideBarToggle,
  isAuthenticated,
  setSectionPage,
}) => {
  return (
    <nav className="navbar">
      <ul className="menu-left">
        <li>
          <h2 onClick={(e) => sideBarToggle(e)}>
            <i className="fas fa-bars"></i>
          </h2>
        </li>
      </ul>
      <ul className="menu-right">
        {
          <NavList
            loginModalToggle={loginModalToggle}
            isAuthenticated={isAuthenticated}
            setSectionPage={setSectionPage}
          />
        }
      </ul>
    </nav>
  );
};

// NavBar.prorTypes = {
//   sideBarToggle: PropTypes.func.isRequired,
//   loginModalToggle: PropTypes.func.isRequired,
// };

export default NavBar;
