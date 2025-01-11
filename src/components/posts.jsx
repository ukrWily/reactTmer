import { Post } from "./post";

export function Posts({ posts, cb }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post cb={cb} key={post.id} id={post.id} name={post.name} />
      ))}
    </div>
  );
}
