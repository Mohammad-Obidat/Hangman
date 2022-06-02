import React, { Component } from 'react';

export class Letter extends Component {
  render() {
    return <span className={this.props.className}>{this.props.letter}</span>;
  }
}

export default Letter;
