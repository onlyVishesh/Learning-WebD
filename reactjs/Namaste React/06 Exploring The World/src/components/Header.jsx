import { useState } from "react";
import { logo_url } from "../config";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
      )}</li>
        </ul>
      </div>
      
    </div>
  );
};
export default Header;
