import UseContext_Hook_01 from "./UseContext_Hook_01";
import { createContext } from "react";
export const AssetsContext = createContext("");

export default function Use_Context_Hook() {
  const assets = "Gold";

  const user = {
    name: "Shahadat Hosen Noyon",
    email: "noyon@gmail.com",
    age: 23,
  };

  return (
    <AssetsContext.Provider value={{assets, user}}>
      <div className="card">
        <h1 style={{ fontSize: "50px", color: "gray", fontWeight: "bold" }}>
          Context API Hook Section
        </h1>
        <UseContext_Hook_01 />
      </div>
    </AssetsContext.Provider>
  );
}
