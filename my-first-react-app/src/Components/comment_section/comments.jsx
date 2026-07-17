import { use } from "react";
import Comment from "./comment";

export default function Comments({ fetchComments }) {
  const commnets = use(fetchComments);

  return (
    <div className="card">
      <h1>Comments: {commnets.length}</h1>
      {commnets.map((comment) => (
        <Comment key={comment.id} comment={comment}></Comment>
      ))}
    </div>
  );
}
