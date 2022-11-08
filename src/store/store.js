import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerProducts from "./reducers/products/products";
import wishListReducer from "./reducers/wishList/wishList";
import modalReducer from "./reducers/modal/modal";
import pageDataReducer from "./reducers/pageData/pageData";
import cartListReducer from "./reducers/cart/cart";

const reducer = combineReducers({
  productsLoad: reducerProducts,
  wishList: wishListReducer,
  cartList: cartListReducer,
  modal: modalReducer,
  pageData: pageDataReducer,
});

const initialState = {};

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk), devTools)
);

export default store;
