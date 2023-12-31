import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery"; Instead of doing this we need to load this grocery data lazily.
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const App = () => {
  const [userName, setUserName] = useState("Lakshmi Pravallika");
  const [toggle, setToggle] = useState(false);
  // useEffect(() => {
  //   //make an API call and get name
  //   const data = {
  //     name: "Lakshmi Pravallika",
  //   };
  //   setUserName(data.name);
  // }, []);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName }}>
        <div className={toggle ? "dark" : "app"}>
          <button
            className={toggle ? "display-none" : undefined}
            onClick={handleClick}
          >
            ☀️
          </button>
          <button
            className={!toggle ? "display-none" : undefined}
            onClick={handleClick}
          >
            🌙
          </button>
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <ContactUs /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
