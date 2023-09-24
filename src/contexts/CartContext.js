import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();

  const onDeleteCart = (id) => {
    console.log("deleteCart", id);
  };

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, onDeleteCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
