import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import SigninHorseImg from '../../assets/SigninHorse.png';
import useHttpClient from '../../hooks/httpHook';
import SignUpFormik from '../Formik/SignUpFormik';
import ConfirmEmail from '../Users/ConfirmEmail';
import PulseLoader from 'react-spinners/PulseLoader';

const SingUpUser = ({
  signinModalToggle,
  loginModalToggle,
  setUser,
  setSinginModalShow,
}) => {
  const userAuth = useSelector((state) => state.userAction);
  const { idToken, user } = userAuth;
  const { email, providerId, emailVerified } = user;

  const {
    isLoading,
    isErrors,
    dataResponse,
    sendReqestClient,
    source,
  } = useHttpClient();

  const [Component, setComponent] = useState(null);
  const cookies = new Cookies();

  useEffect(() => {
    // this is only for testing
    // !isLoading &&
    //   !isErrors &&
    //   !dataResponse &&
    //   sendReqestClient(
    //     'user/create',
    //     {
    //       firstName: 'gelu',
    //       lastName: 'gelo',
    //       email: 'cos@wp.pl',
    //     },
    //     'post'
    //   );

    console.log('isLoading', isLoading);
    console.log('isErrors', isErrors);
    console.log('dataResponse', dataResponse);

    !email && !emailVerified && setComponent(<SignUpFormik />);

    email &&
      providerId === 'password' &&
      !emailVerified &&
      setComponent(<ConfirmEmail email={email} user={user} />);

    if (email && providerId === 'password' && emailVerified) {
      cookies.set('idToken', idToken, {
        path: '/',
        maxAge: 5 * 60,
        // secure: true,
        // httpOnly: true,
      });

      !isLoading &&
        !isErrors &&
        !dataResponse &&
        sendReqestClient(
          'user',
          {
            email,
          },
          'post'
        );
    }

    !isLoading &&
      isErrors &&
      dataResponse &&
      setComponent(
        <h1 className="errorMessenge">
          Coś poszło nie tak podczas rejestracji skontaktuj się z instruktorem
        </h1>
      );

    !isLoading && !isErrors && dataResponse && setUser(user);
    !isLoading && !isErrors && dataResponse && setSinginModalShow(false);
    // isLoading &&
    //   setComponent(<PulseLoader color={' hsla(94, 30%, 43%, 1)'} size={25} />);
    return () => {
      source.cancel('Cancel axios by the user');
    };
  }, [emailVerified, isLoading]);
  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        signinModalToggle(e);
      }}
    >
      <div className="signinModal">
        <div className="imageModalContainer">
          <img className="modalImage" src={SigninHorseImg} alt="Konik" />
        </div>
        <div className="inputModalContainer">
          <i
            className="fas fa-arrow-left backIcon accessToggleModalShow"
            onClick={(e) => {
              signinModalToggle(e);
              loginModalToggle(e);
            }}
          ></i>
          {!isLoading && Component}
          {isLoading && (
            <PulseLoader color={' hsla(94, 30%, 43%, 1)'} size={25} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingUpUser;
