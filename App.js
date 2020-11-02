import React from 'react';
import LetShare from './src/Letsshare';
import {Provider} from 'react-redux';
import store from './src/ducks/store';

const App = () => {
  return (
    <Provider store={store}>
      <LetShare />
    </Provider>
  );
};

export default App;
