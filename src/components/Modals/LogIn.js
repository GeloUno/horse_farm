import React, { useEffect, useState } from 'react';
import LoginHorseImg from '../../assets/LoginHorse.png';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirebase } from '../../firebase';
import LogInBody from '../Users/LogInBody';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import ConfirmEmail from '../Users/ConfirmEmail';
import useHttpClient from '../../hooks/httpHook';
import PulseLoader from 'react-spinners/PulseLoader';

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
  const {
    isLoading,
    isErrors,
    dataResponse,
    sendReqestClient,
  } = useHttpClient();

  let { idToken, user } = userAuth;
  // console.log('userAuth', userAuth);
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
    } else if (!emailVerified) {
      setComponent(<ConfirmEmail email={email} user={user} />);
    } else if (email && emailVerified) {
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
      (email && providerId === 'facebook.com')
    ) {
      cookies.set('idToken', idToken, {
        path: '/',
        maxAge: 5 * 60,
        // secure: true,
        // httpOnly: true,
      });
      // console.log('user', user);

      !isLoading &&
        !isErrors &&
        !dataResponse &&
        sendReqestClient('user', user, 'put');

      !isLoading && !isErrors && dataResponse && setUser(user);
      !isLoading && !isErrors && dataResponse && setLoginModalShow(false);
    }

    return () => {};
  }, [emailVerified, isLoading]);

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
          {!isLoading && Component}
          {isLoading && (
            <PulseLoader color={' hsla(94, 30%, 43%, 1)'} size={25} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
