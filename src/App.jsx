import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";

const initialState = {
  loading: false,
  users: [],
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "FETCH_PENDING" }); // loading = true
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // users = res.data
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((error) =>
        dispatch({ type: "FETCH_ERROR", payload: error.message })
      );
  }, []);
  return (
    <div>
      {state.loading && <h1>Loading...</h1>}
      {!state.loading && state.error ? <h1>Error : {state.error}</h1> : null}
      {!state.loading && !state.error && state.users?.length > 0 ? (
        <ul>
          {state.users.map((user) => (
            <h1 key={user.id}>{user.name}</h1>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default App;
