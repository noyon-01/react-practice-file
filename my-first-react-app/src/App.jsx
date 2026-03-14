import { Suspense } from "react";
import "./App.css";
import Conditional from "./conditional";
// import Comments from "./comments";
// import ArrayProps from "./array-props";
// import Use_State from "./useState";
// import Array_Props from "./array-props";
// import Component from "./component";
// import Props3 from "./props";
// import Props2 from "./props";
// import Props from "./props";
// import Posts from "./posts";

// const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
//   (res) => res.json(),
// );

// const fetchFunction = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/comments");
//   return res.json();
// };

function App() {
  // const person = {
  //   name: "Noyon",
  //   email: "noyon-1@gmail.com",
  //   phone: "01585735520",
  // };

  // const person2 = {
  //   name: "Noyon",
  //   email: "noyon-1@gmail.com",
  //   phone: "01585735520",
  // };

  // const users = [
  //   {id:1, name: "noyon", age: 23, email: "noyon@gmail.com", phone: "01254213551" },
  //   {id:2, name: "korim", age: 25, email: "korin@gmail.com", phone: "06445213551" },
  //   {id:3, name: "rohin", age: 27, email: "rohim@gmail.com", phone: "01254548461" },
  // ];

  const products = [
  { title: 'Cabbage', isFruit: true, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

  // const fetchComments = fetchFunction();

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Component></Component> */}
      {/* <Props name={"Noyon"} email={"noyon-1@gmail.com"} phone={"01585735520"}></Props> */}
      {/* <Props2 person={person}></Props2> */}
      {/* <Props3 person={person2}></Props3> */}
      {/* <ArrayProps users={users}></ArrayProps> */}
      {/* <Use_State></Use_State> */}
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Posts fetchPosts={fetchPosts}></Posts>
      </Suspense> */}
      {/* <Suspense fallback={<h3>Comments Loading...</h3>}>
        <Comments fetchComments={fetchComments}></Comments>
      </Suspense> */}
      <Conditional products={products}></Conditional>
    </>
  );
}

export default App;
