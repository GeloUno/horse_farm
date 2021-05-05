
import { IUserRemove, IUserReloadConfirmEmail, IUserBaseFirebase, WithNullType, IUser } from '../../models/users';

export const USER_CREATE_REQUEST = 'USER_CREATE_REQUEST';
export const USER_CREATE_FAILED = 'USER_CREATE_FAILED';
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS';

export const USER_SIGNIN_REQUEST = 'USER_SIGNIN_REQUEST';
export const USER_SIGNIN_FAILED = 'USER_SIGNIN_FAILED';
export const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';

export const USER_RELOAD_REQUEST = 'USER_RELOAD_REQUEST';
export const USER_RELOAD_FAILED = 'USER_RELOAD_FAILED';
export const USER_RELOAD_SUCCESS = 'USER_RELOAD_SUCCESS';

export const LOAD_CONFIRM_EMAIL_STATE_REQUEST =
  'LOAD_CONFIRM_EMAIL_STATE_REQUEST';
export const LOAD_CONFIRM_EMAIL_STATE_FAILED =
  'LOAD_CONFIRM_EMAIL_STATE_FAILED';
export const LOAD_CONFIRM_EMAIL_STATE_SUCCESS =
  'LOAD_CONFIRM_EMAIL_STATE_SUCCESS';

export const SAVE_EDITED_USER_DATA_REQUEST = 'SAVE_EDITED_USER_DATA_REQUEST';
export const SAVE_EDITED_USER_DATA_FAILED = 'SAVE_EDITED_USER_DATA_FAILED';
export const SAVE_EDITED_USER_DATA_SUCCESS = 'SAVE_EDITED_USER_DATA_SUCCESS';

export const USER_RESET_PASSWORD_REQUEST = 'USER_RESET_PASSWORD_REQUEST';
export const USER_RESET_PASSWORD_FAILED = 'USER_RESET_PASSWORD_FAILED';
export const USER_RESET_PASSWORD_SUCCESS = 'USER_RESET_PASSWORD_SUCCESS';

export const USER_UPDATE_OWN_DATA = 'USER_UPDATE_OWN_DATA';

export const VERIFICATION_EMAIL_SEND_REQUEST =
  'VERIFICATION_EMAIL_SEND_REQUEST';
export const VERIFICATION_EMAIL_SEND_FAILED = 'VERIFICATION_EMAIL_SEND_FAILED';
export const VERIFICATION_EMAIL_SEND_SUCCESS =
  'VERIFICATION_EMAIL_SEND_SUCCESS';

export const USER_LOGUOT_REQUEST = 'USER_LOGUOT_REQUEST';
export const USER_LOGUOT_FAILED = 'USER_LOGUOT_FAILED';
export const USER_LOGUOT_SUCCESS = 'USER_LOGUOT_SUCCESS';

export const USER_REMOVE_REQUEST = 'USER_REMOVE_REQUEST';
export const USER_REMOVE_FAILED = 'USER_REMOVE_FAILED';
export const USER_REMOVE_SUCCESS = 'USER_REMOVE_SUCCESS';

export const USER_COOKE_TOKEN_REMOVE = 'USER_COOKE_TOKEN_REMOVE';


interface ErrorInput {
  input: string
}

export interface ErrorResponse {
  errorMessage: string,
  errorInput?: ErrorInput[] | ErrorInput
}




export interface IUserCreateByPasswordRequest {
  type: typeof USER_CREATE_REQUEST,
  payload: null
}

export interface IUserCreateByPasswordSuccess {
  type: typeof USER_CREATE_SUCCESS,
  payload: {
    user: IUserBaseFirebase
  }
}

export interface IUserCreateByPasswordFailed {
  type: typeof USER_CREATE_FAILED,
  payload: {
    error: ErrorResponse
  }
}

export type IUserCreateByPassword =
  IUserCreateByPasswordRequest | IUserCreateByPasswordSuccess |
  IUserCreateByPasswordFailed


export interface IUserSignOutRequest {
  type: typeof USER_LOGUOT_REQUEST,
  payload: null
}
export interface IUserSignOutSuccess {
  type: typeof USER_LOGUOT_SUCCESS,
  payload: null
}
export interface IUserSignOutFailed {
  type: typeof USER_LOGUOT_FAILED,
  payload:
  {
    error: ErrorResponse
  }
}

export type IUserSignOutDispatchTypes = IUserSignOutRequest | IUserSignOutSuccess | IUserSignOutFailed;




export interface IUserRemoveRequest {
  type: typeof USER_REMOVE_REQUEST,
  payload: null
}
export interface IUserRemoveSuccess {
  type: typeof USER_REMOVE_SUCCESS,
  payload: {
    user: IUserRemove
  }
}
export interface IUserRemoveFailed {
  type: typeof USER_REMOVE_FAILED,
  payload:
  {
    error: ErrorResponse
  }
}

export type IUserRemoveDispatchTypes = IUserRemoveRequest | IUserRemoveSuccess | IUserRemoveFailed;


export interface IUserUpdateOwnData {
  type: typeof USER_UPDATE_OWN_DATA,
  payload: {
    user: IUser
  }
}

export type IUserUpdateData = IUserUpdateOwnData;


export interface IUserRemoveCookieToken {
  type: typeof USER_COOKE_TOKEN_REMOVE
}



export interface IUserReloadConfirmEmailStateRequest {
  type: typeof LOAD_CONFIRM_EMAIL_STATE_REQUEST,
  payload: null
}

export interface IUserReloadConfirmEmailStateSuccess {
  type: typeof LOAD_CONFIRM_EMAIL_STATE_SUCCESS,
  payload: IUserReloadConfirmEmail
}

export interface IUserReloadConfirmEmailStateFailed {
  type: typeof LOAD_CONFIRM_EMAIL_STATE_FAILED,
  payload: ErrorResponse
}

export type IUserReloadConfirmEmailState =
  IUserReloadConfirmEmailStateRequest | IUserReloadConfirmEmailStateSuccess |
  IUserReloadConfirmEmailStateFailed

export interface IUserReloadFirebaseRequest {
  type: typeof USER_RELOAD_REQUEST,
  payload: null
}

export interface IUserReloadFirebaseSuccess {
  type: typeof USER_RELOAD_SUCCESS,
  payload: WithNullType<IUserBaseFirebase>
}

export interface IUserReloadFirebaseFailed {
  type: typeof USER_RELOAD_FAILED,
  payload: ErrorResponse
}

export type IUserReloadFirebase =
  IUserReloadFirebaseRequest | IUserReloadFirebaseSuccess |
  IUserReloadFirebaseFailed


export interface IUserSendVerificationEmailRequest {
  type: typeof VERIFICATION_EMAIL_SEND_REQUEST,
  payload: null
}

export interface IUserSendVerificationEmailSuccess {
  type: typeof VERIFICATION_EMAIL_SEND_SUCCESS,
  payload: null
}

export interface IUserSendVerificationEmailFailed {
  type: typeof VERIFICATION_EMAIL_SEND_FAILED,
  payload: ErrorResponse
}

export type IUserSendVerificationEmail =
  IUserSendVerificationEmailRequest | IUserSendVerificationEmailSuccess |
  IUserSendVerificationEmailFailed


export interface IUserSendEmailToResetPasswordRequest {
  type: typeof USER_RESET_PASSWORD_REQUEST,
  payload: {
    isLoading: boolean,
    isError: boolean
  }
}

export interface IUserSendEmailToResetPasswordSuccess {
  type: typeof USER_RESET_PASSWORD_SUCCESS,
  payload: {
    isLoading: boolean,
    isError: boolean,
    Message: string
  }
}

export interface IUserSendEmailToResetPasswordFailed {
  type: typeof USER_RESET_PASSWORD_FAILED,
  payload: {
    isLoading: boolean,
    isError: boolean,
    error: ErrorResponse
  }
}

export type IUserSendEmailToResetPassword =
  IUserSendEmailToResetPasswordRequest | IUserSendEmailToResetPasswordSuccess |
  IUserSendEmailToResetPasswordFailed


export interface IUserSaveEditedDataRequest {
  type: typeof SAVE_EDITED_USER_DATA_REQUEST,
  payload: null
}

export interface IUserSaveEditedDataSuccess {
  type: typeof SAVE_EDITED_USER_DATA_SUCCESS,
  payload: {
    user: Partial<IUser>
  }
}

export interface IUserSaveEditedDataFailed {
  type: typeof SAVE_EDITED_USER_DATA_FAILED,
  payload: {
    error: ErrorResponse
  }
}

export type IUserSaveEditedData =
  IUserSaveEditedDataRequest | IUserSaveEditedDataSuccess |
  IUserSaveEditedDataFailed




export interface IUserSigninSocialMediaRequest {
  type: typeof USER_SIGNIN_REQUEST,
  payload: null
}

export interface IUserSigninSocialMediaSuccess {
  type: typeof USER_SIGNIN_SUCCESS,
  payload: {
    user: IUserBaseFirebase,
    idToken: string
  },
}

export interface IUserSigninSocialMediaFailed {
  type: typeof USER_SIGNIN_FAILED,
  payload: {
    error: ErrorResponse
  }
}

export type IUserSigninSocialMedia =
  IUserSigninSocialMediaRequest | IUserSigninSocialMediaSuccess |
  IUserSigninSocialMediaFailed


export interface IUserSigninByEmailRequest {
  type: typeof USER_SIGNIN_REQUEST,
  payload: null
}

export interface IUserSigninByEmailSuccess {
  type: typeof USER_SIGNIN_SUCCESS,
  payload: {
    user: IUserBaseFirebase,
    idToken: string
  },
}

export interface IUserSigninByEmailFailed {
  type: typeof USER_SIGNIN_FAILED,
  payload: {
    error: ErrorResponse
  }
}



export type IUserSigninByEmail =
  IUserSigninByEmailRequest | IUserSigninByEmailSuccess |
  IUserSigninByEmailFailed


export type IUserDispacheType =
  | IUserSigninByEmail
  | IUserSigninSocialMedia
  | IUserCreateByPassword
  | IUserSaveEditedData
  | IUserSendEmailToResetPassword
  | IUserSendEmailToResetPassword
  | IUserSendVerificationEmail
  | IUserReloadFirebase
  | IUserReloadConfirmEmailState
  | IUserRemoveDispatchTypes
  | IUserSignOutDispatchTypes
  | IUserUpdateData