import React from 'react';
import SigninHorseImg from '../../assets/SigninHorse.png';
import SignUpFormik from '../Formik/SignUpFormik';

const SingUpUser = ({ signinModalToggle }) => {
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
          <SignUpFormik />
        </div>
      </div>
    </div>
  );
};

export default SingUpUser;
