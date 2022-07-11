import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);

  function addItemToCart(item) {
    setItems([...items, item]);
  }

  function getItemsCount() {
    return items.length;
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => sum + Number(item.price), 0);
  }

  return (
    <CartContext.Provider
      value={{ items, setItems, getItemsCount, addItemToCart, getTotalPrice }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
