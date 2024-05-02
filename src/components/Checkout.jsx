import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import UserProgressContext from "../store/UserProgressContext";
import Input from "../UI/Input";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";
import useHttp from "../hook/useHttp";

const Checkout = () => {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);

  const handleCloseCheckout = () => {
    userProgressCtx.hideCheckout();
  };

  // const handleFinishCart = () => {
  //   userProgressCtx.hideCheckout();
  //   cartCtx.clearCart();
  //   clearData();
  // };

  const { data, isLoading, error, fetchData, clearData } = useHttp(
    "http://localhost:3000/orders",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fs = new FormData(event.target);
    const customerOrder = Object.fromEntries(fs.entries());

    fetchData(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerOrder,
        },
      })
    );

    cartCtx.clearCart();
    clearData();
  };

  const showButton = (
    <>
      <Button textOnly type="button" onClick={handleCloseCheckout}>
        {/* {console.log(`before-${data}`)} */}
        close
      </Button>
      <Button>submit order</Button>
    </>
  );
  const action = isLoading ? <span>sending...</span> : showButton;

  if (data && !error) {
    // console.log(`successPage-${data}`);
    return (
      <Modal
        open={userProgressCtx.status === "SHOW_CHECKOUT"}
        onClose={handleCloseCheckout}
      >
        <h3>success!</h3>
        <Button onClick={handleCloseCheckout}>okay</Button>
      </Modal>
    );
  }

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
