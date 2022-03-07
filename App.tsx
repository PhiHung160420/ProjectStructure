import AppNavigator from 'navigation';
import React from 'react';
import {Provider} from 'react-redux';
import store from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
