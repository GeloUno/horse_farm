import React from 'react';
import SigninHorseImg from '../../assets/SigninHorse.png';
import SignUpFormik from '../Formik/SignUpFormik';

const SingUpUser = ({ signinModalToggle, loginModalToggle }) => {
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
          <SignUpFormik />
        </div>
      </div>
    </div>
  );
};

export default SingUpUser;
