import { Suspense } from "react";
import Use_Hook_01 from "./Use_Hook_01";
import Use_Hook_02 from "./Use_Hook_02";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const fetchUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

export default function Use_Hook() {
  const usersData = fetchUsersData();

  return (
    <div>
      <div className="card">
        <h1 style={{ fontSize: "50px", color: "gray", fontWeight: "bold" }}>
          Use Hook Section
        </h1>
        <Suspense fallback={<h3>Loading..........</h3>}>
          <Use_Hook_01 fetchUsers={fetchUsers} />
        </Suspense>

        <Suspense fallback={<h3>Users Data is Loading.......</h3>}>
          <Use_Hook_02 usersData={usersData} />
        </Suspense>
      </div>
    </div>
  );
}
