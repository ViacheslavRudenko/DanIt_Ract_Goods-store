import { Routes, Route, Navigate } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Cart from "../Pages/Cart/Cart";
import WishList from "../Pages/WishList/WishList";
import Home from "../Pages/Home/Home";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/products" replace={true} />}
      ></Route>
      <Route path="products" element={<Home />}></Route>
      <Route path="products/item/:id" element={<SingleProduct />}></Route>
      <Route path="/products/cart" element={<Cart />}></Route>
      <Route path="/products/wish-list" element={<WishList />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default Router;
