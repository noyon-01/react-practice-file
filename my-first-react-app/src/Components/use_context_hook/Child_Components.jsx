import { useContext } from "react";
import { AssetsContext } from "./Use_Context_Hook";

export default function Child_Components() {
    // const assets = useContext(AssetsContext);
  const {assets, user} = useContext(AssetsContext);

  return (
    <div className="card">
      <h1 style={{ fontSize: "50px", color: "gray", fontWeight: "bold" }}>
        Child Components
      </h1>
      <div className="card">
        <h1>The Asset Owner Details Information</h1>
        <h2>The Most Expensive Assets is : {assets}</h2>
        <h2>Assets Owner Name is: {user.name}</h2>
        <h3>Assets Owner Email is: {user.email}</h3>
        <h3>Assets Owner Age is: {user.age}</h3>
      </div>
    </div>
  );
}
