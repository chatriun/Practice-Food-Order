import logo from "../assets/logo.jpg";
import Button from "../UI/Button";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo-order-food" />
        <h1>order-food-try1</h1>
      </div>
      <Button textOnly>cart (1)</Button>
    </header>
  );
};

export default Header;
