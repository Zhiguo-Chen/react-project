import React from 'react';
import { Child } from './Child';
import { Consumer, Provider } from './testContext';
import { testContext } from './testContext';


class ChildA extends React.Component {
  static contextType = testContext;
  render() {
    return (
      <div>Child a : {this.context}</div>
    )
  }
}

class ChildB extends React.Component {
  render() {
    return (
      <div>
        <ChildC></ChildC>
      </div>
    )
  }
}

const ChildD = (props) => {
  return (
    <div>
      ChildD: <Consumer>
        {
          (value) => {
            return <div>{value}</div>
          }
        }
      </Consumer>
    </div>
  )
}

const ChildC = (props) => {
  return (
    <div>
      <ChildD></ChildD>
    </div>
  )
}


export class Context extends React.Component {
  render() {
    return (
      <Provider value="hello">
        <ChildA></ChildA>
        <ChildB></ChildB>
      </Provider>
    )
  }
}