import React from 'react';
import { store } from './store'

class SelfReduxRoot extends React.Component {
  render() {
    return (
      <div>
        This is self redux root
      </div>
    )
  }
  componentDidMount() {
    store.test({number: 1, count: 8})
  }
}

export default SelfReduxRoot;