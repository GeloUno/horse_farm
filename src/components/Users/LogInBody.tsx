import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSignInSocilaMedialAction } from '../../redux/actions/userActions';
import LogInFormik from '../Formik/LogInFormik';
import { RootState } from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { IFormikLogin } from '../Formik/LogInFormik';
import { userSignInByEmailAction } from './../../redux/actions/userActions';

interface LogInBodyPrpos {
  loginModalToggle(e: React.MouseEvent): void,
  signinModalToggle(e: React.MouseEvent): void,
  resetPasswordModalToggle(e: React.MouseEvent): void,
}

const LogInBody: React.FC<LogInBodyPrpos> = ({
  loginModalToggle,
  signinModalToggle,
  resetPasswordModalToggle,
}) => {
  const dispatch = useDispatch();
  const userAction = useSelector((state: RootState) => state.userAction);
  const { errorMessage, user } = userAction;
  // const { providerId } = user;

  const [isTryLoginBySocialMedia, setIsTryLoginBySocialMedia] = useState(false)

  const handleSubmit = (values: IFormikLogin, { setErrors, resetForm }: { setErrors: Function, resetForm: Function }) => {
    setIsTryLoginBySocialMedia(() => { return false })
    dispatch(userSignInByEmailAction(values, setErrors, resetForm));
  };

  return (
    <div className='inputFormBody' data-testid="loginBody" >
      <div className="socialLoginBody" >
        <p className="socialLoginText" data-testid='loginDescription'>zaloguj przez:</p>
        <div className="socilaMediaLoginGrup">
          <div
            className="btnSocial"
            data-testid='socialMediaButtonGoogle'
            onClick={() => {
              setIsTryLoginBySocialMedia(prev => { return true })
              dispatch(userSignInSocilaMedialAction('google'))
            }
            }
          >
            <FontAwesomeIcon icon={faGoogle} />
          </div>
          <div
            className="btnSocial"
            data-testid='socialMediaButtonFacebook'
            onClick={() => {
              setIsTryLoginBySocialMedia(prev => { return true })
              dispatch(userSignInSocilaMedialAction('facebook'))
            }
            }
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
        </div>
        {
          isTryLoginBySocialMedia &&
          errorMessage && (
            <div className="errorMessageSocialMedia errorMessenge">
              {errorMessage}
            </div>
          )}
      </div>

      <LogInFormik handleSubmit={handleSubmit} />
      <div className=" btnSignInRemindPassword"
        data-testid='buttonRegister'
      >
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
          data-testid='buttonResetPassword'
          onClick={(e) => {
            loginModalToggle(e);
            resetPasswordModalToggle(e);
          }}
        >
          Resetuj hasło
        </p>
      </div>
    </div>
  );
};

export default LogInBody;
