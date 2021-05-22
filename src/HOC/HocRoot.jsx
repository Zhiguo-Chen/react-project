import React from 'react';
import Hoc from './hoc';

class Root extends React.Component {
  render() {
    return (
      <div>
        this is Hoc Root Component
      </div>
    )
  }

  componentDidMount() {
    console.log(this)
  }
}

export default Hoc(Root);