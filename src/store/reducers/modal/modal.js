import { setModalType } from "../../types";

const initialState = {
  modal: [],
};

const reducer = (state = initialState.modal, action) => {
  switch (action.type) {
    case setModalType: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
export default reducer;
