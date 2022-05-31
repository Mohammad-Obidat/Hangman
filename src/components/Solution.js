import React, { Component } from 'react';

export class Solution extends Component {
  render() {
    let underscores = ['_ ', '_ ', '_ ', '_'];

    return (
      <div>
        {underscores.map((u) => (
          <span>{u}</span>
        ))}
      </div>
    );
  }
}

export default Solution;
