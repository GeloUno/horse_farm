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

const initialState = {
  user: {},
  loading: false,
  error: false,
  errorMessage: '',
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_SIGNUP_REQUEST:
      return { ...state, ...payload };
    case USER_SIGNUP_FAILED:
      return { ...state, ...payload };
    case USER_SIGNUP_SUCCESS:
      return { ...state, ...payload };

    case USER_SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        user: {},
        errorMessage: '',
        provider: payload.provider,
      };
    case USER_SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: payload.errorMessage,
        user: {},
      };
    case USER_SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        user: payload,
      };

    case USER_LOGUOT_REQUEST:
      return { ...state, ...payload };
    case USER_LOGUOT_FAILED:
      return { ...state, ...payload };
    case USER_LOGUOT_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default userReducer;
