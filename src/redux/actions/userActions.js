import {
  USER_CREATE_REQUEST,
  USER_CREATE_FAILED,
  USER_CREATE_SUCCESS,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_FAILED,
  USER_SIGNIN_SUCCESS,
  USER_RELOAD_REQUEST,
  USER_RELOAD_FAILED,
  USER_RELOAD_SUCCESS,
  USER_LOGUOT_REQUEST,
  USER_LOGUOT_FAILED,
  USER_LOGUOT_SUCCESS,
} from '../constans/userConstans';
import {
  getIdToken,
  signInEmailPassword,
  signInSocialMedia,
  signOutFirebase,
  createUserEmailPassword,
  reloadUserAuth,
} from '../../firebase';

export const userSignInByEmailAction = (values, setErrors, resetForm) => async (
  dispatch
) => {
  try {
    dispatch({
      type: USER_SIGNIN_REQUEST,
      payload: { provider: 'email' },
    });
    // let idToken = null;
    const userAuth = await signInEmailPassword(values);
    const { additionalUserInfo, user } = userAuth;
    // user.emailVerified && (idToken = await getIdToken());
    const idToken = await getIdToken();

    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: {
        user: {
          isNewUser: additionalUserInfo.isNewUser,
          providerId: additionalUserInfo.providerId,
          email: user.email,
          emailVerified: user.emailVerified,
          uid: user.uid,
        },
        idToken: idToken,
      },
    });

    resetForm();
  } catch (error) {
    setErrors(
      { [error.input]: [error.message] } || {
        input: 'errorMessageSocialMedia',
        message: error.message,
      }
    );
    dispatch({
      type: USER_SIGNIN_FAILED,
      payload: { user: {}, error: error.message },
    });
  }
};

export const userSignInSocilaMedialAction = (values) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNIN_REQUEST,
      payload: { provider: values },
    });

    const uesrAuth = await signInSocialMedia(values);
    const {
      additionalUserInfo,
      // credential,
      // operationType,
      user,
    } = uesrAuth;
    const idToken = await getIdToken();

    switch (additionalUserInfo.providerId) {
      case 'google.com':
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: {
            user: {
              isNewUser: additionalUserInfo.isNewUser,
              providerId: additionalUserInfo.providerId,
              email: additionalUserInfo.profile.email,
              firstName: additionalUserInfo.profile.family_name,
              lastName: additionalUserInfo.profile.given_name,
              name: additionalUserInfo.profile.name,
              emailVerified: user.emailVerified,
              uid: additionalUserInfo.profile.id,
              photoId: additionalUserInfo.profile.picture,
            },
            idToken: idToken,
          },
        });
        break;
      case 'facebook.com':
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: {
            user: {
              isNewUser: additionalUserInfo.isNewUser,
              providerId: additionalUserInfo.providerId,
              email: additionalUserInfo.profile.email,
              firstName: additionalUserInfo.profile.first_name,
              lastName: additionalUserInfo.profile.last_name,
              name: additionalUserInfo.profile.name,
              emailVerified: user.emailVerified,
              uid: additionalUserInfo.profile.id,
              photoId: additionalUserInfo.profile.picture.data.url,
            },
            idToken: idToken,
          },
        });
        break;

      default:
        break;
    }
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAILED,
      payload: {
        errorMessage: error.message,
      },
    });
  }
};
export const createUserByEmialPasswordAction = (
  values,
  setErrors,
  resetForm
) => async (dispatch) => {
  try {
    dispatch({
      type: USER_CREATE_REQUEST,
    });

    const userAuth = await createUserEmailPassword(values);
    const { additionalUserInfo, user } = userAuth;
    const idToken = await getIdToken();
    dispatch({
      type: USER_CREATE_SUCCESS,
      payload: {
        user: {
          isNewUser: additionalUserInfo.isNewUser,
          providerId: additionalUserInfo.providerId,
          email: user.email,
          emailVerified: user.emailVerified,
          uid: user.uid,
        },
        idToken: idToken,
      },
    });
  } catch (error) {
    setErrors({ [error.input]: [error.message] });
    dispatch({
      type: USER_CREATE_FAILED,
      payload: error,
    });
  }
};

export const reloadUserAuthDataAction = () => async (dispatch) => {
  try {
    dispatch({ type: USER_RELOAD_REQUEST });
    const reloadUser = await reloadUserAuth();
    dispatch({
      type: USER_RELOAD_SUCCESS,
      payload: reloadUser,
    });
  } catch (error) {
    dispatch({
      type: USER_RELOAD_FAILED,
      payload: error,
    });
  }
};

export const userSignOutAction = async (dispatch) => {
  try {
    dispatch({ type: USER_LOGUOT_REQUEST });
    const logOut = await signOutFirebase();
    dispatch({
      type: USER_LOGUOT_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: USER_LOGUOT_FAILED, payload: error.errorMessage });
  }
};
