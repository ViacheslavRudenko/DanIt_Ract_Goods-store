import NumberFormat from "react-number-format";
import { Field } from "formik";
import CustomErrorMessage from "./CustomErrorMessage";
import PropTypes from "prop-types";

export default function CustomForm({
  form: { text, formName, formType },
  updateData,
}) {
  const renderSwitch = () => {
    switch (formName) {
      case "phoneNumber":
        return (
          <NumberFormat
            name={formName}
            id={formName}
            format="(###)###-##-##"
            onValueChange={(values) => {
              updateData(values.value);
            }}
            //allowEmptyFormatting
            mask="_"
            className={"form__input"}
          />
        );
      default:
        return (
          <Field
            name={formName}
            id={formName}
            type={formType ? formType : "input"}
            as={formType === "textarea" ? formType : "input"}
            className={"form__input"}
          />
        );
    }
  };

  return (
    <>
      <label htmlFor={formName}>{text}</label>
      {renderSwitch()}
      <CustomErrorMessage name={formName} />
    </>
  );
}

CustomForm.propTypes = {
  text: PropTypes.string,
  formName: PropTypes.string,
  formType: PropTypes.string,
  updateData: PropTypes.func,
};
