import { useState } from "react";

function useCount(initialState, value) {
  const [count, setCount] = useState(initialState);
  const handleIncrement = () => {
    setCount((prev) => prev + value);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - value);
  };
  const handleReset = () => {
    setCount(initialState);
  };
  return [count, handleIncrement, handleDecrement, handleReset];
}

export default useCount;
