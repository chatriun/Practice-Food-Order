import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo-order-food" />
        <h1>order-food-try1</h1>
      </div>
      <Button textOnly>{`cart (${cartItems})`}</Button>
    </header>
  );
};

export default Header;
