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

import Info from '../Info'; 


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class Description extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div>
       <div>
            <h2 style={styles.headline}>Summary</h2>
            <p>
              Scottish Folds are hardy cats, much like their barnyard ancestors. Their disposition matches their sweet expression. They have tiny voices and are not extremely vocal. They adore human companionship and display this in their own quiet way.
            </p>
          </div>
        <div>
            <h2 style={styles.headline}>Average Life Span</h2>
            <p>
              About 15 Years
            </p>
        </div>
        <div>
            <h2 style={styles.headline}>Diet</h2>
            <p>
             The best diet is a moisture-rich, meat-filled diet. Many cats enjoy dry food, and certainly it is an easy and convenient option for guardians; however, feeding exclusively dry food is not always the best choice for your cat.
            </p>
          </div>
      </div>
     
   
    );
  }
}

export default Description;
