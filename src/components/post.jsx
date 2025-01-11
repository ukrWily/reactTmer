export function Post({ name, id, cb }) {
  return (
    <div className="post">
      <h2>{name}</h2>
      <button onClick={() => cb(id)}>X</button>
    </div>
  );
}
