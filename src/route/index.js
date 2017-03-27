import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Dashboard from '../container/Dashboard/Dashboard'

export default class UpperHotRoute extends Component {

  render() {
    return (<Router>
      <div>
        <Route exact path="/" component={Dashboard}/>
      </div>
    </Router>);
  }
}
