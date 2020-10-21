import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ sideBarToggle }) => {
  return (
    <div
      className="modalBackground"
      onClick={(e) => {
        sideBarToggle(e);
      }}
    >
      <nav className="sideBarBody">
        <i
          className="far fa-times-circle closeModalButton"
          onClick={(e) => {
            sideBarToggle(e);
          }}
        ></i>
        <div className="userSideBar">
          <img
            className="photoUser"
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="zdjęcie użytkownika"
          />
        </div>
        <div className="userNickAndPoints">
          <p>
            nick:<strong>{'Ami'}</strong>
          </p>
          <p>
            karnety:<strong>{'15'}</strong>
          </p>
        </div>
        <div className="linksSideNavBar">
          <ul>
            <li>
              <h2>
                <Link to="/" className="sm-hiden">
                  Główna
                </Link>
              </h2>
            </li>
            <li>
              <h2>
                <Link to="/profil" className="sm-hiden">
                  Profil
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
                <Link to="/planer" className="sm-hiden">
                  Planer
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
          </ul>
        </div>
        <div className="logOut">
          <ul>
            <li>
              <h2>
                <Link to="/singout" className="sm-hiden">
                  Wyloguj
                </Link>
              </h2>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
