import React, { Component } from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack, indigoA400, deepPurpleA400,
  blue500, blue600

} from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { TOPBAR_HEIGHT } from '../../library/constants.js';
import FlexWrapper from '../../library/FlexWrapper';
import Spacer from '../../library/Spacer'; 
import Text from '../../library/Text';
import styles from '../../containers/SearchPage/styles.css'



class Info extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (   
      <div>
     
        <p>This is a description of the pet. fjeo wifjweo ijfweoijf weijf ewoijf ewoijf weifj </p>

     </div>
   
    );
  }
}

export default Info;
