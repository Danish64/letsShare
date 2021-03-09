//Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FALIURE = 'LOGIN_FALIURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FALIURE = 'SIGNUP_FALIURE';

//Store LoggedIn User
export const AUTH_TOKEN_REQUEST = 'AUTH_TOKEN_REQUEST';
export const AUTH_TOKEN_SUCCESS = 'AUTH_TOKEN_SUCCESS';
export const AUTH_TOKEN_FAILURE = 'AUTH_TOKEN_FAILURE';

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

//storeLoggedInUser
export const authTokenRequest = (token) => ({
  type: AUTH_TOKEN_REQUEST,
  data: token,
});

export const authTokenSuccess = (response) => ({
  type: AUTH_TOKEN_SUCCESS,
  data: response,
});
export const authTokenFailure = () => ({
  type: AUTH_TOKEN_FAILURE,
});
