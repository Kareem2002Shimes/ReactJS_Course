import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hello Home Page</h1>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Home;
