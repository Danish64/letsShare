import React from 'react';
import {LogBox} from 'react-native';
import LetShare from './src/Letsshare';
import {Provider} from 'react-redux';
import store from './src/ducks/store';

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={store}>
      <LetShare />
    </Provider>
  );
};

export default App;
