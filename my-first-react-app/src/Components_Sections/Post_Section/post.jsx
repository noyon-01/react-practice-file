export default function Post ({post}) {
    console.log(post)
    return(
        <div className="card">
            <h2>Title: {post.title}</h2>
            <h4>Body: {post.body}</h4>
        </div>
    )
}