import { setPageDataType } from "../../types";

const initialState = {
  pageData: [],
};

const reducer = (state = initialState.pageData, action) => {
  switch (action.type) {
    case setPageDataType: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;
