import Router from "./Router/router";
import Header from "./Component/Header/Header";
import { setCartListFromLocalStorage } from "./store/actions/cart/cart";
import { setWishListFromLocalStorage } from "./store/actions/wishList/wishList";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

export const Context = React.createContext();

function App() {
  const dispatch = useDispatch();
  dispatch(setCartListFromLocalStorage());
  dispatch(setWishListFromLocalStorage());

  const [productsDisplay, setProductsDisplay] = useState(
    localStorage.getItem("productsDisplay") || "grid"
  );

  return (
    <Context.Provider value={{ productsDisplay, setProductsDisplay }}>
      <Header />
      <Router />
    </Context.Provider>
  );
}

export default App;
