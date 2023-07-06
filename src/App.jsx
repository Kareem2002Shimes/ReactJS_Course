import { useState, useEffect, useRef } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef();
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <div>
      <h1>Timer - {timer}</h1>
      <button onClick={() => clearInterval(timerRef.current)}>
        Clear Timer
      </button>
    </div>
  );
}

export default App;
