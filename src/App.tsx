import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Menupage from "./pages/Menupage/Menupage";
import Orderspage from "./pages/Orderspage/Orderspage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import AuthPage from "./pages/AuthPage/AuthPage";

import {useDispatch} from "react-redux";
import {setCart} from "./features/cart/cartSlice";
import {setUserState} from "./features/users/userSlice";
import {getCartStateFromCache} from "./utils/getCartStateFromCache";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (newValue: boolean) => void;
}

export const AuthContext = React.createContext<AuthState | undefined>(
  undefined
);

function App() {
  const dispatch = useDispatch();

  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  React.useEffect(() => {
    const jwtToken: string | null = sessionStorage.getItem("jwt");

    const user: string | null = localStorage.getItem("user")
      ? localStorage.getItem("user")
      : null;

    if (jwtToken !== null) {
      let tempCartItems: any[] = [];

      if (localStorage.getItem("cartItems")) {
        // @ts-ignore
        tempCartItems = JSON.parse(localStorage.getItem("cartItems"));
      }

      dispatch(setCart(getCartStateFromCache(tempCartItems)));

      if (user !== null) {
        dispatch(setUserState(JSON.parse(user)));
        setIsAuthenticated(true);
      }
    } else {
      setIsAuthenticated(false);
    }
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  isAuthenticated ? <Homepage /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/menu"
                element={
                  isAuthenticated ? <Menupage /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/orders"
                element={
                  isAuthenticated ? <Orderspage /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/about-us"
                element={
                  isAuthenticated ? <AboutUsPage /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/checkout"
                element={
                  isAuthenticated ? <CheckoutPage /> : <Navigate to="/login" />
                }
              />

              <Route path="/login" element={<AuthPage />} />
              <Route
                path="/*"
                element={<div>404 Error, this page doesn't exist</div>}
              />
            </Routes>
          </Router>
        </AuthContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
