import React from "react";
import "./modal.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function Modal({ closeModal, actionWithModal }) {
  const modal = useSelector((store) => store.modal);
  const { title, btn, isBtnClose, content } = modal;

  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__box--item">
          <div className="modal__header ">
            <p className="header__title">{title}</p>
            {isBtnClose && (
              <div className="header__btn btn">
                <button className="btn__item" onClick={closeModal}>
                  X
                </button>
              </div>
            )}
          </div>
          <div className="modal__main main">
            {content}
            <div className="main__btn btn">
              <Button btn={btn} actionWithModal={actionWithModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  actionWithModal: PropTypes.func,
};
