import { useContext } from "react";
import { CountContext } from "../App";

function ComponentC() {
  const data = useContext(CountContext);
  return (
    <div>
      <h1>ComponentC</h1>
      <h1>Count - {data.count}</h1>
      <button onClick={() => data.setCount((prev) => prev + 1)}>
        Increment
      </button>
    </div>
  );
}

export default ComponentC;
