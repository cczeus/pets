import React, { Component } from 'react';
import styles from '../../containers/SearchPage/styles.css';
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Rating from '../../components/Rating';


class ReviewBar extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Carol Meserve',
      review: 'I love my little cutie patootie. He\'s the best dog I\'ve ever had hands down. He plays well with my little Matty.',
      tags: ['pet friendly', 'kid friendly'],
      obedience: 4,
      maintenance: 2,
      loudness: 4,
      energy: 3
    };
  }

  render() {

    var tags = this.state.tags.join(', ');
    return (   
      <Card style={{width: '100%'}}>
        <CardHeader
          title={this.state.name}
          subtitle={tags}
          actAsExpander={false}
          showExpandableButton={false}
        />
        <CardActions>
          <Rating title={'Maintenance'} value={this.state.maintenance} />
          <Rating title={'Obedience'} value={this.state.obedience} />
          <Rating title={'Loudness'} value={this.state.loudness} />
          <Rating title={'Energy'} value={this.state.energy} />
        </CardActions>
        <CardText expandable={false}>
          {this.state.review}
        </CardText>
      </Card>
    );
  }
}

export default ReviewBar;
