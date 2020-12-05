import React, { useContext } from 'react';
import ResetPasswordFormik from '../Formik/ResetPasswordFormik';

// import { RememberPasswordContext } from '../../App';

const ResetPassword = ({ resetPasswordModalToggle, loginModalToggle }) => {
  // const toogleModalPassword = useContext(ResetPasswordContext);
  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        // e.stopPropagation();
        resetPasswordModalToggle(e);
      }}
    >
      {/* {console.log('object', toogleModalPassword)} */}
      <div className="resetPasswordModal">
        <div className="textModalContainer">
          <i
            className="fas fa-arrow-left backIcon accessToggleModalShow"
            onClick={(e) => {
              resetPasswordModalToggle(e);
              loginModalToggle(e);
            }}
          ></i>
          <h2>
            Proszę podać e-mail w celu resetowania hasła. Instrukcja
            przywracania hasła będzie zawarta w wiadomości e-mail
          </h2>
        </div>
        <div className="inputModalContainer">
          <ResetPasswordFormik />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
