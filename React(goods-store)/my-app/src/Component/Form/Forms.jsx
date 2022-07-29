import "./form.scss";
import { Formik, Form } from "formik";
import CustomForm from "./CustomForm";
import PropTypes from "prop-types";

export default function Forms({
  forms,
  phoneNumberValue,
  updateData,
  handleSubmit,
  valuesValidation,
  btnName,
  initialValues,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => {
        values = { ...values, phoneNumber: phoneNumberValue };
        handleSubmit(values);
        action.resetForm();
      }}
      validationSchema={valuesValidation}
    >
      {(props) => {
        return (
          <Form onSubmit={props.handleSubmit} className="form">
            <ul>
              {forms.map((form) => (
                <li key={form.formName} className={"form__item"}>
                  <CustomForm form={form} updateData={updateData} />
                </li>
              ))}
            </ul>
            <div className="form__btn">
              <button className="btn btn__item" type="submit">
                {btnName}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

Forms.propTypes = {
  forms: PropTypes.array,
  phoneNumberValue: PropTypes.string,
  handleSubmit: PropTypes.func,
  valuesValidation: PropTypes.object,
  btnName: PropTypes.string,
  initialValues: PropTypes.object,
};
