import React, { useEffect, useState } from 'react';
import LoginHorseImg from '../../assets/LoginHorse.png';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirebase } from '../../firebase';
import LogInBody from '../Users/LogInBody';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmEmail from '../Users/ConfirmEmail';
import useHttpClient from '../../hooks/httpHook';
import PulseLoader from 'react-spinners/PulseLoader';
import { updateOwnDataUserAction, userRemoveCookieTokenAction, userSignOutAction } from '../../redux/actions/userActions';
import { RootState } from '../../redux/store';
import {
  isNeedToShowUserForms,
  isUserCanSendRequestToCreateBySocialMedia,
  isUserCanSendRequestToLoginByPassword,
  isUserCanSendRequestToLoginBySocialMedia,
  isUserCanSetTokenInCookie,
  isUserCanUpdateDataFromMongoDB,
  isUserGetCorrectDataAndCanCloseModal,
  isUserGetErrorFromDataMongoDB,
  isUserNeedConfirmEmail,
  setTokenInCookies
} from '../../shared/user'

interface LoginUserProps {
  signinModalToggle(): void,
  loginModalToggle(e: React.MouseEvent): void,
  resetPasswordModalToggle(): void,
  setLoginModalShow(show: boolean): void,
  // setUser,
}


const LoginUser: React.FC<LoginUserProps> = ({
  signinModalToggle,
  loginModalToggle,
  resetPasswordModalToggle,
  setLoginModalShow,
  // setUser,
}) => {
  getFirebase();
  const userAuth = useSelector((state: RootState) => state.userAction);
  const dispatch = useDispatch();
  const {
    isLoading,
    isErrors,
    dataResponse,
    sendReqestClient,
    source,
  } = useHttpClient();

  let { idToken, user } = userAuth;

  let { email, providerId, emailVerified, isNewUser } = user;
  const [ToggleComponent, setToggleComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    console.log(
      'LOGIN DATA',
      isLoading,
      isErrors,
      dataResponse,
      email,
      providerId,
      emailVerified,
      user
    );

    isNeedToShowUserForms(email, emailVerified) && (
      setToggleComponent(
        <LogInBody
          loginModalToggle={loginModalToggle}
          signinModalToggle={signinModalToggle}
          resetPasswordModalToggle={resetPasswordModalToggle}
        />)
    )

    isUserNeedConfirmEmail(email, isErrors, emailVerified) && (setToggleComponent(<ConfirmEmail email={email} user={user} />))

    // isUserCanSetTokenInCookie(email, emailVerified) && setTokenInCookies(idToken!)

    isUserCanSendRequestToLoginByPassword(isLoading, isErrors, dataResponse, isNewUser, providerId) && sendReqestClient('user/login', user, 'post');

    isUserCanSendRequestToCreateBySocialMedia(isLoading, isErrors, dataResponse, isNewUser, providerId) && sendReqestClient('user/createsocialmedia', user, 'post');

    isUserCanSendRequestToLoginBySocialMedia(isLoading, isErrors, dataResponse, isNewUser, providerId) && sendReqestClient('user/loginsocialmedia', user, 'post');


    isUserCanUpdateDataFromMongoDB(isLoading, isErrors, emailVerified, dataResponse) && dispatch(updateOwnDataUserAction(dataResponse));

    if (isUserGetCorrectDataAndCanCloseModal(email, isLoading, isErrors, dataResponse, emailVerified)) {
      // setUser(user);
      setLoginModalShow(false);
    }
    if (isUserGetErrorFromDataMongoDB(isLoading, isErrors, dataResponse)) {
      dispatch(userRemoveCookieTokenAction);
      dispatch(userSignOutAction);

      setToggleComponent(
        <h1 className="errorMessenge">
          Coś poszło nie tak podczas logowania skontaktuj się z instruktorem
          </h1>
      );

    }

    return () => {
      source.cancel('Cancel axios by the user');
    };
  }, [emailVerified, isLoading, dataResponse]);

  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        dispatch(userSignOutAction);
        dispatch(userRemoveCookieTokenAction);
        loginModalToggle(e);
      }}
    >
      <div className="loginModal">
        <div className="imageModalContainer">
          <img className="modalImage" src={LoginHorseImg} alt="Konik" />
        </div>
        <div className="inputModalContainer">
          <i className="fas fa-arrow-left backIcon accessToggleModalShow"></i>
          {!isLoading && ToggleComponent}
          {isLoading && (
            <PulseLoader color={' hsla(94, 30%, 43%, 1)'} size={25} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
