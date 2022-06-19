import React, { useState } from 'react';

const App = () => { //Also declare using const App = () => {} does not hoist to top of scope
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1); //Cannot use pre/post incr/decr operators b/c it directly changes value of state
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <div>{count}</div>
      <div className="incr-decr-container">
        <button onClick={incrementCount}>+ Increment</button>
        <button onClick={decrementCount}>- Decrement</button>
      </div>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default App;
