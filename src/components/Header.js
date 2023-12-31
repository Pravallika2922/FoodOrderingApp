import React, { useState, useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const status = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items.length);

  return (
    <div
      className={"flex justify-between shadow-lg m-4 bg-pink-50 dark:bg-black"}
    >
      <div>
        <Link to="/">
          <img className="w-56" src={CDN_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-6 m-4 gap-4">
          <li className="px-4">
            <Link to="/" className=" dark:text-white">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className=" dark:text-white">
              About
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className=" dark:text-white">
              Contact
            </Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/cart" className="font-bold  dark:text-white">
              Cart ({cartItems} items)
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" className=" dark:text-white">
              Grocery
            </Link>
          </li>
          <li className="px-4  dark:text-white">
            OnlineStatus:{status ? "✅" : "🔴"}
          </li>
          <button
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
            className=" dark:text-white"
          >
            {btnName}
          </button>
          <li className=" dark:text-white">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
