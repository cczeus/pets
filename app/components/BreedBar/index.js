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



class BreedBar extends Component {
  constructor(props) {
    super();

    this.state = {breed: props.breed, maintenance: props.maintenance, obedience: props.obedience, loudness: props.loudness, energy: props.energy
    };
  }

  render() {
    return (   
      <div>
        <section id={styles.listItem}>{this.state.breed} {this.state.maintenance} {this.state.obedience} {this.state.loudness} {this.state.energy}</section>
      </div>
    );
  }
}

export default BreedBar;
