import reducer from "../../store/reducers/pageData/pageData";
import { setPageDataType } from "../../store/types";

describe("modal reducer func", () => {
  const pageData = {
    isMainList: true,
    productOnClick: {},
    isInWishList: false,
  };

  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should add data values", () => {
    expect(
      reducer([], {
        type: setPageDataType,
        payload: pageData,
      })
    ).toEqual(pageData);
  });
});
