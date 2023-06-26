import "./App.css";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    // loading
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // get users / loading = false
        setLoading(false);
        setUsers(res.data);
        setError("");
      })
      .catch((error) => {
        // error / loading = fasle
        setLoading(false);
        setError(error.message);
        setUsers([]);
      });
  }, []);
  return (
    <div>
      <h1>Hello App</h1>
      {loading && <h2>Loading...</h2>}
      {error && <p>Error : {error}</p>}
      {!loading && !error && users?.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default App;
