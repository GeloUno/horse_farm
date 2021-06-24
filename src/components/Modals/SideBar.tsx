import React from 'react';
import { useSelector } from 'react-redux';
import { NavList } from '../../Layout/NavList';
import { NavBarAndSideProps } from '../../models/props/NavBarAndSideProps';
import { RootState } from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const SideBar: React.FC<NavBarAndSideProps> = ({
  sideBarToggle,
  loginModalToggle,
  setSectionPage,
}) => {
  const userAuth = useSelector((state: RootState) => state.userAction);
  const { user } = userAuth;
  return (
    <div
      className="modalBackground"
      data-testid='sidebarBackground'
      onClick={(e) => {
        sideBarToggle(e);
      }}
    >
      <nav className="sideBarBody"
        data-testid='sideBarBody'
      >

        <FontAwesomeIcon
          icon={faTimesCircle}
          className="closeModalButton closeBtn"
          data-testid='closeSidBarModal'
        />
        {user.photoId && (
          <>
            <div
              className="userSideBar"
              data-testid="imageUser"
            >
              {user.photoId && (
                <img
                  className="photoUser"
                  src={user.photoId}
                  alt="zdjęcie użytkownika"
                  data-testid="imageUserSrc"
                />
              )}
            </div>
            <div
              className="userNickAndPoints"
            >
              <p
                data-testid='sidBarUserName'
              >
                nick:<strong>{user.nick}</strong>
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
