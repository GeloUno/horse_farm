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
        <div className="photoUser"></div>
        <div className="links"></div>
        <div className="logOut"></div>
      </nav>
    </div>
  );
};

export default SideBar;
