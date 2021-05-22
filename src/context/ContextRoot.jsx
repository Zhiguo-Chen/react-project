import React from 'react';
import { ContextProvider } from './ContextProvider'
import { Child } from './Child'
import { ChildHood } from './ChildHood'


export class ContextRoot extends React.PureComponent {
  render() {
    return (
      <ContextProvider>
        <Child></Child>
        <ChildHood></ChildHood>
      </ContextProvider>
    )
  }
}