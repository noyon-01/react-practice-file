import "./App.css";
import User from "./user";

export default function ArrayProps({ users }) {
  console.log(users);

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
}
