import React from 'react';
import { useSelector } from 'react-redux';
import { NavList } from '../../Layout/NavList';

const SideBar = ({
  sideBarToggle,
  loginModalToggle,
  // isAuthenticated,
  setSectionPage,
}) => {
  const userAuth = useSelector((state) => state.userAction);
  const { user } = userAuth;
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
        {user.photoId && (
          <>
            <div className="userSideBar">
              {user.photoId && (
                <img
                  className="photoUser"
                  src={user.photoId}
                  alt="zdjęcie użytkownika"
                />
              )}
            </div>
            <div className="userNickAndPoints">
              <p>
                nick:<strong>{user.name}</strong>
              </p>
              <p>
                karnety:<strong>{'15'}</strong>
              </p>
            </div>
          </>
        )}
        {!user.photoId && (
          <>
            <div className="spaceSideBarNoUser" />
          </>
        )}
        <div className="linksSideNavBar">
          <ul>
            <NavList
              // isAuthenticated={isAuthenticated}
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
