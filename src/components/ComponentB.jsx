// import ComponentC from "./ComponentC";

import { useContext } from "react";
import { CountContext } from "../App";

function ComponentB() {
  const data = useContext(CountContext);
  return (
    <div>
      <h1>ComponentB</h1>
      <h1>Count - {data.count}</h1>
      <button onClick={() => data.setCount((prev) => prev + 1)}>
        Increment
      </button>
    </div>
  );
}

export default ComponentB;
