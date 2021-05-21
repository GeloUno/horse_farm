import React from 'react';
import ResetPasswordFormik from '../Formik/ResetPasswordFormik';

const ResetPassword = ({
  resetPasswordModalToggle,
  loginModalToggle,
  setResetPasswordModalShow,
}) => {
  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        resetPasswordModalToggle(e);
      }}
    >
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
          <ResetPasswordFormik
            setResetPasswordModalShow={setResetPasswordModalShow}
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
