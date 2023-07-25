import { useState } from "react";
import { useAuth } from "../context/Auth";
import { useLocation, useNavigate } from "react-router-dom";
function Login() {
  const [inputRef, setInuptRef] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redicretPath = location.state?.path || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    login(inputRef);
    navigate(redicretPath, { replace: true });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={inputRef}
          onChange={(e) => setInuptRef(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
