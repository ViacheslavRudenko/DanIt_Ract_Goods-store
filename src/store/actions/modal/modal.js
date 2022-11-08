import { setModalType } from "../../types";

const setModal = (modal) => {
  return { type: setModalType, payload: modal };
};

export default setModal;
