import "./form.scss";
import { object, string } from "yup";
import Forms from "./Forms";
import { loginData } from "./data";
import setModal from "../../store/actions/modal/modal";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

export default function FormsLogin({ setIsLogin }) {
  const dispatch = useDispatch();
  const forms = [
    { formName: "email", text: "Email" },
    { formName: "password", text: "Password", formType: "password" },
  ];
  const initialValues = {
    email: "",
    password: "",
  };

  const valuesValidation = object({
    email: string()
      .required("Valid email required")
      .email("Valid email required"),
    password: string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });

  const handleSubmit = (values) => {
    const isLogin = loginData.some(
      (data) => data.email === values.email && data.password === values.password
    );

    setIsLogin(isLogin);
    dispatch(
      setModal({
        ...setModal,
        isOpen: false,
      })
    );
    localStorage.setItem("isLogin", JSON.stringify(true));
  };

  return (
    <Forms
      forms={forms}
      handleSubmit={handleSubmit}
      valuesValidation={valuesValidation}
      btnName={"Continue"}
      initialValues={initialValues}
    />
  );
}

FormsLogin.propTypes = {
  setIsLogin: PropTypes.func,
};
