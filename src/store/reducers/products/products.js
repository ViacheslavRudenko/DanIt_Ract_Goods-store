import {
  getProductsRequested,
  getProductsSuccess,
  getProductsError,
} from "../../types";

let initialState = {
  isLoaded: false,
  hasError: [],
  products: [],
};

const reducerProducts = (state = initialState, action) => {
  switch (action.type) {
    case getProductsRequested: {
      return { ...state, isLoaded: action.payload };
    }
    case getProductsSuccess: {
      return { ...state, products: action.payload };
    }
    case getProductsError: {
      return { ...state, hasError: action.payload };
    }

    default:
      return state;
  }
};
export default reducerProducts;
