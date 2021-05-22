import React from 'react';
import { Child } from './Child';

export class LifeTime extends React.Component {
  state = {
    x: 0,
    color: 'red'
  }

  

  render() {
    console.log('state value is: ', this.state.x)
    return (
      <>
        <div>The number is: {this.state.x}</div>
        <Child color={this.state.color}></Child>
      </>
    )
  }

  componentDidMount() {
    console.log('======')
    setTimeout(() => {
      this.setState((preSate) => {
        return {
          x: preSate.x + 1,
          color: 'blue'
        }
      })
    }, 3000)
  }
}