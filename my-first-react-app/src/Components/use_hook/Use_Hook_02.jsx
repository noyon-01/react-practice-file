import { use } from "react";

export default function Use_Hook_02({ usersData }) {
  const users = use(usersData);

  return (
    <div className="card">
      <h1 style={{ fontSize: "50px", color: "gray", fontWeight: "bold" }}>
        Use Hook 02 using - Async Await - Fetch
      </h1>
      <div className="card">
        <h1>Total Users: {users.length}</h1>
        {users.map((user) => (
          <div key={user.id} className="card">
            <h2>User Id: {user.id}</h2>
            <h3>User Name: {user.name}</h3>
            <h4>User Email: {user.email}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
