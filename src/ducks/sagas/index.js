import {all} from 'redux-saga/effects';

import userInfoWatcher from './userInformation';

export default function* rootWatchers() {
  yield all([userInfoWatcher()]);
}
