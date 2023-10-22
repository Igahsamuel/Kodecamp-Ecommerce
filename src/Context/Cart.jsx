import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [addItems, setAddItems] = useState(
    localStorage.getItem("addItems")
      ? JSON.parse(localStorage.getItem("addItems"))
      : []
  );
  const [num, setNum] = useState(1);

  useEffect(() => {
    localStorage.setItem("addItems", JSON.stringify(addItems));
  }, [addItems]);

  useEffect(() => {
    const newItems = localStorage.getItem("addItem");
    if (newItems) {
      setAddItems(JSON.parse(newItems));
    }
  }, []);

  const handleDelete = (id) => {
    const deleteItem = addItems.filter((item) => item.id !== id);
    setAddItems(deleteItem);
    // setNum({});
  };

  const handleSubmit = (item) => {
    const existingItem = addItems.find((items) => items.id === item.id);
    if (existingItem) {
      setAddItems((prevItem) =>
        prevItem.map((items) =>
          items.id === item.id ? { ...items, num: items.num + 1 } : items
        )
      );
    } else {
      setAddItems([...addItems, { ...item, num: 1 }]);
    }
  };

  const increaseItem = (itemId) => {
    setNum((prevItem) => ({
      ...prevItem,
      [itemId]: (prevItem[itemId] || 0) + 1,
    }));
  };

  const decreaseItem = (itemId) => {
    setNum((prevItem) => ({
      ...prevItem,
      [itemId]: prevItem[itemId] > 1 ? (prevItem[itemId] || 0) - 1 : 1,
    }));
  };

  const subTotal = addItems.reduce(
    (total, item) =>
      total + (num[item.id] > 0 ? num[item.id] * item.price : item.price),
    0
  );
  console.log(subTotal);

  const clearCart = () => {
    setAddItems([])
  }

  return (
    <CartContext.Provider
      value={{
        handleDelete,
        subTotal,
        handleSubmit,
        decreaseItem,
        increaseItem,
        num,
        addItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
