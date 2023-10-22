import AddedItem from "./AddedItem";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../Context/Cart";

function SideBar({ setShowSideBar, showSideBar, addItems }) {
  const { subTotal, clearCart } = useContext(CartContext);

  const handleCheckOut = () => {
    const confirm = window.confirm("Thank You for shopping with us");
    if (confirm) {
      clearCart();
      setShowSideBar(!showSideBar);
    }
  };

  return (
    <div>
      <div className="w-[100%] md:w-[400px] h-screen shadow absolute top-0 right-0 px-6 bg-white py-3">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-[30px]">Cart review</h2>
            <button
              className="py-2 px-3 rounded-2xl"
              onClick={() => setShowSideBar(!showSideBar)}
            >
              ❌
            </button>
          </div>
          <p className="border-b "></p>
          {addItems.length === 0 ? (
            <div className="flex items-center flex-col">
              <img
                src="src/assets/imgs/empty.png"
                alt=""
                className="max-w-[260px]"
              />
              <p className="text-[20px] text-red-500">Your cart is empty</p>
            </div>
          ) : (
            <div>
              {addItems.map((items) => (
                <AddedItem items={items} key={items.id} />
              ))}
              <div>
                <h2 className="flex justify-between font-bold text-[20px]">
                  <span>Subtotal:</span> <span>${subTotal.toFixed(2, 0)}</span>
                </h2>
                <button
                  className="border bg-red-600 text-white px-4 py-2 rounded-lg"
                  onClick={() => handleCheckOut()}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
