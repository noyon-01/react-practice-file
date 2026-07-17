import Child_Components from "./Child_Components";

export default function Parents_Components() {
  return (
    <div className="card">
      <h1 style={{ fontSize: "50px", color: "gray", fontWeight: "bold" }}>
        Parents Component
      </h1>
      <Child_Components />
    </div>
  );
}
