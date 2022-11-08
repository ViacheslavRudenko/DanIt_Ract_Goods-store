import reducer from "../../store/reducers/cart/cart";
import {
  addProductToCartList,
  removeProductFromCartList,
} from "../../store/types";

describe("modal reducer func", () => {
  const product1 = {
    Id: "jenlooper-cactus",
    Maker: "@jenlooper",
    img: "https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg",
    Url: "https://www.hackster.io/agent-hawking-1/the-quantified-cactus-an-easy-plant-soil-moisture-sensor-e65393",
    Title: "The Quantified Cactus: An Easy Plant Soil Moisture Sensor",
    Description:
      "This project is a good learning project to get comfortable with soldering and programming an Arduino.",
    Ratings: [5, 5],
    article: "3c245",
    price: 10000,
    color: "blue",
  };

  const product2 = {
    Id: "sailorhg-bubblesortpic",
    Maker: "sailorhg",
    img: "https://user-images.githubusercontent.com/41929050/61567054-13938600-aa33-11e9-9163-eec98e239b7a.png",
    Url: "https://twitter.com/sailorhg/status/1090107740049952770",
    Title: "Bubblesort Visualization",
    Description:
      "Visualization of sailor scouts sorted by bubblesort algorithm by their planet\u0027s distance from the sun",
    Ratings: null,
    article: "3c249",
    price: 14000,
    color: "orange",
  };

  it("should return default value", () => {
    expect(reducer(undefined, [])).toEqual([]);
  });

  it("should add cart values", () => {
    expect(
      reducer([], {
        type: addProductToCartList,
        payload: product1,
      })
    ).toEqual([product1]);
  });
  it("should ignore dublicate values", () => {
    expect(
      reducer([product1], {
        type: addProductToCartList,
        payload: product1,
      })
    ).toEqual([product1]);
  });

  it("should remove values", () => {
    expect(
      reducer([product1, product2], {
        type: removeProductFromCartList,
        payload: product1,
      })
    ).toEqual([product2]);
  });
});
