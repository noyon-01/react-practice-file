import Parents_Components from "./Parents_Components";

export default function Grand_Parents_Components() {
  return (
    <div className="card">
        <h1 style={{ fontSize: "50px", color: "gray", fontWeight: "bold" }}>
        Grand Parents Components
      </h1>
      <Parents_Components />
    </div>
  )
}