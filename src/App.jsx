import { useState } from "react";
import { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secoundCount: 2,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        firstCount: state.firstCount + action.payload,
        secoundCount: state.secoundCount + action.payload,
      };
    case "decrement":
      return {
        firstCount: state.firstCount - action.payload,
        secoundCount: state.secoundCount - action.payload,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [countOne, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchCountTwo] = useReducer(reducer, initialState);
  return (
    <div>
      {/* Count One */}
      <div>
        <h1>Count One - {countOne.firstCount}</h1>
        <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      {/* Count Two */}

      <div>
        <h1>Count Two - {countTwo.secoundCount}</h1>
        <button
          onClick={() => dispatchCountTwo({ type: "increment", payload: 2 })}
        >
          Increment
        </button>
        <button
          onClick={() => dispatchCountTwo({ type: "decrement", payload: 2 })}
        >
          Decrement
        </button>
        <button onClick={() => dispatchCountTwo({ type: "reset" })}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
