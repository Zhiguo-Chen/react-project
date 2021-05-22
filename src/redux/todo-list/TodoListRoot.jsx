import React, { Component } from 'react'
import Form from './form'
import List from './list'

export default class TodoListRoot extends Component {
  render() {
    return (
      <div>
        <Form></Form>
        <List></List>
      </div>
    )
  }
  componentDidMount() {
    // fetch('./')
  }
}
