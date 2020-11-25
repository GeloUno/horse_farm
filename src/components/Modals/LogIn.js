import React from 'react';
import LoginHorseImg from '../../assets/LoginHorse.png';
import LogInFormik from '../Formik/LogInFormik';

const LoginUser = ({
  signinModalToggle,
  loginModalToggle,
  rememberPasswordModalToggle,
}) => {
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
          <LogInFormik />
          <div className=" btnSignInRemindPassword">
            <p
              className="accessToggleModalShow"
              onClick={(e) => {
                loginModalToggle(e);
                signinModalToggle(e);
              }}
            >
              Rejesteacja
            </p>
            <p
              className="accessToggleModalShow"
              onClick={(e) => {
                loginModalToggle(e);
                rememberPasswordModalToggle(e);
              }}
            >
              Przypomnij hasło
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
