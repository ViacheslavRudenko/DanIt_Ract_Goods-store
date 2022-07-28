import axios from "axios";
const url = "https://fakestoreapi.com/products/";
async function getProducts() {
  return await axios(url);
}
async function getProductItem(id) {
  return await axios(url + id);
}

export { getProducts, getProductItem };
