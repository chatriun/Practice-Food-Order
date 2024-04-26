import { useContext } from "react";
import logo from "../../public/logo.jpg";
import Button from "../component/UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartItems = cartCtx.items.reduce(
    (total, items) => total + items.quantity,
    0
  );

  const handleShowCartModal = () => {
    userProgressCtx.showCart();
  };
  return (
    <header>
      <div id="main-header">
        <div id="title">
          <img src={logo} alt="logo" />
          <h1>reactfood</h1>
        </div>
        <nav>
          <Button textOnly onClick={handleShowCartModal}>
            cart ({cartItems})
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
