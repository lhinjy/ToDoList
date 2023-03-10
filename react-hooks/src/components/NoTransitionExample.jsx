import { useState, useTransition } from "react";

const NoTransitionExample = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    setCount(count + 1);

    // // no transition, laggy
    // const myArr = Array(20000)
    //   .fill(1)
    //   .map((el, i) => count + 20000 - i);
    // setItems(myArr);

    startTransition(() => {
      const myArr = Array(20000)
        .fill(1)
        .map((el, i) => count + 20000 - i);
      setItems(myArr);
    });
  };

  const content = (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return content;
};
export default NoTransitionExample;
