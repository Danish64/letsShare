import {combineReducers} from 'redux';
import userInformation from './userInformation';

//Whenever you make a new reducer add them here..

const appReducer = combineReducers({
  userInformation,
});
const rootReducer = (state, action) => {
  /* This Snippet is used to clear the app state(Reset) */
  // if (action.type === 'LOGOUT_SUCCESS') {
  //   state = undefined;

  // }
  // if (action.type === 'LOGOUT_FALIURE') {
  //     state = undefined;

  //   }
  //   if (action.type === 'LOGOUT_REQUEST') {
  //     state = undefined;

  //   }

  return appReducer(state, action);
};

export default rootReducer;
