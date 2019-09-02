import { types } from "./actions";

const initialState = {
  loading: false,
  token: null,
  user: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      return { ...state, loading: true };

    case types.SIGN_IN_SUCCESS:
      return { ...state, loading: false, token: action.token, error: null };

    case types.GET_USER_INFO_SUCCESS:
      return { ...state, loading: false, user: action.user };

    case types.SIGN_OUT_SUCCESS:
      return { ...state, loading: false, error: null };

    case types.SIGN_IN_FAILURE:
    case types.GET_USER_INFO_FAILURE:
      return { ...state, loading: false, error: action.error };

    case types.CLEAR_ERROR:
      return { ...state, error: null };

    default:
      break;
  }

  return state;
};

export default authReducer;
