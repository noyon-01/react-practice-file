import { useState } from "react";

export default function UseState_Hooks_01() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1 style={{ fontSize: "50px", color: "gray", fontWeight: "bold" }}>
        UseState Hooks 01
      </h1>
      <div className="card">
        <h1 style={{ marginLeft: "90px" }}>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment +</button>
        <button onClick={() => setCount(count - 1)}>- Decrement</button>
        <button onClick={() => setCount(0)}>Reset Count</button>
      </div>
    </div>
  );
}
