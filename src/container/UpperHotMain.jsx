import React, { Component } from 'react';

import classNames from 'classNames';

// Load Material UI styles.
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Load Material UI components.
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';

// Load Base Elements.
import HotManu from '../component/BaseElements/HotMenu';


class UpperHotMain extends Component {

  constructor() {
    super();
    this.state = {
      open: true
    };
  }

  showSideBar(bool) {
    console.log(arguments);
    this.setState({open: bool});
  }

  render() {
    const appTitle = 'Upper Hot';
    const style = {
      margin: 8,
      padding: 8
    };
    const contentClassnames = classNames({
      'active': this.state.open
    });
    const footerClassnames = classNames({
      'active': this.state.open,
      'footer': true
    });
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="wrapper vertical-sidebar cyan-scheme">
          <AppBar title={appTitle} onLeftIconButtonTouchTap={::this.showSideBar.bind(this, true)}/>
          <Drawer width={256} open={this.state.open} >
            <AppBar title={appTitle} onLeftIconButtonTouchTap={::this.showSideBar.bind(this, false)}/>
            <HotManu />
          </Drawer>
          <div className="main-content">
            <div className={contentClassnames}>
              <Paper style={style} zDepth={3} >
                {this.props.children}
              </Paper>
            </div>
            <div className={footerClassnames}>
              <Paper style={style} zDepth={3} >
                Copyright©1998 - 2016 中国万网 版权所有 京ICP备15035972号-1
              </Paper>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default UpperHotMain;
