import { IUser } from '../../models/users';
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
  USER_RESET_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_FAILED,
  VERIFICATION_EMAIL_SEND_REQUEST,
  VERIFICATION_EMAIL_SEND_FAILED,
  VERIFICATION_EMAIL_SEND_SUCCESS,
  LOAD_CONFIRM_EMAIL_STATE_REQUEST,
  LOAD_CONFIRM_EMAIL_STATE_FAILED,
  LOAD_CONFIRM_EMAIL_STATE_SUCCESS,
  SAVE_EDITED_USER_DATA_REQUEST,
  SAVE_EDITED_USER_DATA_SUCCESS,
  SAVE_EDITED_USER_DATA_FAILED,
  USER_UPDATE_OWN_DATA,
  USER_REMOVE_REQUEST,
  USER_REMOVE_FAILED,
  USER_REMOVE_SUCCESS,
  IUserDispacheType,
} from '../constans/userConstans';


export interface IBaseState {
  isLoading: boolean,
  isError: boolean,
  errorMessage: string | null,
  idToken: string | null,
}

// export interface IUserDefaultState extends IBaseState {
//   user: IUser,
// }
export interface IUserInitialState extends IBaseState {
  // user: Partial<IUser>,
  user: Partial<IUser>,
  // user: IUser | null,
}

export const initialState: IUserInitialState = {
  user: {},
  isLoading: false,
  isError: false,
  errorMessage: null,
  idToken: null
};

const userReducer = (state: IUserInitialState = initialState, action: IUserDispacheType): IUserInitialState => {
  // const { type } = action;
  switch (action.type) {
    case USER_CREATE_REQUEST:
      return { ...state };
    case USER_CREATE_FAILED:
      return { ...state, ...action.payload.error };
    case USER_CREATE_SUCCESS:
      return { ...state, ...action.payload };

    case USER_SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        user: {
          email: undefined,
          providerId: undefined,
          emailVerified: undefined,
          isNewUser: undefined
        },
        errorMessage: null,
        idToken: null,
      };
    case USER_SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: null,
        user: action.payload.user,
        idToken: action.payload.idToken,
      };
    case USER_SIGNIN_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.error.errorMessage,
        idToken: null,
        user: {
          email: undefined,
          providerId: undefined,
          emailVerified: undefined,
          isNewUser: undefined
        },
      };
    case LOAD_CONFIRM_EMAIL_STATE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case LOAD_CONFIRM_EMAIL_STATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: {
          ...state.user,
          emailVerified: action.payload.emailVerified,
        },
        // idToken:
      };
    case LOAD_CONFIRM_EMAIL_STATE_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.errorMessage,
        // user: {},
        idToken: null,
      };

    case SAVE_EDITED_USER_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        user: {
          ...state.user,
        },
      };
    case SAVE_EDITED_USER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: {
          ...state.user,
          firstName: action.payload.user.firstName,
          lastName: action.payload.user.lastName,
          phone: action.payload.user.phone,
          nick: action.payload.user.nick,
          opinion: action.payload.user.opinion,
          email: action.payload.user.email,
        },
      };
    case SAVE_EDITED_USER_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.error.errorMessage,
        user: {
          email: undefined,
          providerId: undefined,
          emailVerified: undefined,
          isNewUser: undefined
        },
      };

    case USER_UPDATE_OWN_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.user.email,
          id: action.payload.user.id,
          credits: action.payload.user.credits,
          isAccessToMakeBooking: action.payload.user.isAccessToMakeBooking,
          isManualOwnDataUser: action.payload.user.isManualOwnDataUser,
          firstName: action.payload.user.firstName || undefined,
          lastName: action.payload.user.lastName || undefined,
          phone: action.payload.user.phone || undefined,
          nick: action.payload.user.nick || undefined,
          opinion: action.payload.user.opinion || undefined,
          entityAccess: action.payload.user.entityAccess || undefined,
        },
      };

    case USER_RELOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case USER_RELOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: {
          ...state.user,
          isNewUser: action.payload.isNewUser!,
          // providerId: action.payload?.providerData[0].providerId,
          providerId: action.payload.providerId!,
          email: action.payload.email!,
          uid: action.payload.uid!,
          emailVerified: action.payload.emailVerified!,
        },
        // idToken:
      };
    case USER_RELOAD_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.errorMessage,
        // user: {},
        idToken: null,
      };
    case USER_RESET_PASSWORD_REQUEST:
      return { ...state, ...action.payload };
    case USER_RESET_PASSWORD_SUCCESS:
      return { ...state, ...action.payload };
    case USER_RESET_PASSWORD_FAILED:
      return { ...state, ...action.payload };

    case VERIFICATION_EMAIL_SEND_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case VERIFICATION_EMAIL_SEND_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case VERIFICATION_EMAIL_SEND_FAILED:
      return { ...state, isLoading: false, isError: true, errorMessage: action.payload.errorMessage };

    case USER_LOGUOT_REQUEST:
      return { ...state };
    case USER_LOGUOT_FAILED:
      return { ...state, ...action.payload };
    case USER_LOGUOT_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        idToken: null,
        user: {
          email: undefined,
          providerId: undefined,
          emailVerified: undefined,
          isNewUser: undefined
        },
      };
    case USER_REMOVE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case USER_REMOVE_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.error.errorMessage,
        // user: {},
      };
    case USER_REMOVE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: null,
        idToken: null,
        user: {
          // user is logout after 5 second or click confirm button
          // email:undefined,
          // providerId:undefined,
          // emailVerified:undefined,
          // isNewUser:undefined,
          ...state.user
        },
      };

    default:
      process.env.NODE_ENV === 'development' &&
        console.log('Redux Default', process.env.NODE_ENV);
      console.log('Redux Default TYPE', action);
      return state;
  }
};

export default userReducer;
