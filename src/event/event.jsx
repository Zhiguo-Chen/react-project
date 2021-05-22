import React from 'react';

export class Event extends React.Component {

  handleEvent(args) {
    return () => {
      console.log(args)
    }
  }
  render() {
    return <button onClick={this.handleEvent('Hello')}>It is button</button>
  }
}