import { takeLatest, call, put } from "@redux-saga/core/effects";
import { types, signInSuccess, signInFailure, getUserInfoFailure, getUserInfoSuccess } from "./actions";
import { setAuthToken, clearAuthToken } from "../../utils/storageUtils";
import * as authService from "../../services/authService";

function* handleSignIn({ email, password }) {
  try {
    const { token } = yield call(authService.signIn, email, password);
    yield put(signInSuccess(token));
  } catch (err) {
    const message = 'Failed to sign in';
    const error = {
      message,
      details: err
    }
    console.error(error);
    clearAuthToken();
    yield put(signInFailure(error));
  }
}

function* handleGetUserInfo() {
  try {
    const user = yield call(authService.getUserInfo);
    yield put(getUserInfoSuccess(user));
  } catch (err) {
    console.error(err);
    const error = {
      message: 'Failed to get user info',
      details: err
    };
    yield put(getUserInfoFailure(error));
  }
}

function handleSignOut() {
  clearAuthToken();
  window.location.href = "/login";
}

function handleSignInSuccess({ token }) {
  setAuthToken(token);
}

function handleGetUserInfoFailure() {
  clearAuthToken();
  window.location.href = "/login";
}

export default function* () {
  yield takeLatest(types.SIGN_IN, handleSignIn);
  yield takeLatest(types.SIGN_OUT, handleSignOut);
  yield takeLatest(types.GET_USER_INFO, handleGetUserInfo);

  yield takeLatest(types.SIGN_IN_SUCCESS, handleSignInSuccess);
  yield takeLatest(types.GET_USER_INFO_FAILURE, handleGetUserInfoFailure);
}
