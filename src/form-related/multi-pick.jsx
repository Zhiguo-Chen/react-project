import React from 'react';

export class MultiPickComponent extends React.Component {
  state = {
    isGoing: false,
    numberOfGuests: 0
  }

  stateOnChange = () => {
    return (e) => {
      let name = e.target.name;
      let value = name === 'isGoing'? e.target.checked: e.target.value;
      this.setState({
        [name]: value
      })
    }
  }

  render() {
    return (
      <form>
        是否参加
        <input 
          type="checkbox"
          name="isGoing"
          checked={this.state.isGoing}
          onChange={this.stateOnChange()}
        />
        <input type="number" name="numberOfGuests" 
          value={this.state.numberOfGuests} 
          onChange={this.stateOnChange()}/>
      </form>
    );
  }
}