import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FALIURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FALIURE,
  AUTH_TOKEN_REQUEST,
  AUTH_TOKEN_SUCCESS,
  AUTH_TOKEN_FAILURE,
} from '../../actions';

//Contains the state of the application
//User Information will be stored in this reducer.
//There must be different reducers for different things,to maintain readability

const initialState = {
  user: {},
  error: '',
  message: '',
  isLoading: false,
};

const userInformation = (state = initialState, action) => {
  //console.log("State",action)
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, isLoading: true};
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: 'Login Succeed',
        user: action.data.data.data,
      };
    case LOGIN_FALIURE:
      return {
        ...state,
        isLoading: false,
        error: action.data.errorCode,
        message: action.data.message,
      };

    case SIGNUP_REQUEST:
      return {...state, isLoading: true};
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,

        message: 'Registered Sucessfull',
      };
    case SIGNUP_FALIURE:
      return {
        ...state,
        isLoading: false,
        message: 'Registration Failed',
      };

    case AUTH_TOKEN_REQUEST:
      return {...state, isLoading: true};
    case AUTH_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: 'Login Succeed',
        user: action.data,
      };
    case AUTH_TOKEN_FAILURE:
      return {
        ...state,
        isLoading: false,
        message: 'Invalid Token',
      };

    default:
      return state;
  }
};

export default userInformation;
