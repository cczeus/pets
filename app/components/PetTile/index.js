import React, { Component } from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { browserHistory } from 'react-router';

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



class PetTile extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (   
      <article className={styles["style" + this.props.type]} onClick={() => {browserHistory.push('/breedlist/' + this.props.name.toLowerCase())}}>
        <span className={styles.image}>
          <img src="img/pic08.jpg" alt="" height={300}/>
        </span>
        <a>
          <h2>{this.props.name}</h2>
          <div className={styles.content}>
            
          </div>
        </a>
      </article>
     
   
    );
  }
}

export default PetTile;
