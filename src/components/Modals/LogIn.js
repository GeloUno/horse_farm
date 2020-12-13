import React, { useEffect, useState } from 'react';
import LoginHorseImg from '../../assets/LoginHorse.png';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirebase } from '../../firebase';
import LogInBody from '../Users/LogInBody';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';

const LoginUser = ({
  signinModalToggle,
  loginModalToggle,
  resetPasswordModalToggle,
  setLoginModalShow,
  setUser,
}) => {
  getFirebase();
  const [cookies, setCookie, removeCookie] = useCookies(['idToken']);
  const userAuth = useSelector((state) => state.userAction);
  const { idToken, user } = userAuth;
  const [view, setView] = useState(null);

  useEffect(() => {
    if (!user.email && !user.emailVerified) {
      setView(
        <LogInBody
          loginModalToggle={loginModalToggle}
          signinModalToggle={signinModalToggle}
          resetPasswordModalToggle={resetPasswordModalToggle}
        />
      );
    } else if (user.email && !user.emailVerified && !idToken) {
      setView(<div>emailVeryfied</div>);
    } else if (idToken) {
      setCookie('idToken', idToken, {
        path: '/',
        // domain: 'http://localhost/',
        maxAge: 30 * 60,
        // secure: true,
        // httpOnly: true,
      });
      setUser(user);
      setLoginModalShow(false);
    }

    return () => {};
  }, [user, idToken]);

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
          {view}
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
