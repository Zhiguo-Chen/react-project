import React from 'react';

export class ControlledForm extends React.Component {
  state = {
    textValue: 'Hello'
  };
  getInputValue(e) {
    // console.log(args1)
    // console.log(args2)
    this.setState({
      textValue: e.target.value
    })
  }
  render() {
    return <input type="text" 
      value={this.state.textValue} 
      onChange={this.getInputValue.bind(this)} />
  }
}