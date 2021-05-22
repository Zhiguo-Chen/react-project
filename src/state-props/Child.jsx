import React from 'react';
import PropTypes from 'prop-types'

export default class extends React.Component {
  static propTypes = {
    title: PropTypes.string
  }
  render() {
    console.log('child render')
    return (
      <>
        <div>
          {this.props.title}
        </div>
        {this.props.children}
      </>
    );
  }
  componentDidMount() {
    console.log('child did mount')
  }
}