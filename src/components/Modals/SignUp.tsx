import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SigninHorseImg from '../../assets/SigninHorse.png';
import useHttpClient from '../../hooks/httpHook';
import SignUpFormik from '../Formik/SignUpFormik';
import ConfirmEmail from '../Users/ConfirmEmail';
import PulseLoader from 'react-spinners/PulseLoader';
import { RootState } from '../../redux/store';
import {
  updateOwnDataUserAction,
  userRemoveCookieTokenAction,
  userSignOutAction
} from '../../redux/actions/userActions';
import {
  isNeedToShowUserForms,
  isUserCanBeCreateByPassword,
  isUserCanUpdateDataFromMongoDB,
  isUserGetCorrectDataAndCanCloseModal,
  isUserGetErrorFromDataMongoDB,
  isUserNeedConfirmEmail,
} from '../../shared/user'
import { intervalGetEmailConfirmStatus, handleSendVerificationEmail, handleSignOut } from '../../shared/userHelpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IFormikSingUp } from '../Formik/SignUpFormik';
import { createUserByEmialPasswordAction } from '../../redux/actions/userActions';

interface SingUpProps {
  signinModalToggle(e: React.MouseEvent): void,
  loginModalToggle(e: React.MouseEvent): void,
  setSinginModalShow(show: boolean): void,
}


const SingUpUser: React.FC<SingUpProps> = ({
  signinModalToggle,
  loginModalToggle,
  // setUser,
  setSinginModalShow,
}) => {
  const userAuth = useSelector((state: RootState) => state.userAction);

  const dispatch = useDispatch();

  const handleSubmit = (values: IFormikSingUp, { setErrors, resetForm }: { setErrors: Function, resetForm: Function }) => {
    dispatch(createUserByEmialPasswordAction(values, setErrors, resetForm));
  };
  const { idToken, user } = userAuth;
  const { email, providerId, emailVerified, uid, isNewUser } = user;

  const {
    isLoading,
    isErrors,
    dataResponse,
    sendReqestClient,
    source,
  } = useHttpClient();

  const [ToggleComponent, setToggleComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {

    isNeedToShowUserForms(email, emailVerified) && setToggleComponent(<SignUpFormik handleSubmit={handleSubmit} />);


    isUserCanBeCreateByPassword(email, isLoading, isErrors, dataResponse, isNewUser, providerId) && (sendReqestClient(
      'user/create', { email, uid, providerId, emailVerified }, 'post'));

    isUserNeedConfirmEmail(email, isErrors, emailVerified) && setToggleComponent(<ConfirmEmail
      email={email!}
      handleSendVerificationEmail={handleSendVerificationEmail}
      handleSignOut={handleSignOut}
      intervalGetEmailConfirmStatus={intervalGetEmailConfirmStatus}
    />);

    // isUserCanSetTokenInCookie(email, emailVerified) && setTokenInCookies(idToken!)

    isUserCanUpdateDataFromMongoDB(isLoading, isErrors, emailVerified, dataResponse) && (dispatch(updateOwnDataUserAction(dataResponse)))

    if (isUserGetErrorFromDataMongoDB(isLoading, isErrors, dataResponse)) {
      setToggleComponent(
        <h1 className="errorMessenge">
          Coś poszło nie tak podczas rejestracji skontaktuj się z instruktorem
        </h1>
      );
      dispatch(userRemoveCookieTokenAction);
      dispatch(userSignOutAction);
    }


    if (isUserGetCorrectDataAndCanCloseModal(email, isLoading, isErrors, dataResponse, emailVerified)) {
      // setUser(user);
      setSinginModalShow(false);
    }

    return () => {
      source.cancel('Cancel axios by the user');
    };
  }, [emailVerified, isLoading]);
  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      data-testid='signupModalContainer'
      onClick={(e) => {
        dispatch(userSignOutAction);
        dispatch(userRemoveCookieTokenAction);
        signinModalToggle(e);
      }}
    >
      <div
        className="signinModal"
        data-testid='signinModal'
      >
        <div className="imageModalContainer"
          data-testid='imageModal'
        >
          <img className="modalImage"
            src={SigninHorseImg}
            alt="Nauka jazdy konnej rejestracja"
            data-testid="imageModalSourceSignup"
          />
        </div>
        <div className="inputModalContainer">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="backIcon accessToggleModalShow"
            data-testid='backIconModalSignup'
            onClick={(e) => {
              signinModalToggle(e);
              loginModalToggle(e);
            }}
          />

          {!isLoading && ToggleComponent}
          {isLoading && (
            <PulseLoader color={' hsla(94, 30%, 43%, 1)'} size={25} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingUpUser;
