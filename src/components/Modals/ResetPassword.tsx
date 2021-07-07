import React from 'react';
import ResetPasswordFormik from '../Formik/ResetPasswordFormik';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IFormikResetPassword } from '../Formik/ResetPasswordFormik';

import { sendEmailToResetPasswordAction } from '../../redux/actions/userActions';

interface ResetPasswordProps {
  resetPasswordModalToggle(e: React.MouseEvent): void,
  loginModalToggle(e: React.MouseEvent): void,
  setResetPasswordModalShow(): void,
}


const ResetPassword: React.FC<ResetPasswordProps> = ({
  resetPasswordModalToggle,
  loginModalToggle,
  setResetPasswordModalShow,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = (values: IFormikResetPassword, { setErrors, resetForm }: { setErrors: Function, resetForm: Function }) => {
    dispatch(
      sendEmailToResetPasswordAction(
        values,
        setResetPasswordModalShow,
        setErrors,
        resetForm
      )
    );
  };
  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      data-testid="resetpasswordModalContainer"
      onClick={(e) => {
        resetPasswordModalToggle(e);
      }}
    >
      <div
        className="resetPasswordModal"
        data-testid='resetpasswordModal'
      >
        <div
          className="textModalContainer"
          data-testid='textModalResetpassword'
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="backIcon accessToggleModalShow"
            data-testid='backIconModalResetPassord'
            onClick={(e) => {
              resetPasswordModalToggle(e);
              loginModalToggle(e);
            }}
          />
          <h2>
            Proszę podać e-mail w celu resetowania hasła. Instrukcja
            przywracania hasła będzie zawarta w wiadomości e-mail
          </h2>
        </div>
        <div
          className="inputModalContainer"
          data-testid='inputSectionResetPassword'
        >
          <ResetPasswordFormik
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
