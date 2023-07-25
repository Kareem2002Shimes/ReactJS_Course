import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useAuth } from "/src/context/Auth";
export default function Header() {
  const links = ["Home", "About Us", "Blog"];
  const { user } = useAuth();
  const navBarStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "red" : "black",
    };
  };
  return (
    <HeaderEle>
      <Link to="/">Logo</Link>
      <Nav>
        <li>
          <NavLink to="/" style={navBarStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={navBarStyles}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" style={navBarStyles}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" style={navBarStyles}>
            Profile
          </NavLink>
        </li>
        {!user && (
          <li>
            <NavLink to="/login" style={navBarStyles}>
              Login
            </NavLink>
          </li>
        )}
      </Nav>
    </HeaderEle>
  );
}
const HeaderEle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Nav = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 15px;
`;
