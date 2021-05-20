import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { userRemoveCookieTokenAction, userSignOutAction } from '../redux/actions/userActions';
import { RootState } from '../redux/store';
import { EntityAccess } from '../models/users';
import { NavListProps } from '../models/props/NavListProps';


export const NavList: React.FC<NavListProps> = ({
  loginModalToggle,
  setSectionPage,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const cookies = new Cookies();
  const userAuth = useSelector((state: RootState) => state.userAction);
  const { user } = userAuth;
  const handleSignOut = () => {
    dispatch(userSignOutAction);
    dispatch(userRemoveCookieTokenAction);
    history.push('/');
  };
  const onHandleClickJumptoSectionOrTop = (section?: string) => {
    if (section) {
      setSectionPage(section);
    } else {
      setSectionPage(undefined);
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }
  };

  const renderSwitchNavList = (userAccess: EntityAccess | undefined) => {
    switch (userAccess) {
      case 'user':
        return userLinks
      // break;
      case 'coach':
        return coachLinks
      // break;
      case 'owner':
        return ownerLinks
      // break;
      case 'admin':
        return adminLinks
      // break;
      default:
        return guestLinks
      // break;
    }
  }

  const guestLinks = (
    <Fragment>
      <li>
        <h2>
          <Link
            to="/"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop();
            }}
          >
            Główna
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop('attractions');
            }}
          >
            Atrakcje
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop('opinions');
            }}
          >
            Opinia
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop('contact');
            }}
          >
            Kontakt
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/galeria"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Galeria
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to=""
            className="sm-hidden accessToggleModalShow"
            onClick={(e) => loginModalToggle(e)}
          >
            <i className="fas fa-sign-in-alt accessToggleModalShow"></i>
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
          <Link
            to="/"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop();
            }}
          >
            Główna
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/profil"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Profil
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/planer"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Planer
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/rezerwacja"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Rezerwacja
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/galeria"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Galeria
          </Link>
        </h2>
      </li>
      <li>
        <h2
          onClick={() => {
            handleSignOut();
          }}
        >
          <Link
            to=""
            className="sm-hidden"
          // onClick={() => {
          //   dispatch(userSignOutAction);
          //   dispatch(userRemoveCookieTokenAction);
          // cookies.remove('idToken', {
          //   path: '/',
          // });
          // }}
          >
            <i className="fas fa-sign-out-alt"></i>
            Wyloguj
          </Link>
          {user && user.photoId && (
            <img
              className="navbarUserPhoto "
              src={user.photoId}
              alt="zdjęcie użytkownika"
            />
          )}
        </h2>
      </li>
    </Fragment>
  );

  // TODO: ADD REAL LINKS FOR COACH
  const coachLinks = (
    <Fragment>
      <li>
        <h2>
          <Link
            to="/"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop();
            }}
          >
            Główna
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/profil"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Profil
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/planer"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Planer
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/rezerwacja"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Rezerwacja
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/galeria"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Terener
          </Link>
        </h2>
      </li>
      <li>
        <h2
          onClick={() => {
            handleSignOut();
          }}
        >
          <Link
            to=""
            className="sm-hidden"
          // onClick={() => {
          //   dispatch(userSignOutAction);
          //   dispatch(userRemoveCookieTokenAction);
          // cookies.remove('idToken', {
          //   path: '/',
          // });
          // }}
          >
            <i className="fas fa-sign-out-alt"></i>
            Wyloguj
          </Link>
          {user && user.photoId && (
            <img
              className="navbarUserPhoto "
              src={user.photoId}
              alt="zdjęcie użytkownika"
            />
          )}
        </h2>
      </li>
    </Fragment>
  );

  // TODO: ADD REAL LINKS FOR OWNER
  const ownerLinks = (
    <Fragment>
      <li>
        <h2>
          <Link
            to="/"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop();
            }}
          >
            Główna
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/profil"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Profil
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/planer"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Planer
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/rezerwacja"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Rezerwacja
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/galeria"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Właściciel
          </Link>
        </h2>
      </li>
      <li>
        <h2
          onClick={() => {
            handleSignOut();
          }}
        >
          <Link
            to=""
            className="sm-hidden"
          // onClick={() => {
          //   dispatch(userSignOutAction);
          //   dispatch(userRemoveCookieTokenAction);
          // cookies.remove('idToken', {
          //   path: '/',
          // });
          // }}
          >
            <i className="fas fa-sign-out-alt"></i>
            Wyloguj
          </Link>
          {user && user.photoId && (
            <img
              className="navbarUserPhoto "
              src={user.photoId}
              alt="zdjęcie użytkownika"
            />
          )}
        </h2>
      </li>
    </Fragment>
  );

  // TODO: ADD REAL LINKS FOR ADMIN
  const adminLinks = (
    <Fragment>
      <li>
        <h2>
          <Link
            to="/"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop();
            }}
          >
            Główna
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/profil"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Profil
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/planer"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Planer
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/rezerwacja"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Użytkownicy
          </Link>
        </h2>
      </li>
      <li>
        <h2>
          <Link
            to="/galeria"
            className="sm-hidden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(undefined);
            }}
          >
            Administrator
          </Link>
        </h2>
      </li>
      <li>
        <h2
          onClick={() => {
            handleSignOut();
          }}
        >
          <Link
            to=""
            className="sm-hidden"
          // onClick={() => {
          //   dispatch(userSignOutAction);
          //   dispatch(userRemoveCookieTokenAction);
          // cookies.remove('idToken', {
          //   path: '/',
          // });
          // }}
          >
            <i className="fas fa-sign-out-alt"></i>
            Wyloguj
          </Link>
          {user && user.photoId && (
            <img
              className="navbarUserPhoto "
              src={user.photoId}
              alt="zdjęcie użytkownika"
            />
          )}
        </h2>
      </li>
    </Fragment>
  );
  // return <Fragment>{user.entityAccess ? userLinks : guestLinks}</Fragment>;
  return <Fragment>{renderSwitchNavList(user.entityAccess)}</Fragment>;
};
