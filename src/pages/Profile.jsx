import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";
function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      <h1>Welcome {user}</h1>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
