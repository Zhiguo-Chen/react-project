import React from 'react';
import Child from './Child';


export default class extends React.Component {
  render() {
    return (
      <>
        <div>Hello</div>
        <Child title={'0'}>
          <h1>It is from parent</h1>
        </Child>
      </>
    )
  }
}