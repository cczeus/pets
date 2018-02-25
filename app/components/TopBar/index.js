import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {orange500, blue500, red500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';

import { TOPBAR_HEIGHT, C_BLUE_300, blue600, grey400, cyan500, grey300, white, fullBlack, C_BLUE_400, darkBlack, pinkA200, arkBlack, grey500, grey100, C_BLUE_700, C_WHITE, C_PRIMARY_TEXT, C_PRIMARY_BACKGROUND, C_SECONDARY} from '../../library/constants.js';
import Search from 'material-ui/svg-icons/action/search';
injectTapEventPlugin();

import FlexWrapper from '../../library/FlexWrapper';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue600,
    primary2Color: blue600,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack,
  },
  appBar: {
    height: TOPBAR_HEIGHT,
  },
});

const styles = {
 
  underlineStyle: {
    borderColor: C_BLUE_400,
    width: 0

  },
  floatingLabelStyle: {
    color: 'white',
    top: '-20px'
  },
  floatingLabelFocusStyle: {
    color: '#BBDEFB',
  },
  underlineFocusStyle: {
    borderColor: '#BBDEFB'
  },
  hintStyle: {
    top: '9px',
    left: '45px',
    color: '#BBDEFB',
  }

};

class Topbar extends Component {
  constructor() {
    super();

    this.state = {
     
     };
   this.handleChange= this.handleChange.bind(this);
   this.handleOpenMenu = this.handleOpenMenu.bind(this);
   this.handleOnRequestChange = this.handleOnRequestChange.bind(this);
   this.handleOptionChange = this.handleOptionChange.bind(this);
  }
   handleOpenMenu() {
    this.setState({
      openMenu: true,
    });
  }
   handleOnRequestChange (event, index, value) {
    console.log("value os " + value);
    this.setState({
      openMenu: value,
      label: value,
    });
  }
   handleOptionChange(event, value) {
     this.setState({
      value: value,
    });
  }
  handleChange (event, index, value) { this.setState({value}) };
  render() {
    return (
       <MuiThemeProvider muiTheme = {muiTheme}>
      <div>
      <AppBar
        showMenuIconButton={false}
        style={{zIndex: 3000, margin: 0, position: 'relative'}}
        height={200}
        iconElementRight={
          <span>
            <FlatButton label="Description" style={{color: 'white', top:'5px' }}/>
            <FlatButton label="User Ratings" style={{ color: 'white', top:'5px' }}/>
          </span>
        }
      >
    
        </AppBar>
</div>
  </MuiThemeProvider>
    );
  }
}

export default Topbar;