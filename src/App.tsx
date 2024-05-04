import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Menupage from "./pages/Menupage/Menupage";
import Orderspage from "./pages/Orderspage/Orderspage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import {useDispatch} from "react-redux";
import {setCart} from "./features/cart/cartSlice";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    let tempCartItems: any[] = [];
    if (localStorage.getItem("cartItems")) {
      // @ts-ignore
      tempCartItems = JSON.parse(localStorage.getItem("cartItems"));
    }

    if (tempCartItems.length > 0) {
      dispatch(setCart([...tempCartItems]));
    }
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menupage />} />
          <Route path="/orders" element={<Orderspage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
