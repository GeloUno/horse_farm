import React from 'react';
import LoginHorseImg from '../../assets/LoginHorse.png';
import LogInFormik from '../Formik/LogInFormik';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirebase, signInSocialMedia } from '../../firebase';

const LoginUser = ({
  signinModalToggle,
  loginModalToggle,
  resetPasswordModalToggle,
}) => {
  getFirebase();

  // console.log(base.name);
  // console.log(base.database());

  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        loginModalToggle(e);
      }}
    >
      {/* {console.log('process', process.env)} */}
      <div className="loginModal">
        <div className="imageModalContainer">
          <img className="modalImage" src={LoginHorseImg} alt="Konik" />
        </div>
        <div className="inputModalContainer">
          <i className="fas fa-arrow-left backIcon accessToggleModalShow"></i>
          <div className="sobialLoginBody">
            <p className="socialLoginText">zaloguj przez:</p>
            <div className="socilaMediaLoginGrup">
              <div
                className="btnSocial"
                onClick={() => signInSocialMedia('google')}
              >
                <i className="fab fa-google"></i>
              </div>
              <div
                className="btnSocial"
                onClick={() => signInSocialMedia('facebook')}
              >
                <i className="fab fa-facebook-f"></i>
              </div>
            </div>
          </div>
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
                resetPasswordModalToggle(e);
              }}
            >
              Resetuj hasło
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
