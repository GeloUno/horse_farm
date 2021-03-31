import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import SigninHorseImg from '../../assets/SigninHorse.png';
import useHttpClient from '../../hooks/httpHook';
import SignUpFormik from '../Formik/SignUpFormik';
import ConfirmEmail from '../Users/ConfirmEmail';
import PulseLoader from 'react-spinners/PulseLoader';
import { updataOwnDataUserAction, userRemoveCookieTokenAction, userSignOutAction } from '../../redux/actions/userActions';
import { isNeedToShowUserBody, isUserCanBeCreateByPassword, isUserCanSetTokenInCookie, isUserCanUpdateDataFromMongoDB, isUserGetCorrectDataAndCanCloseModal, isUserGetErrorFromDataMongoDB, isUserNeedConfirmEmail, setTokenInCookies } from '../../shared/user'

const SingUpUser = ({
  signinModalToggle,
  loginModalToggle,
  setUser,
  setSinginModalShow,
}) => {
  const userAuth = useSelector((state) => state.userAction);
  const dispatch = useDispatch();
  const { idToken, user } = userAuth;
  const { email, providerId, emailVerified, uid, isNewUser } = user;

  const {
    isLoading,
    isErrors,
    dataResponse,
    sendReqestClient,
    source,
  } = useHttpClient();

  const [Component, setComponent] = useState(null);
  const cookies = new Cookies();

  useEffect(() => {

    isNeedToShowUserBody(email, emailVerified) && setComponent(<SignUpFormik />);

    isUserCanBeCreateByPassword(email, isLoading, isErrors, dataResponse, isNewUser, providerId) && (sendReqestClient(
      'user/create', { email, uid, providerId, emailVerified }, 'post'));

    isUserNeedConfirmEmail(email, isErrors, emailVerified) && setComponent(<ConfirmEmail email={email} user={user} />);

    isUserCanSetTokenInCookie(email, emailVerified) && setTokenInCookies(idToken)

    isUserCanUpdateDataFromMongoDB(isLoading, isErrors, emailVerified, dataResponse) && (dispatch(updataOwnDataUserAction(dataResponse)))

    if (isUserGetErrorFromDataMongoDB(isLoading, isErrors, dataResponse)) {
      setComponent(
        <h1 className="errorMessenge">
          Coś poszło nie tak podczas rejestracji skontaktuj się z instruktorem
        </h1>
      );
      dispatch(userRemoveCookieTokenAction);
      dispatch(userSignOutAction);
    }

    if (isUserGetCorrectDataAndCanCloseModal(email, isLoading, isErrors, dataResponse, emailVerified)) {
      setUser(user);
      setSinginModalShow(false);
    }

    return () => {
      source.cancel('Cancel axios by the user');
    };
  }, [emailVerified, isLoading]);
  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        dispatch(userSignOutAction);
        dispatch(userRemoveCookieTokenAction);
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
          {!isLoading && Component}
          {isLoading && (
            <PulseLoader color={' hsla(94, 30%, 43%, 1)'} size={25} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingUpUser;
