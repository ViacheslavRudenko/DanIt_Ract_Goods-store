import { ErrorMessage } from "formik";
import PropTypes from "prop-types";

export default function CustomErrorMessage({ name }) {
  return (
    <ErrorMessage name={name}>
      {(message) => (
        <div className="item__error">
          <i>{message}</i>
        </div>
      )}
    </ErrorMessage>
  );
}

CustomErrorMessage.propTypes = {
  btnamen: PropTypes.string,
};
