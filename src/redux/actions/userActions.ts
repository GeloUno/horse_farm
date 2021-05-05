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
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_FAILED,
  USER_RESET_PASSWORD_SUCCESS,
  VERIFICATION_EMAIL_SEND_REQUEST,
  VERIFICATION_EMAIL_SEND_FAILED,
  VERIFICATION_EMAIL_SEND_SUCCESS,
  LOAD_CONFIRM_EMAIL_STATE_REQUEST,
  LOAD_CONFIRM_EMAIL_STATE_SUCCESS,
  LOAD_CONFIRM_EMAIL_STATE_FAILED,
  SAVE_EDITED_USER_DATA_REQUEST,
  SAVE_EDITED_USER_DATA_FAILED,
  SAVE_EDITED_USER_DATA_SUCCESS,
  USER_UPDATE_OWN_DATA,
  USER_COOKE_TOKEN_REMOVE,
  USER_REMOVE_REQUEST,
  USER_REMOVE_FAILED,
  USER_REMOVE_SUCCESS,
  IUserRemoveDispatchTypes,
  IUserUpdateData,
  IUserRemoveCookieToken,
} from '../constans/userConstans';
import {
  getIdToken,
  signInEmailPassword,
  signInSocialMedia,
  signOutFirebase,
  createUserEmailPassword,
  reloadUserAuth,
  sendEmailToResetPassword,
  sendVerificationEmail,
} from '../../firebase';
import { httpRequest } from '../../utility/httpRequest';
import Cookies from 'universal-cookie';
import { Dispatch } from 'redux'
import {
  IUserSignOutDispatchTypes,
  IUserReloadConfirmEmailState,
  IUserReloadFirebase,
  IUserSendVerificationEmail,
  IUserSendEmailToResetPassword,
  IUserSaveEditedData,
  IUserCreateByPassword,
  IUserSigninSocialMedia,
  IUserSigninByEmail,
  ErrorResponse
} from '../constans/userConstans';
import { IUserBaseMongoBD } from '../../models/users';

export const userSignInByEmailAction = (values: any, setErrors: any, resetForm: any) => async (
  dispatch: Dispatch<IUserSigninByEmail>
) => {
  try {
    dispatch({
      type: USER_SIGNIN_REQUEST,
      payload: null
    });

    const userAuth = await signInEmailPassword(values);
    const additionalUserInfo = userAuth.additionalUserInfo;
    const user = userAuth.user;

    const idToken = await getIdToken();
    if (user != null) {

      dispatch({
        type: USER_SIGNIN_SUCCESS,
        payload: {
          user: {
            isNewUser: additionalUserInfo?.isNewUser,
            providerId: additionalUserInfo!.providerId,
            email: user.email!,
            emailVerified: user!.emailVerified,
            uid: user!.uid,
          },
          idToken: idToken,
        },
      });
      resetForm();
    }
  } catch (error) {
    setErrors(
      { [error.input]: [error.message] } || {
        input: 'errorMessageSocialMedia',
        message: error.message,
      }
    );

    const errorResponse: ErrorResponse = {
      errorMessage: error.message,
    }

    dispatch({
      type: USER_SIGNIN_FAILED,
      payload: {
        error: errorResponse
      },
    });
  }
};

export const userSignInSocilaMedialAction = (values: any) => async (dispatch: Dispatch<IUserSigninSocialMedia>) => {
  try {
    dispatch({
      type: USER_SIGNIN_REQUEST,
      payload: null,
    });
    // firebase didn't define nested types for profile, so it is type any
    const uesrAuth: any = await signInSocialMedia(values);
    const {
      additionalUserInfo,
      // credential,
      // operationType,
      user,
    } = uesrAuth;
    const idToken = await getIdToken();

    switch (additionalUserInfo?.providerId) {
      case 'google.com':
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: {
            user: {
              isNewUser: additionalUserInfo.isNewUser,
              providerId: additionalUserInfo.providerId,
              email: additionalUserInfo.profile.email,
              firstName: additionalUserInfo.profile?.family_name,
              lastName: additionalUserInfo.profile.given_name,
              name: additionalUserInfo.profile.name,
              emailVerified: user.emailVerified,
              photoId: additionalUserInfo.profile.picture,
              uid: user.uid,
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
              email: additionalUserInfo.profile?.email,
              firstName: additionalUserInfo.profile?.first_name,
              lastName: additionalUserInfo.profile?.last_name,
              name: additionalUserInfo.profile?.name,
              emailVerified: user?.emailVerified,
              uid: user?.uid,
              photoId: additionalUserInfo.profile?.picture.data.url,
            },
            idToken: idToken,
          },
        });
        break;

      default:
        break;
    }

  } catch (error) {

    const errorResponse: ErrorResponse = {
      errorMessage: error.message,
    }
    dispatch({
      type: USER_SIGNIN_FAILED,
      payload: {
        error: errorResponse,
      },
    });
  }
};
export const createUserByEmialPasswordAction = (
  values: any,
  setErrors: any,
  resetForm: any
) => async (dispatch: Dispatch<IUserCreateByPassword>) => {
  try {
    dispatch({
      type: USER_CREATE_REQUEST,
      payload: null
    });

    const userAuth = await createUserEmailPassword(values);
    const { additionalUserInfo, user } = userAuth;
    const idToken = await getIdToken();
    if (user) {
      dispatch({
        type: USER_CREATE_SUCCESS,
        payload: {
          user: {
            isNewUser: additionalUserInfo!.isNewUser,
            providerId: additionalUserInfo!.providerId,
            email: user.email!,
            emailVerified: user.emailVerified,
            uid: user.uid,
          },
          idToken: idToken,
        },
      });
    }
  } catch (error) {
    setErrors({ [error.input]: [error.message] });
    dispatch({
      type: USER_CREATE_FAILED,
      payload: error,
    });
  }
};

export const seveEditedUserDataAction = (values: any, userParam: any) => async (
  dispach: Dispatch<IUserSaveEditedData>
) => {

  const user = {
    id: userParam.id,
    email: values.email,
    firstName: values.firstName,
    lastName: values.lastName,
    nick: values.nick,
    phone: values.phone,
    uid: userParam.uid,
    providerId: userParam.providerId,
    emailVerified: userParam.emailVerified,
    opinion: values.opinion,
  };
  dispach({
    type: SAVE_EDITED_USER_DATA_REQUEST,
    payload: null
  });
  try {
    const data = await httpRequest('user/updateEditedData', 'patch', user);

    const dataUser = await data.user;

    dispach({
      type: SAVE_EDITED_USER_DATA_SUCCESS,
      payload: {
        user: dataUser
      },
    });
  } catch (error) {
    console.log('error', error);
    dispach({
      type: SAVE_EDITED_USER_DATA_FAILED,
      payload: error,
    });
  }
};

export const sendEmailToResetPasswordAction = (
  values: any,
  setResetPasswordModalShow: any,
  setErrors: any,
  resetForm: any
) => async (dispach: Dispatch<IUserSendEmailToResetPassword>) => {
  try {
    dispach({
      type: USER_RESET_PASSWORD_REQUEST,
      payload: {
        isLoading: true,
        isError: false,
      },
    });
    await sendEmailToResetPassword(values.email);
    dispach({
      type: USER_RESET_PASSWORD_SUCCESS,
      payload: {
        isLoading: false,
        isError: false,
        Message: 'send email to reset password',
      },
    });
    resetForm();
    setResetPasswordModalShow(false);
  } catch (error) {
    setErrors({ [error.input]: [error.message] });
    dispach({
      type: USER_RESET_PASSWORD_FAILED,
      payload: {
        isLoading: false,
        isError: true,
        error: error.message,
      },
    });
  }
};

export const sendVerificationEmailAction = () => async (dispach: Dispatch<IUserSendVerificationEmail>) => {
  try {
    dispach({
      type: VERIFICATION_EMAIL_SEND_REQUEST,
      payload: null
    });
    await sendVerificationEmail();
    dispach({
      type: VERIFICATION_EMAIL_SEND_SUCCESS,
      payload: null
    });
  } catch (error) {
    dispach({
      type: VERIFICATION_EMAIL_SEND_FAILED,
      payload: error.message
    });
  }
};

export const reloadUserAuthDataAction = () => async (dispatch: Dispatch<IUserReloadFirebase>) => {
  try {
    dispatch({
      type: USER_RELOAD_REQUEST,
      payload: null
    });
    const reloadUser = await reloadUserAuth();

    if (reloadUser != null) {
      dispatch({
        type: USER_RELOAD_SUCCESS,
        payload: reloadUser,
      });
    }
  } catch (error) {
    dispatch({
      type: USER_RELOAD_FAILED,
      payload: error,
    });
  }
};
export const reloadConfirmEmalStateAction = () => async (dispatch: Dispatch<IUserReloadConfirmEmailState>) => {
  try {
    dispatch({
      type: LOAD_CONFIRM_EMAIL_STATE_REQUEST,
      payload: null
    });
    const reloadUser = await reloadUserAuth();

    if (reloadUser?.emailVerified) {
      dispatch({
        type: LOAD_CONFIRM_EMAIL_STATE_SUCCESS,
        payload: reloadUser!,
      });
    }
  } catch (error) {
    dispatch({
      type: LOAD_CONFIRM_EMAIL_STATE_FAILED,
      payload: error,
    });
  }
};

export const updateOwnDataUserAction = (user: any) => (dispatch: Dispatch<IUserUpdateData>) => {
  dispatch({
    type: USER_UPDATE_OWN_DATA,
    payload: user,
  });
};
export const userRemoveCookieTokenAction = (dispatch: Dispatch<IUserRemoveCookieToken>) => {
  const cookies = new Cookies();
  cookies.remove('idToken', {
    path: '/',
  })
  dispatch({
    type: USER_COOKE_TOKEN_REMOVE
  })
}

export const userSignOutAction = async (dispatch: Dispatch<IUserSignOutDispatchTypes>) => {
  try {
    dispatch({
      type: USER_LOGUOT_REQUEST,
      payload: null
    });

    await signOutFirebase();
    dispatch({
      type: USER_LOGUOT_SUCCESS,
      payload: null
    });
  } catch (error) {
    dispatch({
      type: USER_LOGUOT_FAILED,
      payload: error.errorMessage
    });
  }
};

export const userRemoveAction = (user: IUserBaseMongoBD) => async (dispatch: Dispatch<IUserRemoveDispatchTypes>) => {

  try {
    dispatch({
      type: USER_REMOVE_REQUEST,
      payload: null
    })
    const dataUserRemove = await httpRequest('user/deleteUser', 'delete', user);

    dispatch({
      type: USER_REMOVE_SUCCESS,
      payload: dataUserRemove
    })
  } catch (error) {
    dispatch({
      type: USER_REMOVE_FAILED,
      payload: error
    })
  }
}
