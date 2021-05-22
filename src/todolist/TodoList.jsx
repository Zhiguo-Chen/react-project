import React from 'react';
import { List } from './List';
import { Form } from './Form';

export class TodoList extends React.Component {

  state = {
    list: []
  }

  receiveInputValue = () => {
    return (value) => {
      console.log()
      let newList = {
        id: new Date().getTime(),
        name: value
      };
      this.state.list.push(newList);
      this.setState({});
    }
  }

  getListId = (listId) => {
    return () => {
      console.log(listId)
      this.state.list = this.state.list.filter(item => item.id !== listId);
      this.setState({});
    }
  }

  render() {
    return (
      <>
        <Form receiveInputValue={this.receiveInputValue()}></Form>
        <List list={this.state.list} getListId={this.getListId}></List>
      </>
    )
  }
}