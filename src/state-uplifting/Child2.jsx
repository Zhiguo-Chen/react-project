import React from 'react';

export class Chhild2 extends React.Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   data: props.data
    // }
  }
  render() {
    console.log(this.props.data)
    return (
      <div key={this.props.data}>This is Chhild2 {this.props.data}</div>
    )
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });  
  }
}