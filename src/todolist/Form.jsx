import React from 'react';

export class Form extends React.Component {
  state = {
    textValue: ''
  }
  getInputValue = () => {
    return (e) => {
      this.setState({
        textValue: e.target.value
      })
    }
  }
  onkeyPress = () => {
    return (key) => {
      // console.log(key)
      if (key.charCode === 13) {
        this.props.receiveInputValue(this.state.textValue);
        this.setState({
          textValue: ''
        });
      }
    }
  }
  render() {
    return (
      <input 
        value={this.state.textValue}
        onChange={this.getInputValue()}
        onKeyPress={this.onkeyPress()}
      />
    )
  }
}