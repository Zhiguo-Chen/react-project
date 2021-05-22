import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
  return {
    putData: (task) => {
      dispatch({
        type: 'ADD',
        task
      })
    }
  }
}

@connect(null, mapDispatchToProps)
class Form extends Component {
  state = {
    task: ''
  }
  handleChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  handleKeyEvent = (e) => {
    // console.log(e)
    if (e.charCode === 13) {
      this.props.putData(this.state.task);
      this.setState({task: ''})
      // console.log(this)
    }
  }
  render() {
    return (
      <input type="text" 
      value={this.state.task} 
      onChange={this.handleChange}
      onKeyPress={this.handleKeyEvent}
      />
    )
  }
}

export default Form;