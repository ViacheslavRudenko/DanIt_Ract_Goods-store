import { getProducts } from "../../../Api/api";
import {
  getProductsRequested,
  getProductsSuccess,
  getProductsError,
} from "../../types";

const setReques = (request) => {
  return { type: getProductsRequested, payload: request };
};
const setProducts = (products) => {
  return { type: getProductsSuccess, payload: products };
};
const setError = (error) => {
  return { type: getProductsError, payload: error };
};

const fetchProducts = () => {
  return async (dispatch) => {
    await getProducts()
      .then((response) => {
        const isLoaded = response.status === 200;
        isLoaded && dispatch(setReques(true));
        isLoaded && dispatch(setProducts(response.data));
      })
      .catch((error) => dispatch(setError(error)));
  };
};
export { fetchProducts };
