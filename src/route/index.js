import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Load Material UI styles.
import UpperHotMain from '../container/UpperHotMain';

// Load container pages.
import DefaultDashboard from '../container/Dashboard/DefaultDashboard'
import DashboardV1 from '../container/Dashboard/DashboardV1'

export default class UpperHotRoute extends Component {

  render() {
    const appTitle = 'Upper Hot';
    return (
      <Router>
        <UpperHotMain>
          <Route exact path="/" component={DashboardV1}/>
          <Route path="/default" component={DefaultDashboard}/>
          <Route path="/v1" component={DashboardV1}/>
        </UpperHotMain>
      </Router>
    );
  }
}
