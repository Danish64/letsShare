import React, {useState, useMemo, useContext} from 'react';
import LetShare from './src/Letsshare';
import {Provider} from 'react-redux';
import store from './src/ducks/store';
import userInformation from './src/ducks/reducers/userInformation';

const App = () => {
  return (
    <Provider store={store}>
      <LetShare />
    </Provider>
  );
};

export default App;
