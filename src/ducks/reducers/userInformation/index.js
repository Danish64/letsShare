import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FALIURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FALIURE,
} from '../../actions';

//Contains the state of the application
//User Information will be stored in this reducer.
//There must be different reducers for different things,to maintain readability

const initialState = {
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
        loginResponse: action.data,
      };
    case LOGIN_FALIURE:
      return {
        ...state,
        isLoading: false,
        message: 'In valid Username/Password',
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

    default:
      return state;
  }
};

export default userInformation;
