import { useEffect, useState } from "react";

export default function UseEffect_Hook_01() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) {
    return <h4>Data is loading....</h4>;
  }

  //   console.log(users);

  return (
    <div className="card">
      <h1 style={{ fontSize: "50px", color: "gray", fontWeight: "bold" }}>
        UseEffect Hooks 01
      </h1>
      <div className="card">
        <h1>API Call</h1>
        <div>
          {users.map((user) => (
            <div className="card" key={user.id}>
              <h3>Name: {user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Website: {user.website}</p>
              <p>Company: {user.company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
