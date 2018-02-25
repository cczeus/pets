import React, { Component } from 'react';
import TheRating from 'react-rating'


class Rating extends Component {
  constructor(props) {
    super();

    this.state = {
      title: props.title,
      value: props.value
    };
  }

  render() {
    return (
      <div style={{ width: 150 }}>
        <TheRating initialRating={this.props.rating ? this.props.rating : 5} />
        <p style={{ textAlign: 'center' }}>{this.props.name}</p>
      </div>
    );
  }
}

export default Rating;
