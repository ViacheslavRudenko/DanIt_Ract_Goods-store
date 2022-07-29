import "./form.scss";
import { object, string, number } from "yup";
import { removeAllCartList } from "../../store/actions/cart/cart";
import { useDispatch } from "react-redux";
import CustomForm from "./CustomForm";
import { useState } from "react";
import Forms from "./Forms";
import PropTypes from "prop-types";

export default function FormsOrder({ cartList }) {
  const forms = [
    { formName: "userName", text: "Name" },
    { formName: "userLastName", text: "Last name" },
    { formName: "phoneNumber", text: "Phone number" },
    { formName: "adress", text: "Your adress for delivery" },
    { formName: "age", text: "Your age" },
  ];
  const initialValues = {
    userName: "",
    userLastName: "",
    phoneNumber: "",
    adress: "",
    age: "",
  };

  const valuesValidation = object({
    userName: string().required("The field is required"),
    userLastName: string().required("The field is required"),
    phoneNumber: number().typeError("Phone number is not valid"),
    adress: string().required("The field is required"),
    age: number()
      .required("The field is required")
      .typeError("Age is not valid"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const orderData = { customerData: { ...values }, products: cartList };
    dispatch(removeAllCartList());
    console.log("Order: ", orderData);
  };

  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const updateData = (value) => setPhoneNumberValue(value);

  return (
    <Forms
      forms={forms}
      phoneNumberValue={phoneNumberValue}
      updateData={updateData}
      handleSubmit={handleSubmit}
      valuesValidation={valuesValidation}
      btnName={"Continue"}
      initialValues={initialValues}
    />
  );
}

FormsOrder.propTypes = {
  cartList: PropTypes.array,
};
