import React from 'react';
import CounterComponent from './features/CounterComponent';
import { Provider } from 'react-redux';
import { store } from '@m-repo1/store';

export const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

export default App;
