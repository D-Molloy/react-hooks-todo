import React, { useContext, useReducer } from "react";
import { UserContext } from "./index";

const initialState = {
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };
    case "decrement":
      return {
        count: state.count - 1
      };
    case "reset":
      return initialState;
    default:
      return initialState;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useContext(UserContext);

  return (
    <div className="container mx-auto my-8">
      <h1 className="my-8">Greeting, {value}, please click something...</h1>
      <button
        onClick={() => dispatch({ type: "increment" })}
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 mx-4 border-b-4 border-red-700 hover:border-red-500 rounded"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 mx-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded"
      >
        Reset
      </button>
      <h1>{state.count} clicks so far!</h1>
    </div>
  );
}
