import useCount from "../useCount";

function CountTwo() {
  const [count, handleIncrement, handleDecrement, handleReset] = useCount(2, 2);
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default CountTwo;
