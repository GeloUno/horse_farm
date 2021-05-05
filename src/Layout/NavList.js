import React, { Fragment } from 'react';
// import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';

import { signOutFirebase } from '../firebase';
import { userRemoveCookieTokenAction, userSignOutAction } from '../redux/actions/userActions';

export const NavList = ({
  loginModalToggle,
  // isAuthenticated,
  setSectionPage,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const cookies = new Cookies();
  const userAuth = useSelector((state) => state.userAction);
  const { user } = userAuth;
  const handleSignOut = () => {
    signOutFirebase()
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        console.warn('error LogOut :>> ', error);
      });
  };
  const onHandleClickJumptoSectionOrTop = (section) => {
    if (section) {
      setSectionPage(section);
    } else {
      setSectionPage(null);
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }
  };

  const renderSwitchNavList = (userAccess) => {
    switch (userAccess) {
      case 'user':
        return userLinks
        break;
      case 'coach':
        return coachLinks
        break;
      case 'owner':
        return ownerLinks
        break;
      case 'admin':
        return adminLinks
        break;
      default:
        return guestLinks
        break;
    }
  }

  const guestLinks = (
    <Fragment>
      <li>
        <h2>
          <Link
            to="/"
            className="sm-hiden"
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
            className="sm-hiden"
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
            className="sm-hiden"
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
            className="sm-hiden"
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden accessToggleModalShow"
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
            className="sm-hiden"
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              dispatch(userSignOutAction);
              dispatch(userRemoveCookieTokenAction);
              // cookies.remove('idToken', {
              //   path: '/',
              // });
            }}
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
            className="sm-hiden"
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              dispatch(userSignOutAction);
              dispatch(userRemoveCookieTokenAction);
              // cookies.remove('idToken', {
              //   path: '/',
              // });
            }}
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
            className="sm-hiden"
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              dispatch(userSignOutAction);
              dispatch(userRemoveCookieTokenAction);
              // cookies.remove('idToken', {
              //   path: '/',
              // });
            }}
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
            className="sm-hiden"
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              onHandleClickJumptoSectionOrTop(null);
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
            className="sm-hiden"
            onClick={() => {
              dispatch(userSignOutAction);
              dispatch(userRemoveCookieTokenAction);
              // cookies.remove('idToken', {
              //   path: '/',
              // });
            }}
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
