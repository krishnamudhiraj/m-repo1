import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '@m-repo1/store';
import Routes from './routes';

export const App = () => {
  return (
    <Provider store={store}>
      {/* <Text>HI</Text> */}
      <Routes />
    </Provider>
  );
};

export default App;
