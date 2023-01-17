import { ChangeEvent, ReactNode, useReducer } from "react";

const initState = {
  count: 0,
  message: "",
};

// define action type with ennum
const enum REDUCER_ACTION_TYPE {
  INCREMENT = 0,
  DECREMENT = 1,
  NEW_INPUT = 2,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

// reducer function receives current state and action
// returns a new state based on the action
const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, message: action.payload ?? "" };
    default:
      throw new Error();
  }
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

export const CounterUseReducer = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button
          onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })}
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })}
        >
          -
        </button>
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: REDUCER_ACTION_TYPE.NEW_INPUT,
              payload: e.target.value,
            })
          }
        />
      </div>
    </>
  );
};
