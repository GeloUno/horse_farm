import React, { useEffect, useState } from 'react';
import LoginHorseImg from '../../assets/LoginHorse.png';
import LogInFormik from '../Formik/LogInFormik';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirebase, signInSocialMedia } from '../../firebase';

const LoginUser = ({
  signinModalToggle,
  loginModalToggle,
  resetPasswordModalToggle,
  setLoginModalShow,
}) => {
  getFirebase();

  const [errorAuthSocialMedia, setErrorAuthSocialMedia] = useState(false);
  const [user, setUser] = useState({
    email: null,
    emailVerified: null,
  }); //TODO: move it to redux
  const [view, setView] = useState(null);

  useEffect(() => {
    if (!user.email && !user.emailVerified) {
      setView(
        //TODO: move it to own component
        <>
          <div className="socialLoginBody">
            <p className="socialLoginText">zaloguj przez:</p>
            <div className="socilaMediaLoginGrup">
              <div
                className="btnSocial"
                onClick={() => handleSignInSocialMedia('google')}
              >
                <i className="fab fa-google"></i>
              </div>
              <div
                className="btnSocial"
                onClick={() => handleSignInSocialMedia('facebook')}
              >
                <i className="fab fa-facebook-f"></i>
              </div>
            </div>
            {errorAuthSocialMedia && (
              <div className="errorMessageSocialMedia errorMessenge">
                {errorAuthSocialMedia}
              </div>
            )}
          </div>

          <LogInFormik user={user} setUser={setUser} />
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
    } else if (user.email && !user.emailVerified) {
      setView(<div>emailVeryfied</div>);
    } else if (user.email && user.emailVerified) {
      setLoginModalShow(false);
    }

    return () => {};
  }, [user]);
  useEffect(() => {
    console.log('One modal login :>> ');
    return () => {};
  }, []);
  const handleSignInSocialMedia = (soclia) => {
    signInSocialMedia(soclia)
      .then((result) => {
        console.log('socila media signin oki :>> ', result);
        setErrorAuthSocialMedia(false);
      })
      .catch((err) => {
        console.log('err socila media', err);
        setErrorAuthSocialMedia(err.message);
      });
  };

  // console.log(base.name);
  // console.log(base.database());

  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        loginModalToggle(e);
      }}
    >
      {/* {console.log('process', process.env)} */}
      <div className="loginModal">
        <div className="imageModalContainer">
          <img className="modalImage" src={LoginHorseImg} alt="Konik" />
        </div>
        <div className="inputModalContainer">
          <i className="fas fa-arrow-left backIcon accessToggleModalShow"></i>
          {view}
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
