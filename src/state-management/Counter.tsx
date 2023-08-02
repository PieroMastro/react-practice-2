import { useReducer, useState } from "react";
import counterReducer from "./reducers/counterReducer";

const Counter = () => {
  // const [value, setValue] = useState(0);

  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      Counter ({value})
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-success mx-1"
      >
        UP
      </button>
      <button
        onClick={() => dispatch({ type: "DECREASE" })}
        className="btn btn-danger mx-1"
      >
        DOWN
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="btn btn-warning mx-1"
      >
        RESET
      </button>
    </div>
  );
};

export default Counter;
