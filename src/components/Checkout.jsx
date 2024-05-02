import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import UserProgressContext from "../store/UserProgressContext";
import Input from "../UI/Input";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";

const Checkout = () => {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);

  const handleCloseCheckout = () => {
    userProgressCtx.hideCheckout();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fs = new FormData(event.target);
    const data = Object.fromEntries(fs.entries());

    await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: data,
        },
      }),
    });

    cartCtx.clearCart();
    userProgressCtx.hideCheckout();
  };

  let action = (
    <>
      <Button textOnly type="button" onClick={handleCloseCheckout}>
        close
      </Button>
      <Button>submit order</Button>
    </>
  );

  return (
    <Modal
      open={userProgressCtx.status === "SHOW_CHECKOUT"}
      onClose={handleCloseCheckout}
    >
      <form onSubmit={handleSubmit}>
        <Input title="Full Name" type="text" id="name" />
        <Input title="E-Mail Address" type="email" id="email" />
        <Input title="Street" type="text" id="street" />
        <div className="control-row">
          <Input title="Postal Code" type="text" id="postal-code" />
          <Input title="City" type="text" id="city" />
        </div>

        <p className="modal-actions">{action}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
