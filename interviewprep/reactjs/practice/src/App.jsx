import React, { useState,useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("expensive task");

    for (let i = 0; i<= 1000000000000; i++) {
       return num * 2;
    }

   
  }

  let double = expensiveTask(input);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      count:{count} <br />
      <input type="number" onChange={(e)=>{setInput(e.target.value)}} />
      <br />
      <br />
      double:{double}
    </div>
  );
};

export default App;
