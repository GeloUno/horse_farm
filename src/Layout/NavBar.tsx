import React from 'react';
import { NavBarAndSideProps } from '../models/props/NavBarAndSideProps';
import { NavList } from './NavList';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar: React.FC<NavBarAndSideProps> = ({
  loginModalToggle,
  sideBarToggle,
  setSectionPage,
}) => {
  return (
    <nav className="navbar">
      <ul className="menu-left">
        <li>
          <h2 onClick={(e) => sideBarToggle(e)}>
            <FontAwesomeIcon icon={faBars} className={'iconBar'} />
          </h2>
        </li>
      </ul>
      <ul className="menu-right">
        {
          <NavList
            loginModalToggle={loginModalToggle}
            setSectionPage={setSectionPage}
          />
        }
      </ul>
    </nav>
  );
};
export default NavBar;
