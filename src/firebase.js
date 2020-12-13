import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

export const configFirebase = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BACKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const getFirebase = () => {
  return !firebase.apps.length
    ? firebase.initializeApp(configFirebase)
    : firebase.app();
};

const errorFirebaseAuthTranslationPL = {
  authwrongpassword: {
    input: 'password',
    message: 'Ups...błędne hasło spróbuj ponownie',
  },
  authtoomanyrequests: {
    input: 'password',
    message: 'Odpocznij zbyt wiele niepoprawnych logowań zapraszamy pózniej',
  },
  authusernotfound: {
    input: 'email',
    message: 'Jeszcze się nie znamy zapraszam do rejestracji',
  },
  authemailalreadyinuse: {
    input: 'email',
    message: 'Już się znamy zapraszam do logowania',
  },
  authunauthorizeddomain: {
    input: 'errorMessageSocialMedia',
    message: 'Ups... z tej domeny nie można się zalogować przez social media',
  },
  authpopupclosedbyuser: {
    input: 'errorMessageSocialMedia',
    message:
      'Ups... logowanie zostało przerwane przez zamknięcie okna social media',
  },
  authcancelledpopuprequest: {
    input: 'errorMessageSocialMedia',
    message:
      'Ups... logowanie zostało przerwane przez zamknięcie okna social media',
  },
};

const removeMinusAndSlash = (error) => {
  return error.replace(/[^a-zA-Z0-9]+/g, '');
};

export const signInSocialMedia = async (socialMedia) => {
  let provider;

  socialMedia === 'google' &&
    (provider = new firebase.auth.GoogleAuthProvider());
  socialMedia === 'facebook' &&
    (provider = new firebase.auth.FacebookAuthProvider());

  const userAuthDataBackFromFirebase = await firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      // socialMedia === 'google' && console.log('Error LoginByGoogle');
      // socialMedia === 'facebook' && console.log('Error LoginByFacebook');
      console.error('Error Firebase Social Media', error);
      throw (
        errorFirebaseAuthTranslationPL[removeMinusAndSlash(error.code)] || {
          input: 'errorMessageSocialMedia',
          message: error.message,
        }
      );
    });
  return userAuthDataBackFromFirebase;
};

export const signInEmailPassword = async (values) => {
  let dataBackFromFirebase = await firebase
    .auth()
    .signInWithEmailAndPassword(values.email, values.password)
    .then((result) => {
      !result.user.emailVerified && sendVerificationEmail();
      return result;
      // console.log('user :>> ', user);
    })
    .catch((err) => {
      // console.log('err :>> ', err);
      throw (
        errorFirebaseAuthTranslationPL[removeMinusAndSlash(err.code)] || {
          input: 'email',
          message: err.message,
        }
      );
    });
  return dataBackFromFirebase;
};

export const signUpEmailPassword = async (values) => {
  const dataFromFirebase = await firebase
    .auth()
    .createUserWithEmailAndPassword(values.email, values.password)
    .then((user) => {
      return user;
    })
    .catch((err) => {
      throw (
        errorFirebaseAuthTranslationPL[removeMinusAndSlash(err.code)] || {
          input: 'email',
          message: err.message,
        }
      );
    });
  return dataFromFirebase;
};

export const sendEmailToResetPassword = async (email) => {
  const dataFromFirebase = await firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then((user) => {
      return user;
    })
    .catch((err) => {
      //   console.log('err', err);
      throw (
        errorFirebaseAuthTranslationPL[removeMinusAndSlash(err.code)] || {
          input: 'email',
          message: err.message,
        }
      );
    });
  return dataFromFirebase;
};

export const sendVerificationEmail = () => {
  const user = firebase.auth().currentUser;

  user
    .sendEmailVerification()
    .then(() => {
      // console.log('send email :>> ');
    })
    .catch((error) => {
      // console.log('error :>> ', error);
    });
};

export const getIdToken = async () => {
  const idToken = await firebase
    .auth()
    .currentUser.getIdToken(true)
    .then((idToken) => {
      //  console.log('idToken :>> ', idToken);
      return idToken;
    })
    .catch((error) => {
      //  console.log('error :>> ', error);
      return error.message;
    });
  return idToken;
};

export const getCurrentUser = () => {
  const userCurrent = firebase.auth().currentUser;
  userCurrent
    .sendEmailVerification()
    .then(() => {
      // console.log('send email :>> ');
    })
    .catch((error) => {
      // console.log('error :>> ', error);
    });
  console.log('userCurrent :>> ', userCurrent);
};

export const signOutFirebase = async () => {
  await firebase
    .auth()
    .signOut()
    .then((result) => {
      // console.log('firebaseLogOut :>> ', result);
      return result;
    })
    .catch((error) => {
      // console.warn('loguotFirebase error :>> ', error);
      throw error.code;
    });
};
