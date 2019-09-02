export const types = {
  SIGN_IN: 'auth/SIGN_IN',
  SIGN_IN_SUCCESS: 'auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'auth/SIGN_IN_FAILURE',

  CLEAR_ERROR: 'auth/CLEAR_ERROR',

  GET_USER_INFO: 'auth/GET_USER_INFO',
  GET_USER_INFO_SUCCESS: 'auth/GET_USER_INFO_SUCCESS',
  GET_USER_INFO_FAILURE: 'auth/GET_USER_INFO_FAILURE',

  SIGN_OUT: 'auth/SIGN_OUT',
  SIGN_OUT_SUCCESS: 'auth/SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE: 'auth/SIGN_OUT_FAILURE'
};

export const signIn = (email, password) => ({
  type: types.SIGN_IN,
  email,
  password
});

export const signInSuccess = token => ({
  type: types.SIGN_IN_SUCCESS,
  token
});

export const signInFailure = error => ({
  type: types.SIGN_IN_FAILURE,
  error
});

export const clearError = () => ({
  type: types.CLEAR_ERROR
});

export const getUserInfo = () => ({
  type: types.GET_USER_INFO
});

export const getUserInfoSuccess = user => ({
  type: types.GET_USER_INFO_SUCCESS,
  user
});

export const getUserInfoFailure = error => ({
  type: types.GET_USER_INFO_FAILURE,
  error
});

export const signOut = () => ({
  type: types.SIGN_OUT
});

export const signOutSuccess = () => ({
  type: types.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: types.SIGN_OUT_FAILURE,
  error
});
