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
import Rating from '../../components/Rating'



class BreedBar extends Component {
  constructor(props) {
    super();

    this.state = {
      breed: props.breed, maintenance: props.maintenance, obedience: props.obedience, loudness: props.loudness, energy: props.energy,
      tags: ['obedience', 'energy', 'trainability']
    };
  }

  render() {
    return (   
      <div style={{ borderBottom: 'solid 1px #c9c9c9', width: '100%', marginTop: 50 }} onClick={() => { browserHistory.push('/' + this.props.animal)}}>
        <FlexWrapper row flex="1" style={{  marginLeft: 16}}>
        <FlexWrapper column flex="0.05" style={{ marginTop: '-25px'}}>
           <img src={this.props.img} height="100" /> 
          </FlexWrapper>
          <FlexWrapper column flex="1" align-start style={{ marginLeft: 20}}>
            <h2>{this.props.breed} </h2> 
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper row flex="1" style={{ marginTop: 50}}>
          <FlexWrapper column flex="1" align-center>
           <Rating name="maintenance" rating={this.props.maintenance} />
          </FlexWrapper>
           <FlexWrapper column flex="1" align-center>
            <Rating name="obedience" rating={this.props.obedience} />
          </FlexWrapper>
          <FlexWrapper column flex="1" align-center>
            <Rating name="loudness" rating={this.props.loudness}/>
          </FlexWrapper>
          <FlexWrapper column flex="1" align-center>
            <Rating name="energy" rating={this.props.energy}/>
          </FlexWrapper>
        </FlexWrapper>
        <div>
        <FlexWrapper row flex="1">
         
         
        </FlexWrapper>
       
        </div>
      </div>
    );
  }
}

export default BreedBar;
