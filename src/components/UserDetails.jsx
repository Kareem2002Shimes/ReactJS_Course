import { useEffect } from "react";
import { useParams } from "react-router-dom";
function UserDetails() {
  const { userId } = useParams();

  return (
    <div>
      <h1>UserDetails {userId}</h1>
    </div>
  );
}

export default UserDetails;
