import {
  addProductToWishList,
  removeProductFromWishList,
  getWishListFromLocalStorage,
  getItemWhichLocatedInWishList,
} from "../../types";

const addProductsToWish = (product) => {
  return { type: addProductToWishList, payload: product };
};
const removeProductsFromWish = (product) => {
  return { type: removeProductFromWishList, payload: product };
};

const setWishListFromLocalStorage = () => {
  return { type: getWishListFromLocalStorage };
};

export {
  setWishListFromLocalStorage,
  addProductsToWish,
  removeProductsFromWish,
};
