// Styles - Public
import 'material-design-icons';

import './assert/index.scss';


// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Load Material UI
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

import UpperHotRoute from './route';

// Store
import configureStore from './store/reduxStore';

const store = configureStore();

injectTapEventPlugin();
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="wrapper vertical-sidebar cyan-scheme">
        <UpperHotRoute />
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
