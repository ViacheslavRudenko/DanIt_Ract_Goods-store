import "./button.scss";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export default function Button({ btn, actionWithModal }) {
  return (
    <>
      {btn.map((e) => (
        <button
          key={e.id}
          id={e.id}
          className={e.isActive ? styles.btn : styles.active}
          onClick={actionWithModal}
        >
          {e.text}
        </button>
      ))}
    </>
  );
}

Button.propTypes = {
  btn: PropTypes.array,
  setLS: PropTypes.func,
};
