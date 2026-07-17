export default function Comment({ comment }) {
  console.log(comment);

  return (
    <div className="card">
      <h2>Name: {comment.name}</h2>
      <h3>Email: {comment.email}</h3>
      <h4>Body: {comment.body}</h4>
    </div>
  );
}
