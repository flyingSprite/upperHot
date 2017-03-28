// Styles - Public
import 'material-design-icons';

import './assert/index.scss';


// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import UpperHotRoute from './route';

// Store
import configureStore from './store/reduxStore';

const store = configureStore();

try {
  injectTapEventPlugin();
} catch(e) {
  // ...
}

ReactDOM.render(
  <Provider store={store}>
    <UpperHotRoute />
  </Provider>,
  document.getElementById('root')
);
