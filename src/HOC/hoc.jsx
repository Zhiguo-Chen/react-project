import React from 'react';

const Hoc = (Compponent) => {
  return class extends React.Component {
    render() {
      return (
        <Compponent title="Hello" {...this.props}>
        </Compponent>
      )
    }
  }
}

export default Hoc;