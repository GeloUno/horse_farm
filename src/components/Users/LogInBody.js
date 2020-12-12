import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSignInSocilaMedialAction } from '../../actions/userActions';
import { signInSocialMedia } from '../../firebase';
import LogInFormik from '../Formik/LogInFormik';

const LogInBody = ({
  loginModalToggle,
  signinModalToggle,
  resetPasswordModalToggle,
  setUser,
}) => {
  const dispatch = useDispatch();
  const userAction = useSelector((state) => state.userAction);
  const { errorMessage, provider } = userAction;

  //   const handleSignInSocialMedia = (soclia) => {
  //     signInSocialMedia(soclia)
  //       .then((result) => {
  //         console.log('socila media signin oki :>> ', result);
  //         //     setErrorAuthSocialMedia(false);
  //       })
  //       .catch((err) => {
  //         console.log('err socila media', err);
  //         //      setErrorAuthSocialMedia(err.message);
  //       });
  //   };

  return (
    <>
      <div className="socialLoginBody">
        <p className="socialLoginText">zaloguj przez:</p>
        <div className="socilaMediaLoginGrup">
          <div
            className="btnSocial"
            // onClick={() => handleSignInSocialMedia('google')}
            onClick={() => dispatch(userSignInSocilaMedialAction('google'))}
          >
            <i className="fab fa-google"></i>
          </div>
          <div
            className="btnSocial"
            // onClick={() => handleSignInSocialMedia('facebook')}
            onClick={() => dispatch(userSignInSocilaMedialAction('facebook'))}
          >
            <i className="fab fa-facebook-f"></i>
          </div>
        </div>
        {(provider === 'google' || provider === 'facebook') && errorMessage && (
          <div className="errorMessageSocialMedia errorMessenge">
            {errorMessage}
          </div>
        )}
      </div>

      <LogInFormik setUser={setUser} />
      <div className=" btnSignInRemindPassword">
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
          onClick={(e) => {
            loginModalToggle(e);
            resetPasswordModalToggle(e);
          }}
        >
          Resetuj hasło
        </p>
      </div>
    </>
  );
};

export default LogInBody;
