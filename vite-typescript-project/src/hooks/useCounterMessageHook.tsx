import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
export const useCounterMessageHook = () => {
  const {
    state: { message },
    handlePayload,
  } = useContext(CounterContext);
  return { message, handlePayload };
};
