import logo from "../../public/logo.jpg";
import Button from "../component/UI/Button";

const Header = () => {
  return (
    <header>
      <div id="main-header">
        <div id="title">
          <img src={logo} alt="logo" />
          <h1>reactfood</h1>
        </div>
        <nav>
          <Button textOnly>cart</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
