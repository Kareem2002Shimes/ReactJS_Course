import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "/src/context/Auth";
const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user)
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  return children;
};

export default RequireAuth;
