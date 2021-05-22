import React, { Component } from 'react';
import { Map } from 'immutable';

export default class ImmutableTest extends Component {
  render() {
    let map1 = Map({ x: 0, y: 1 });
    let map2 = map1;
    console.log(map1 === map2);
    map2 = map2.set('y', 2);
    console.log(map1);
    console.log(map2);
    return <div>This is immutable test</div>;
  }
}
