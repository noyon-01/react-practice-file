import Component_One from "./Component_one";

export default function Props_Drilling() {
  const message = "This message come from Component_One.";

  return (
    <div className="card">
      <h1 style={{ fontSize: "50px", color: "gray", fontWeight: "bold" }}>
        Props Drilling Section
      </h1>
      <div className="card">
        <Component_One message={message} />
      </div>
    </div>
  );
}
