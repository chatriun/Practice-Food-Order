import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };
  return (
    <Modal open={userProgressCtx.status === "checkout"} onClose={handleClose}>
      <form>
        <h2>Checkout</h2>
        <p>total amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />

        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button textOnly type="button" onClick={handleClose}>
            close
          </Button>
          <Button>place order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;