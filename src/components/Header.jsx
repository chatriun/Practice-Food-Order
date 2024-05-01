import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";
import Modal from "../UI/Modal";
import Cart from "./Cart";
import UserProgressContext from "../store/UserProgressContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartItems = cartCtx.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleShowCart = () => {
    userProgressCtx.showCart();
  };

  return (
    <header id="main-header">
      <Modal open={userProgressCtx.status === "SHOW_CART"}>
        <Cart />
      </Modal>
      <div id="title">
        <img src={logo} alt="logo-order-food" />
        <h1>order-food-try1</h1>
      </div>
      <Button textOnly onClick={handleShowCart}>{`cart (${cartItems})`}</Button>
    </header>
  );
};

export default Header;
