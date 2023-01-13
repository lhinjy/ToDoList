import "./App.css";
import { useState, useCallback, useEffect, useMemo } from "react";
import UseReducerExample from "./components/UseReducerExample";

function App() {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  // expensive stuff to compute
  // useCallback does not memorize the result of fib
  // it memorize the FUNCTION
  // pure function (if n doesnt change, function does not change )
  // const fib = useCallback((n) => {
  //   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  // }, []);
  // const fibNumber = fib(userNumber);

  // useMemo is usually used together with useCallback
  const fib = (n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  };
  const fibNumber = useMemo(() => fib(userNumber), userNumber);
  return (
    <div className="App">
      {" "}
      <label>Fibonacci Sequence:</label>
      <input
        type="number"
        value={userNumber}
        placeholder="Position"
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <p>Number: {fibNumber || "--"}</p>
      <label>Random Input:</label>
      <input
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>{randomInput}</p>
      <UseReducerExample />
    </div>
  );
}

export default App;
