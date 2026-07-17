import "./App.css";
import user from "../User_Section/user"

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
