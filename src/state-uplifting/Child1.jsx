import React from 'react';

export class Chhild1 extends React.Component {
  render() {
    return (
      <div onClick={this.props.receiveDataFun.bind(this, 'Hello')}>This is Child1</div>
    )
  }
}