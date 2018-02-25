import React, { Component } from 'react';


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
      <p>{this.state.title}: {this.state.value}</p>
    );
  }
}

export default Rating;
