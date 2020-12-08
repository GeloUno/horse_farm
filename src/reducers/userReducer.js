import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_SUCCESS,
  USER_LOGUOT_REQUEST,
  USER_LOGUOT_FAIL,
  USER_LOGUOT_SUCCESS,
} from '../constans/userConstans';

const initialState = {
  user: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SIGNUP_REQUEST:
      return { ...state, ...payload };
    case USER_SIGNUP_FAIL:
      return { ...state, ...payload };
    case USER_SIGNUP_SUCCESS:
      return { ...state, ...payload };

    case USER_SIGNIN_REQUEST:
      return { ...state, ...payload };
    case USER_SIGNIN_FAIL:
      return { ...state, ...payload };
    case USER_SIGNIN_SUCCESS:
      return { ...state, ...payload };

    case USER_LOGUOT_REQUEST:
      return { ...state, ...payload };
    case USER_LOGUOT_FAIL:
      return { ...state, ...payload };
    case USER_LOGUOT_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default userReducer;
