import { useReducer, useState } from "react";
import useCounterStore from "./store";

const Counter = () => {
  // const [value, setValue] = useState(0);
  // const [value, dispatch] = useReducer(counterReducer, 0);

  const { counter, increase, decrease, reset } = useCounterStore();

  return (
    <div>
      Counter ({counter})
      <button
        // onClick={() => dispatch({ type: "INCREMENT" })}
        onClick={() => increase()}
        className="btn btn-success mx-1"
      >
        UP
      </button>
      <button
        // onClick={() => dispatch({ type: "DECREASE" })}
        onClick={() => decrease()}
        className="btn btn-danger mx-1"
      >
        DOWN
      </button>
      <button
        // onClick={() => dispatch({ type: "RESET" })}
        onClick={() => reset()}
        className="btn btn-warning mx-1"
      >
        RESET
      </button>
    </div>
  );
};

export default Counter;
