import React from 'react';
import { NavList } from '../Layout/NavList';

const SideBar = ({
  sideBarToggle,
  loginModalToggle,
  isAuthenticated,
  setSectionPage,
}) => {
  return (
    <div
      className="modalBackground"
      onClick={(e) => {
        sideBarToggle(e);
      }}
    >
      <nav className="sideBarBody">
        <i
          className="far fa-times-circle closeModalButton closeBtn"
          onClick={(e) => {
            sideBarToggle(e);
          }}
        ></i>
        {isAuthenticated && (
          <>
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
          </>
        )}
        {!isAuthenticated && (
          <>
            <div className="spaceSideBarNoUser" />
          </>
        )}
        <div className="linksSideNavBar">
          <ul>
            <NavList
              isAuthenticated={isAuthenticated}
              loginModalToggle={loginModalToggle}
              setSectionPage={setSectionPage}
            />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
