import React from 'react';
import './portal.css'
import Portal from './Portal';

class Modal extends React.Component {
  render() {
    return (
      <div className="portal">
        <div className="modal">
          <h1>Portal Header</h1>
          <button>Add</button>
        </div>
      </div>
    )
  }
}

export default Portal(Modal);