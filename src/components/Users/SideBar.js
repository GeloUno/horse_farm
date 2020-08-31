import React from 'react';

const SideBar = ({ sideBarToggle }) => {
  return (
    <div
      className="sideBarBackground"
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
                <a href="/" className="sm-hiden">
                  Główna
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a href="/" className="sm-hiden">
                  Profil
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a href="/" className="sm-hiden">
                  Rezerwacja
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a href="/" className="sm-hiden">
                  Planer
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a href="/" className="sm-hiden">
                  Galeria
                </a>
              </h2>
            </li>
          </ul>
        </div>
        <div className="logOut">
          <ul>
            <li>
              <h2>
                <a href="/" className="sm-hiden">
                  Wyloguj
                </a>
              </h2>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
