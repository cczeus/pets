import React, { Component } from 'react';
import styled from 'styled-components';
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

import Chip from 'material-ui/Chip';



class Tag extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (   
    
      <Chip
          style={{ minWidth: 50, marginLeft: 10 }}
          onRequestDelete={() => this.props.handleRequestDelete(this.props.name)}
        >
          {this.props.name}
        </Chip>
   
    );
  }
}

export default Tag;
