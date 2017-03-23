import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class Route extends Component {

  render() {
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  }
}
