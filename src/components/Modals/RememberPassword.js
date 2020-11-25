import React from 'react';
import RemenberPasswordFormik from '../Formik/RemenberPasswordFormik';

const RememberPassword = ({ rememberPasswordModalToggle }) => {
  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        // e.stopPropagation();
        rememberPasswordModalToggle(e);
      }}
    >
      <div className="rememberPasswordModal">
        <div className="textModalContainer">
          <h2>
            Proszę podać e-mail w celu resetowania hasła. Instrukcja
            przywracania hasła będzie zawarta w wiadomości e-mail
          </h2>
        </div>
        <div className="inputModalContainer">
          <RemenberPasswordFormik />
        </div>
      </div>
    </div>
  );
};

export default RememberPassword;
