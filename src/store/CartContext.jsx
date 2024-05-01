import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // out condition
    const updatedItems = [...state.items];

    if (itemIndex > -1) {
      const existingItem = state.items[itemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  } else if (action.type === "REMOVE_ITEM") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);

    const existingItem = state.items[itemIndex];
    const updatedItems = [...state.items];

    if (existingItem.quantity === 1) {
      updatedItems.splice(itemIndex, 1);
    } else if (existingItem.quantity > 1) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };

      updatedItems[itemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  } else if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }
  return state;
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatchCart({ type: "ADD_ITEM", item });
  };

  const removeItem = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", id });
  };

  const clearCart = () => {
    dispatchCart({ type: "CLEAR_CART" });
  };

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
