import {
  addProductToCartList,
  removeProductFromCartList,
  getCartListFromLocalStorage,
  removeAllProductFromCartList,
} from "../../types";

let cartList = localStorage.getItem("shopingList")
  ? JSON.parse(localStorage.getItem("shopingList"))
  : [];

const initialState = {
  cartList: [],
};

const reducer = (state = initialState.cartList, action) => {
  switch (action.type) {
    case addProductToCartList: {
      if (cartList.includes(action.payload)) {
        return cartList;
      } else {
        cartList = [...cartList, action.payload];
        localStorage.setItem("shopingList", JSON.stringify(cartList));
        return [...state, action.payload];
      }
    }
    case removeProductFromCartList: {
      const index = cartList.findIndex(
        (product) => product.id == action.payload.id
      );
      cartList.splice(index, 1);
      localStorage.setItem("shopingList", JSON.stringify(cartList));
      return state.filter((product) => product.id !== action.payload.id);
    }
    case getCartListFromLocalStorage: {
      return cartList;
    }
    case removeAllProductFromCartList: {
      localStorage.setItem("shopingList", JSON.stringify([]));
      return [];
    }

    default:
      return state;
  }
};
export default reducer;
