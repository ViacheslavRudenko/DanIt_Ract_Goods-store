import reducer from "../../store/reducers/modal/modal";
import { setModalType } from "../../store/types";

describe("modal reducer func", () => {
  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should add modal values", () => {
    const modal = {
      isOpen: false,
      title: "Confirm the order",
      isBtnClose: true,
    };

    expect(
      reducer(undefined, {
        type: setModalType,
        payload: modal,
      })
    ).toEqual(modal);
  });
});
