import React, { Fragment } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
import { userSignOutAction } from '../../actions/userActions';
import { signOutFirebase } from '../../firebase';

export const NavList = ({
  loginModalToggle,
  isAuthenticated,
  setSectionPage,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(['idToken']);
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
              removeCookie('idToken', {
                path: '/',
              });
            }}
          >
            <i className="fas fa-sign-out-alt"></i>
            Wyloguj
          </Link>
        </h2>
      </li>
    </Fragment>
  );
  return <Fragment>{isAuthenticated ? userLinks : guestLinks}</Fragment>;
};
