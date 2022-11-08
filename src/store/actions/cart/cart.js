import {
  addProductToCartList,
  removeProductFromCartList,
  getCartListFromLocalStorage,
  removeAllProductFromCartList,
} from "../../types";

const addProducts = (product) => {
  return { type: addProductToCartList, payload: product };
};
const removeProducts = (product) => {
  return { type: removeProductFromCartList, payload: product };
};
const setCartListFromLocalStorage = () => {
  return { type: getCartListFromLocalStorage };
};
const removeAllCartList = () => {
  return { type: removeAllProductFromCartList };
};

export {
  removeProducts,
  addProducts,
  setCartListFromLocalStorage,
  removeAllCartList,
};
