import { useState } from "react";
import UseState_Hooks_01 from "./UseState_Hooks_01";

export default function UseState_Hooks_02() {
  const person = {
    name: "Rohim",
    age: 25,
  };

  const [user, setUser] = useState(person);

  const handleUserName = () => {
    setUser({ ...user, name: "Korim Ahmed" });
  };

  const handleUserAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div className="card">
      <h1 style={{ fontSize: "50px", color: "gray", fontWeight: "bold" }}>
        UseState Hooks 02
      </h1>
      <div className="card">
        <h1>Name: {user.name}</h1>
        <button onClick={handleUserName}>Change User Name</button>
        <h2>Age: {user.age}</h2>
        <button onClick={handleUserAge}>Increment User Age</button>
      </div>
    </div>
  );
}
