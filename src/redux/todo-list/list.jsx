import React, { Component } from 'react';
import { connect } from 'react-redux';
import './list.css';
import { removeAction, setData, loadData } from './store/actionCreator';

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    remove: (index) => {
      dispath(removeAction(index));
    },
    setData: (data) => {
      dispath(setData(data));
    },
    loadData: () => {
      dispath(loadData());
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class List extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item, index) => {
          let { positionName, positionId } = item;
          return (
            <div key={index}>
              <li key={index}>{positionName}</li>
              <button onClick={this.handleRemove(index)}>Remove</button>
            </div>
          );
        })}
      </ul>
    );
  }
  handleRemove = (index) => {
    return () => {
      this.props.remove(index);
    };
  };
  componentDidMount() {
    this.props.loadData();
  }
}

export default List;
