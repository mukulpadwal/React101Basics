import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function increase() {
    // On Click increase the counter by 1
    // Make sure it does not go above 20
    if (counter === 20) {
      console.log("You can't go above 20");
    } else {
      setCounter(counter + 1);
    }
  }

  function decrease() {
    // On Click decrease the counter by 1
    // Make sure it does not go above 20
    if (counter === 0) {
      // We can not go below this
      console.log("You can not go below 0");
    } else {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Counter App : {counter}</h1>
      <div className="btn-container">
        <button onClick={increase}>ADD + </button>
        <button onClick={decrease}>SUB - </button>
      </div>
    </>
  );
}

export default App;
