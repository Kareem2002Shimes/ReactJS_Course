import { useState } from "react";

function Form() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Eamil</label>
        <input
          type="email"
          value={data.email}
          placeholder="enter your email"
          id="email"
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                email: e.target.value,
              };
            })
          }
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="enter your password"
          id="password"
          value={data.password}
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                password: e.target.value,
              };
            })
          }
        />
      </div>
      <button type="submit">Signin</button>
    </form>
  );
}

export default Form;
