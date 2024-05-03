import { createContext, useState } from "react";

const UserProgressContext = createContext({
  status: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
  showCheckoutSuccess: () => {},
  hideCheckoutSuccess: () => {},
});

export const UserProgressContextProvider = ({ children }) => {
  const [progress, setProgress] = useState("");

  const showCart = () => {
    setProgress("SHOW_CART");
  };

  const hideCart = () => {
    setProgress("HIDE");
  };

  const showCheckout = () => {
    setProgress("SHOW_CHECKOUT");
  };

  const hideCheckout = () => {
    setProgress("HIDE");
  };

  const showCheckoutSuccess = () => {
    console.log("show");
    setProgress("SHOW_CHECKOUT_SUCCESS");
  };

  const hideCheckoutSuccess = () => {
    setProgress("HIDE_CHECKOUT_SUCCESS");
  };

  const userProgressContext = {
    status: progress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
    showCheckoutSuccess,
    hideCheckoutSuccess,
  };

  return (
    <UserProgressContext.Provider value={userProgressContext}>
      {children}
    </UserProgressContext.Provider>
  );
};

export default UserProgressContext;
