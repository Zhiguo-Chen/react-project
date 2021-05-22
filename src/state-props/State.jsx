import React from 'react';
import Child from './Child'

export class State extends React.Component {
  state = {
    isShow: false,
    count: 0,
    list: ['a', 'b', 'c']
  }
  // constructor(props) {
  //   super(props);
    // this.state = {
    //   isShow: false
    // }
  // }
  render() {
    console.log('parent did render')
    return (
      <div>
        <ul>
          {this.state.list.map(value => {
            return <li key={value}>{value}</li>
          })}
        </ul>
        <div>count: {this.state.count}</div>
        <Child></Child>
      </div>
    );
  }

  componentDidMount() {
    console.log('parent did mount')
    // setTimeout(() => {
    //   this.setState((previousProps) => {
    //     return {
    //       count: previousProps.count + 1
    //     }
    //   });
    // }, 3000)
  }

}