import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const modules = [];
const store = createStore(modules, window);

export default (Comp) => {
  return class extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Comp />
        </Provider>
      );
    }
  };
};
