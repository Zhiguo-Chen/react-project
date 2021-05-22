import React, { useState, useEffect } from 'react';

export default function UseEffectDemo() {
  let [data, setData] = useState({ count: 0 });
  useEffect(() => {
    console.log('=====');
    return () => {};
  });

  return (
    <>
      <span>{data.count}</span>
      <button onClick={() => setData((data) => ({ count: data.count + 1 }))}>
        click
      </button>
    </>
  );
}
