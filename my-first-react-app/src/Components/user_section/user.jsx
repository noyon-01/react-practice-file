export default function User({ user }) {
  console.log(user);
  const {name, age, email, phone} = user;

    // return (
    //   <div className="card">
    //     <h2>Name: {user.name}</h2>
    //     <h2>Age: {user.age}</h2>
    //     <h3>Email: {user.email}</h3>
    //     <h3>Phone: {user.phone}</h3>
    //   </div>
    // );

  return (
    <div className="card">
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
    </div>
  );
}
