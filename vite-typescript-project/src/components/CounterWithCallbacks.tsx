import { ReactNode } from "react";

type CounterWithCallbacksProps = {
  increment: () => void;
  decrement: () => void;
  children: ReactNode;
};
export const CounterWithCallbacks = ({
  increment,
  decrement,
  children,
}: CounterWithCallbacksProps) => {
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
