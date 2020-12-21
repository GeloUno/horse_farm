import React, { useEffect, useState } from 'react';
import LoginHorseImg from '../../assets/LoginHorse.png';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirebase } from '../../firebase';
import LogInBody from '../Users/LogInBody';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import ConfirmEmail from '../Users/ConfirmEmail';

const LoginUser = ({
  signinModalToggle,
  loginModalToggle,
  resetPasswordModalToggle,
  setLoginModalShow,
  setUser,
}) => {
  getFirebase();
  const cookies = new Cookies();
  const userAuth = useSelector((state) => state.userAction);
  let { idToken, user } = userAuth;
  let { email, providerId, emailVerified } = user;
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    if (!email && !emailVerified) {
      setComponent(
        <LogInBody
          loginModalToggle={loginModalToggle}
          signinModalToggle={signinModalToggle}
          resetPasswordModalToggle={resetPasswordModalToggle}
        />
      );
    } else if (email && providerId === 'password' && !emailVerified) {
      setComponent(<ConfirmEmail email={email} user={user} />);
    } else if (email && providerId === 'password' && emailVerified) {
      cookies.set('idToken', idToken, {
        path: '/',
        maxAge: 5 * 60,
        // secure: true,
        // httpOnly: true,
      });
      setUser(user);
      setLoginModalShow(false);
    } else if (
      (email && providerId === 'google.com') ||
      providerId === 'facebook.com'
    ) {
      cookies.set('idToken', idToken, {
        path: '/',
        maxAge: 5 * 60,
        // secure: true,
        // httpOnly: true,
      });
      setUser(user);
      setLoginModalShow(false);
    }

    return () => {};
  }, [emailVerified]);

  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        loginModalToggle(e);
      }}
    >
      <div className="loginModal">
        <div className="imageModalContainer">
          <img className="modalImage" src={LoginHorseImg} alt="Konik" />
        </div>
        <div className="inputModalContainer">
          <i className="fas fa-arrow-left backIcon accessToggleModalShow"></i>
          {Component}
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
