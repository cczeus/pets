import React, { Component } from 'react';
import styles from '../../containers/SearchPage/styles.css';
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Rating from '../../components/Rating';
import TheRating from 'react-rating'
import FlexWrapper from '../../library/FlexWrapper';
import Chip from 'material-ui/Chip'; 


class ReviewBar extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Carol Meserve',
      review: 'I love my little cutie patootie. He\'s the best dog I\'ve ever had hands down. He plays well with my little Matty.',
      tags: ['pet friendly', 'kid friendly', 'loyal'],
      obedience: 4,
      maintenance: 2,
      loudness: 4,
      energy: 3
    };
  }
  render() {
    var tags = this.state.tags.join(', ');

    return (   
      <div style={{ borderBottom: 'solid 1px #c9c9c9', width: '100%', marginTop: 50 }}>
        <FlexWrapper row flex="1" style={{  marginLeft: 16}}>
          <FlexWrapper column flex="1">
           <Rating name="Maintenance" rating={4}/>
          </FlexWrapper>
           <FlexWrapper column flex="1">
            <Rating name="Obedience" rating={2}/>
          </FlexWrapper>
          <FlexWrapper column flex="1">
            <Rating name="Loudness" rating={3}/>
          </FlexWrapper>
          <FlexWrapper column flex="1">
            <Rating name="Energy Level" rating={3}/>
          </FlexWrapper>
        </FlexWrapper>
        <div>
        <FlexWrapper row flex="1">
         
          {this.state.tags.map(function(item, i){
              return (
                <FlexWrapper column style={{ paddingLeft: 5}}>
                  <Chip>{item}</Chip>
                </FlexWrapper>
              )
          })}
        </FlexWrapper>
        <div style={{  
          fontStyle: 'italic',
          margin:'1em 0 0em 0',
          padding: '0.05em 0 0.05em 0.05em'}}>
            <p>"I love my scottish fold! He likes to play, but generally doesn't require too much attention from you and is generally somewhat active. Scottish folds are fairly high maintenance. They require weekly brushing and clipping of their toenails."</p>
             <p>- Matt</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewBar;