import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/foodCartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-lg">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length !== 0 && (
          <button
            className="p-2 m-2 bg-pink-500 dark:bg-black dark:text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        {cartItems.length === 0 && (
          <h1 className="font-bold text-center m-4 p-4 text-lg">
            Your cart is empty!!!
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
