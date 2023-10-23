import { logo_url } from "../config";

const Title = () => {
  return (
    <a href="/">
      <img src={logo_url} alt="Food Villa" className="logo" />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
