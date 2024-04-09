import { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0); // 0은 초기값

  const setCount = () => {
    // counter = counter + 1
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Total Clicks : {conuter}</h1>
      <button onClick={setCount}>Click!</button>
    </div>
  );
};

export default App;
