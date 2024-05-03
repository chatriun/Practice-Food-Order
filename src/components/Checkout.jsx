import { useContext, useRef } from "react";
import Modal from "../UI/Modal";
import UserProgressContext from "../store/UserProgressContext";
import Input from "../UI/Input";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";
import useHttp from "../hook/useHttp";

const option = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const Checkout = () => {
  const form = useRef();
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);

  const handleCloseCheckout = () => {
    userProgressCtx.hideCheckout();
  };

  const handleCloseSuccess = () => {
    userProgressCtx.hideCheckoutSuccess();
  };

  const { data, isLoading, error, fetchData, clearData } = useHttp(
    "http://localhost:3000/orders",
    option
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fs = new FormData(event.target);
    const customerOrder = Object.fromEntries(fs.entries());

    await fetchData(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerOrder,
        },
      })
    );

    cartCtx.clearCart();
    userProgressCtx.showCheckoutSuccess();
    form.current.reset();
    clearData();
  };

  const showButton = (
    <>
      <Button textOnly type="button" onClick={handleCloseCheckout}>
        close
      </Button>
      <Button>submit order</Button>
    </>
  );
  const action = isLoading ? <span>sending...</span> : showButton;

  return (
    <>
      <Modal
        open={userProgressCtx.status === "SHOW_CHECKOUT_SUCCESS"}
        onClose={handleCloseSuccess}
      >
        <h3>{error ? "failed to submit order" : "success!"}</h3>
        <Button onClick={handleCloseSuccess}>okay</Button>
      </Modal>
      <Modal
        open={userProgressCtx.status === "SHOW_CHECKOUT"}
        onClose={
          userProgressCtx.status === "SHOW_CHECKOUT"
            ? handleCloseCheckout
            : null
        }
      >
        <form ref={form} onSubmit={handleSubmit}>
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
    </>
  );
};

export default Checkout;
