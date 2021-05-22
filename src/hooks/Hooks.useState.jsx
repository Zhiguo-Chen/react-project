import React, { Component, useState } from 'react';

export default function Hooks() {
  // state = { count: 0 };
  let [count, setCount] = useState(0);
  // handleClick = () => {
  //   // this.setState((state) => ({ count: state.count + 1 }));
  // };
  function handleClick() {
    setCount(() => count + 1);
  }
  return (
    <div>
      <span>{count}</span>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
