import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSignInSocilaMedialAction } from '../../redux/actions/userActions';

// import { signInSocialMedia } from '../../firebase';
import LogInFormik from '../Formik/LogInFormik';

const LogInBody = ({
  loginModalToggle,
  signinModalToggle,
  resetPasswordModalToggle,
}) => {
  const dispatch = useDispatch();
  const userAction = useSelector((state) => state.userAction);
  const { errorMessage, user } = userAction;
  const { providerId } = user;

  const [isTryLoginBySocialMedia, setIsTryLoginBySocialMedia] = useState(false)

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
      {
        console.log("<- LOG -> file: LogInBody.js -> line 16 -> userAction", userAction)
      }
      <div className="socialLoginBody">
        <p className="socialLoginText">zaloguj przez:</p>
        <div className="socilaMediaLoginGrup">
          <div
            className="btnSocial"
            // onClick={() => handleSignInSocialMedia('google')}
            onClick={() => {
              setIsTryLoginBySocialMedia(prev => { return true })
              dispatch(userSignInSocilaMedialAction('google'))
            }
            }
          >
            <i className="fab fa-google"></i>
          </div>
          <div
            className="btnSocial"
            // onClick={() => handleSignInSocialMedia('facebook')}
            onClick={() => {
              setIsTryLoginBySocialMedia(prev => { return true })
              dispatch(userSignInSocilaMedialAction('facebook'))
            }
            }
          >
            <i className="fab fa-facebook-f"></i>
          </div>
        </div>
        {
          // (providerId === 'google.com' || providerId === 'facebook.com') &&
          isTryLoginBySocialMedia &&
          errorMessage && (
            <div className="errorMessageSocialMedia errorMessenge">
              {errorMessage}
            </div>
          )}
      </div>

      <LogInFormik setIsTryLoginBySocialMedia={setIsTryLoginBySocialMedia} />
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
