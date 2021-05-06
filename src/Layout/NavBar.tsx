import React from 'react';
import { NavBarAndSideProps } from '../models/props/NavBarAndSideProps';
import { NavList } from './NavList';
import '../App.css';

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
            <i className="fas fa-bars"></i>
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
