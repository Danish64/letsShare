//Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FALIURE = 'LOGIN_FALIURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FALIURE = 'SIGNUP_FALIURE';

//Login Request Actions
export const loginRequest = (obj) => ({
  type: LOGIN_REQUEST,
  data: obj,
});

export const loginSuccess = (response) => ({
  type: LOGIN_SUCCESS,
  data: response,
});
export const loginFaliure = (response) => ({
  type: LOGIN_FALIURE,
  data: {
    ...response,
  },
});

//Signup Request Actions
export const signupRequest = (obj) => ({
  type: SIGNUP_REQUEST,
  data: obj,
});

export const signupSuccess = (response) => ({
  type: SIGNUP_SUCCESS,
  data: response,
});
export const signupFaliure = (response) => ({
  type: SIGNUP_FALIURE,
  data: response,
});
