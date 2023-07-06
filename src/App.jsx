import { useCallback, useState } from "react";
import Title from "./components/Title";
import Count from "./components/Count";
import Button from "./components/Button";

function App() {
  const [age, setAge] = useState(24);
  const [salary, setSalary] = useState(8000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default App;
