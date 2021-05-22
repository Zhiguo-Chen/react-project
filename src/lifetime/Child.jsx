import React from 'react';

export class Child extends React.PureComponent {
  state = {
    color: ''
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.color === prevState.color) {
      return null;
    } else {
      console.log('====')
      return {
        color: nextProps.color
      }
    }
  }
  render() {
    return (
      <div>color: {this.state.color}</div>
    )
  }
}