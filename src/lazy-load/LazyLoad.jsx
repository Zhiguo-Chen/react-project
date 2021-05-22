import React, { Component, lazy, Suspense } from 'react';
// import Child from './Child';

const LazyChild = lazy(() => import('./Child'));

export default class LazyLoad extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <LazyChild></LazyChild>
        </Suspense>
      </div>
    );
  }
}
