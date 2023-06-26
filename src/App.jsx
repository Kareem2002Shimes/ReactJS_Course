import "./App.css";
import { Fragment, useEffect, useState } from "react";
function App() {
  const [resourceType, setResourceType] = useState("users");
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [resourceType]);

  return (
    <div>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      <div style={{ width: "500px", height: "500px" }}>
        {items.map((item) => (
          <pre>{JSON.stringify(item)}</pre>
        ))}
      </div>
    </div>
  );
}

export default App;
