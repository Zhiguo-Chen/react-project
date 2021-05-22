import React from 'react';
import { Provider, Consumer } from './testContext';

// const { Provider, Consumer } = createContext();


export class ContextProvider extends React.PureComponent {

  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this)
  }

  state = {
    value: 0
  }

  increment(args) {
    console.log('+++++++++++++');
    this.setState((prevState) => {
      return {
        value: prevState.value + args
      }
    })
  }

  decrement() {
    console.log('--------------')
  }

  render() {
    return (
      <Provider value={{numberValue: this.state.value, increment: this.increment, decrement: this.decrement}}>
        {this.props.children}
      </Provider>
    )
  }
}