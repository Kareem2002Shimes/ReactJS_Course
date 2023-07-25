import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <div>
        <input type="search" placeholder="search for Product" />
      </div>
      <Link to="featured">Featured</Link>
      <Link to="new">New</Link>
      <Outlet />
    </div>
  );
}

export default Products;
