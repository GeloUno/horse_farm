import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_SUCCESS,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_FAILED,
  USER_SIGNIN_SUCCESS,
  USER_LOGUOT_REQUEST,
  USER_LOGUOT_FAILED,
  USER_LOGUOT_SUCCESS,
} from '../constans/userConstans';
import { signInEmailPassword, signInSocialMedia } from '../firebase';

export const userSignInByEmailAction = (values, setErrors, resetForm) => async (
  dispatch
) => {
  try {
    console.log('User Actions :>> ', values.email);
    dispatch({
      type: USER_SIGNIN_REQUEST,
      payload: { provider: 'email' },
    });
    const userAuth = await signInEmailPassword(values);
    const { additionalUserInfo, user } = userAuth;

    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: {
        isNewUser: additionalUserInfo.isNewUser,
        providerId: additionalUserInfo.providerId,
        email: user.email, 
        emailVerified: user.emailVerified,
        uid: user.uid,
      },
    });

    resetForm();
  } catch (error) {
    console.log('error  CATCH ACTION:>> ', error);
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
    const { additionalUserInfo, credential, operationType, user } = uesrAuth;

    switch (additionalUserInfo.providerId) {
      case 'google.com':
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: {
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
        });
        break;
      case 'facebook.com':
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: {
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
        });
        break;

      default:
        break;
    }
  } catch (error) {
    console.log('error  CATCH Social Media:>> ', error);
    dispatch({
      type: USER_SIGNIN_FAILED,
      payload: {
        errorMessage: error.message,
      },
    });
  }
};
