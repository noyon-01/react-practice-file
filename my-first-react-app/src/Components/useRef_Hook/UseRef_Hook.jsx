import { useRef } from "react";

export default function UseRef_Hook() {
  const nameRef = useRef("");
  const emailRef = useRef("");

  const handleFromSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    console.log("Name:", name, "Email:", email);
  };

  return (
    <div className="card">
      <h1 style={{ fontSize: "50px", color: "gray", fontWeight: "bold" }}>
        UseRef Hook Section
      </h1>
      <div className="card">
        <form onSubmit={handleFromSubmit}>
          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <br />
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter Your Name"
            required
          />
          <br />
          <input type="submit" value={"Submit"} />
        </form>
      </div>
    </div>
  );
}
