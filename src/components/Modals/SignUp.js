import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import SigninHorseImg from '../../assets/SigninHorse.png';
import SignUpFormik from '../Formik/SignUpFormik';
import ConfirmEmail from '../Users/ConfirmEmail';

const SingUpUser = ({
  signinModalToggle,
  loginModalToggle,
  setUser,
  setSinginModalShow,
}) => {
  const userAuth = useSelector((state) => state.userAction);
  const { idToken, user } = userAuth;
  const { email, providerId, emailVerified } = user;
  const [Componet, setComponet] = useState(null);
  const cookies = new Cookies();
  useEffect(() => {
    !email && !emailVerified && setComponet(<SignUpFormik />);

    email &&
      providerId === 'password' &&
      !emailVerified &&
      setComponet(<ConfirmEmail email={email} user={user} />);

    if (email && providerId === 'password' && emailVerified) {
      cookies.set('idToken', idToken, {
        path: '/',
        maxAge: 5 * 60,
        // secure: true,
        // httpOnly: true,
      });
      setUser(user);
      setSinginModalShow(false);
    }
    return () => {
      // cleanup
    };
  }, [emailVerified]);
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
          {Componet}
        </div>
      </div>
    </div>
  );
};

export default SingUpUser;
