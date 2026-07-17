import { use } from "react";

export default function Use_Hook_01({ fetchUsers }) {
  const users = use(fetchUsers);
  //   console.log(users);

  return (
    <div className="card">
      <h1 style={{ fontSize: "50px", color: "gray", fontWeight: "bold" }}>
        Use Hook 01 using - Normal Fetch
      </h1>
      <div className="card">
        <h2>Total User: {users.length}</h2>
        {users.map((user) => (
          <div key={user.id} className="card">
            <h2>Serial No: {user.id}</h2>
            <h3>Name: {user.name}</h3>
            <h4>Email: {user.email}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
