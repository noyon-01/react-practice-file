import { useState } from "react";

export default function Use_State() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    const updateCount = count + 1;
    setCount(updateCount);
  };

  const handleDecrease = () => {
    const updateCount = count - 1;
    setCount(updateCount);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="card">
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase Count</button>
      <button onClick={handleDecrease}>Decrease Count</button>
      <button onClick={handleReset}>Reset Count</button>
    </div>
  );
}
