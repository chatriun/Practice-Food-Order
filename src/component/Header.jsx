import { useContext } from "react";
import logo from "../../public/logo.jpg";
import Button from "../component/UI/Button";
import CartContext from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.reduce(
    (total, items) => total + items.quantity,
    0
  );
  return (
    <header>
      <div id="main-header">
        <div id="title">
          <img src={logo} alt="logo" />
          <h1>reactfood</h1>
        </div>
        <nav>
          <Button textOnly>cart ({cartItems})</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
