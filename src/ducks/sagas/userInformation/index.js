import {all, put, takeLatest, take} from 'redux-saga/effects';

import {
  loginSuccess,
  loginFaliure,
  signupSuccess,
  signupFaliure,
} from '../../actions';

import {authorizeUser} from '../../../services/AuthenticationServices';

function* loginRequest(obj) {
  // console.log('loginRequest Generator Function Called with', obj);

  const response = yield authorizeUser(obj.data);
  console.log('Login Request Working', response);

  //Store the token

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

export default function* watcher() {
  yield all([takeLatest('LOGIN_REQUEST', loginRequest)]);
  yield all([takeLatest('SIGNUP_REQUEST', signupRequest)]);
}
