import React from 'react';
import PropTyeps from 'prop-types';
import './list.css';

export class List extends React.Component {
  static propTypes = {
    list: PropTyeps.array
  }
  static defaultProps = {
    list: [{
      id: '001',
      name: 'Hello'
    }]
  }
  render() {
    return (
      <ul>
        {
          this.props.list.map(item => {
            return <>
              <li key={item.id}>{item.name} <div className="circle" onClick={this.props.getListId(item.id)}>x</div></li>
            </>
          })
        }
      </ul>
    )
  }
}