import {all, put, takeLatest, take} from 'redux-saga/effects';

import {
  loginSuccess,
  loginFaliure,
  signupSuccess,
  signupFaliure,
  authTokenSuccess,
  authTokenFailure,
} from '../../actions';

import {
  authorizeUser,
  authorizeTokenUser,
} from '../../../services/AuthenticationServices';
import {storeAuthToken} from '../../../utils/AsyncStorageUtilities';
function* loginRequest(obj) {
  // console.log('loginRequest Generator Function Called with', obj);

  const response = yield authorizeUser(obj.data);
  // console.log('Login Request Working', response);

  //Store the token

  storeAuthToken(response.token);

  if (response.data.data) {
    yield put(loginSuccess(response));
  } else {
    yield put(loginFaliure(response));
  }
}

function* signupRequest(obj) {
  console.log('SignUp Generator Function running');
  //   const response = yield doPost(obj.data, 'url');
  //   console.log('Sign up Api response', response);
  const response = {status: 'Success Code', id: 1};

  if (response.status === 'Success Code') {
    yield put(signupSuccess(response));
  } else if (response.status === 'Failure Code') {
    yield put(signupFaliure(response));
  } else {
    yield put(signupFaliure(response));
  }
}

function* setLoggedInUserInStore(obj) {
  // console.log('setLoggedInUserInStore checking token', obj.data);
  const response = yield authorizeTokenUser(obj.data);
  // console.log('setLoggedInUserInStore ->', response);

  if (response.data) {
    yield put(authTokenSuccess(response.data));
  } else {
    yield put(authTokenFailure({error: 'Invalid Token'}));
  }
}

export default function* watcher() {
  yield all([takeLatest('LOGIN_REQUEST', loginRequest)]);
  yield all([takeLatest('SIGNUP_REQUEST', signupRequest)]);
  yield all([takeLatest('AUTH_TOKEN_REQUEST', setLoggedInUserInStore)]);
}
