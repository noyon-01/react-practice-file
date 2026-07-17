import UseState_Hooks_01 from "./UseState_Hooks_01";
import UseState_Hooks_02 from "./UseState_Hooks_02";
import UseState_Todo_App from "./UseState_Todo_App";

export default function UseState_Hooks() {
  return (
    <div className="card">
      <h1 style={{ fontSize: "50px", color: "gray", fontWeight: "bold" }}>
        UseState Hooks Section
      </h1>
      <UseState_Hooks_01 />
      <UseState_Hooks_02 />
      <UseState_Todo_App />
    </div>
  );
}
