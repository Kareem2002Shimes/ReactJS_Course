import "./App.css";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
function App() {
  // const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([]);
  // const [error, setError] = useState("");
  const [fetchUsers, setFetchUsers] = useState({
    loading: false,
    users: [],
    error: "",
  });
  useEffect(() => {
    // loading
    setFetchUsers((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // get users / loading = false
        setFetchUsers((prev) => {
          return {
            loading: false,
            users: res.data,
            error: "",
          };
        });
      })
      .catch((error) => {
        // error / loading = fasle
        setFetchUsers((prev) => {
          return {
            loading: false,
            users: [],
            error: error.message,
          };
        });
      });
  }, []);
  return (
    <div>
      <h1>Hello App</h1>
      {fetchUsers.loading && <h2>Loading...</h2>}
      {fetchUsers.error && <p>Error : </p>}
      {!fetchUsers.loading && !fetchUsers.error && fetchUsers.users?.length ? (
        <ul>
          {fetchUsers.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default App;
