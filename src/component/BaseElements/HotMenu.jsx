
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MenuItem from 'material-ui/MenuItem';

class HotMenu extends Component {

  render() {
    return (
      <div>
        {/*<Link to="/v1" ><MenuItem primaryText="Refresh" /></Link>
        <Link to="/default" ><MenuItem primaryText="feedback" /></Link>*/}
        
        <MenuItem>Help &amp; feedback</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Sign out</MenuItem>
        <MenuItem>Refresh</MenuItem>
      </div>
    );
  }
}

export default HotMenu;
