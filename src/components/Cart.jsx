import { useContext } from "react";
import CartContext from "../store/CartContext";
import currencyFormatter from "../util/formatting";
import CartItem from "./CartItem";
import UserProgressContext from "../store/UserProgressContext";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };

  const handleGoCheckout = () => {
    userProgressCtx.showCheckout();
  };

  return (
    <Modal
      className="cart"
      open={userProgressCtx.status === "SHOW_CART"}
      onClose={userProgressCtx.status === "SHOW_CART" ? handleCloseCart : null}
    >
      <h2>your cart:</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.name}
            name={item.name}
            qty={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoCheckout}>Go to checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
