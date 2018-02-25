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
             The Golden Retriever is one of the most popular dog breeds in the U.S. The breed's friendly, tolerant attitude makes him a fabulous family pet, and his intelligence makes him a highly capable working dog. Golden Retrievers excel at retrieving game for hunters, tracking, sniffing out drugs, and as therapy and assistance dogs.
            </p>
          </div>
        <div>
            <h2 style={styles.headline}>Average Life Span</h2>
            <p>
              10-12 Years
            </p>
        </div>
        <div>
            <h2 style={styles.headline}>Diet</h2>
            <p>
            Consider some natural foods to provide some variety. Natural foods include fresh human-grade raw meat, raw meaty bones and vegetables. Dogs may be offered fish, such as tinned sardines, tinned tuna and tinned salmon as a treat occasionally (take care with any fish bones), but fish should not be fed constantly and choose fish canned in spring water rather than oil or brine.
            </p>
          </div>
      
      
      </div>
     
   
    );
  }
}

export default Description;
