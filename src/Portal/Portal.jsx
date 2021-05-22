import { createPortal } from 'react-dom';
import React from 'react';

const portal = (Component) => {
  return class extends React.Component {
    render() {
      return createPortal(
        <Component {...this.props} />,
        document.querySelector('body')
      )
    }
  }
}

export default portal;