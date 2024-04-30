import {createBrowserRouter} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Menupage from "./pages/Menupage/Menupage";
import Orderspage from "./pages/Orderspage/Orderspage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

export const router = createBrowserRouter([
  {path: "/", element: <Homepage />},
  {path: "/menu", element: <Menupage />},
  {path: "/orders", element: <Orderspage />},
  {path: "/about-us", element: <AboutUsPage />},
]);
