import { createContext, useState } from "react";

const UserProgressContext = createContext({
  status: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
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

  const userProgressContext = {
    status: progress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressContext}>
      {children}
    </UserProgressContext.Provider>
  );
};

export default UserProgressContext;
