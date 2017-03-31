
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MenuItem from 'material-ui/MenuItem';

class HotMenu extends Component {

  render() {
    return (
      <div className="menu-container">
        <Link to="/" ><MenuItem>Drawcrawl</MenuItem></Link>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Sign out</MenuItem>
        <MenuItem>Refresh</MenuItem>
      </div>
    );
  }
}

export default HotMenu;
