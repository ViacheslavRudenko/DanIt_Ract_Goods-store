import reducer from "../../store/reducers/products/products";
import { getProductsSuccess } from "../../store/types";

import products from "../../../public/goods.json";

jest.mock("axios");

describe("modal reducer func", () => {
  const initialState = { hasError: [], isLoaded: false, products: [] };

  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should fetch products", async () => {
    let resp = {
      data: products,
      status: 200,
    };
    const state = { hasError: [], isLoaded: false, products: products };

    const fetchMock = jest.fn();
    fetchMock.mockReturnValue(resp);
    expect(
      reducer(initialState, {
        type: getProductsSuccess,
        payload: fetchMock().data,
      })
    ).toEqual(state);
  });
});
