import { useState } from "react";
import { logo_url } from "../config";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      <img src={logo_url} alt="Food Villa" className="logo" />
    </a>
  );
};

const loggedIn = (IsLoggedIn) => {
  return IsLoggedIn;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/"  className="nav-links">
            <li>Home</li>
          </Link>
          <Link to="/about"  className="nav-links">
            <li>About</li>
          </Link>
          <Link to="/contact"  className="nav-links">
            <li>Contact</li>
          </Link>
          <Link to="/cart" className="nav-links">
            <li>Cart</li>
          </Link>
          <li>
            {loggedIn(isLoggedIn) ? (
              <button
                className="logout-btn"
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </button>
            ) : (
              <button
                className="login-btn"
                onClick={() => {
                  setIsLoggedIn(true);
                }}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
