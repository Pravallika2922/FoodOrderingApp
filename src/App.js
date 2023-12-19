import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="footer-heading">
//         <h3>Zomato</h3>
//       </div>
//       <div className="About">
//         <a href="\">Who we are</a>
//         <a href="\">Who we are</a>
//         <a href="\">Who we are</a>
//         <a href="\">Who we are</a>
//       </div>
//       <div className="contact">
//         <a href="\">Phone number</a>
//         <a href="\">Email Id</a>
//         <a href="\">Postal Address</a>
//       </div>
//       <div className="About Restaurants">
//         <a href="\">Who we are</a>
//         <a href="\">Who we are</a>
//       </div>
//       <div className="social-links">
//         <a href="\">FB</a>
//         <a href="\">Instagram</a>
//       </div>
//     </div>
//   );
// };
const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
