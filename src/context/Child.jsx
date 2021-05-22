import React from 'react';
import { Consumer } from './testContext'

export class Child extends React.PureComponent {
  render() {
    return (
      <Consumer>
        {
          ({numberValue, increment}) => {
            return (
              <>
                <div>{numberValue}</div>
                <button onClick={() => increment(3)}>+</button>
              </>
            )
          }
        }
      </Consumer>
    )
  }
}