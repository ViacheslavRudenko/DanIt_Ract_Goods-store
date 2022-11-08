import { setPageDataType } from "../../types";

const setPageData = (data) => {
  return { type: setPageDataType, payload: data };
};

export default setPageData;
