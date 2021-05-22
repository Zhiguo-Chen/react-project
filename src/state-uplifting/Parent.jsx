import React from 'react';
import { Chhild1 } from './Child1';
import { Chhild2 } from './Child2';


export class Parent extends React.Component {

  state = {
    data: ''
  }

  receiveDataFun(data) {
    console.log(data)
    this.setState({
      data
    })
  }

  render() {
    return (
      <>
        <Chhild1 receiveDataFun={this.receiveDataFun.bind(this)}></Chhild1>
        <Chhild2 data={this.state.data}></Chhild2>
      </>
    )
  }
}