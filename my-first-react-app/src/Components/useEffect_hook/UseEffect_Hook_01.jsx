import { useEffect, useState } from "react";

export default function UseEffect_Hook_01() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };

    fetchUser();
  }, []);

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
            <h3 key={user.id}>{user.name}</h3>
          ))}
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';

// function UseEffect_Hook_01() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // fetch('https://jsonplaceholder.typicode.com/users')
//     //   .then(res => res.json())
//     //   .then(data => setUsers(data));

//     const fetchUser = async () => {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await res.json();
//         setUsers(data)
//     }

//     fetchUser();

//   }, []);

//   return (
//     <div>
//       {users.map(user => <p key={user.id}>{user.name}</p>)}
//     </div>
//   );
// }

// export default UseEffect_Hook_01;
