import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello About Page</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default About;
