import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();

  const onDeleteCart = (id) => {
    console.log("deleteCart", id);
    const removeItem = cart.filter((item) => item.id !== id);

    setCart(removeItem)
    totalQuantity(removeItem)

    localStorage.setItem("cart", JSON.stringify(removeItem));
  };

  const onAddToCart = (data) => {
    const itemInCart = cart.find((item) => item.id === data.id)
    console.log('itemInCart', itemInCart)
    if (itemInCart) {
      itemInCart.quantity++
    } else {
      cart.push({ ...data, quantity: 1 })
    }

    setCart(cart)
    totalQuantity(cart)

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const totalQuantity = (data) => {
    const totalQty = data.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)
    setTotal(totalQty)
  }

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      const dataCart = JSON.parse(localCart)
      setCart(dataCart);
      totalQuantity(dataCart)
    }
  }, []);

  return (
    <CartContext.Provider value={{ total, cart, setCart, onAddToCart, onDeleteCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
