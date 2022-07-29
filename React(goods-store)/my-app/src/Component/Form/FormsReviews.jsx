import "./form.scss";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import Forms from "./Forms";
import setModal from "../../store/actions/modal/modal";
import PropTypes from "prop-types";

export default function FormsReview({ setIsRevewAdded }) {
  const forms = [
    { formName: "userName", text: "Name" },
    { formName: "review", text: "Your review", formType: "textarea" },
  ];

  const initialValues = {
    userName: "",
    review: "",
  };

  const valuesValidation = object({
    userName: string().required("The field is required"),
    review: string().required("The field is required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (value) => {
    dispatch(
      setModal({
        isOpen: true,
        title: "Your review will be added after moderation by the operator",
        isBtnClose: true,
        btn: [{ id: 1, text: "Ok" }],

        content: (
          <>
            <p>Dear, {value.userName}</p>
            <p>{value.review}</p>
          </>
        ),
      })
    );
    setIsRevewAdded(true);
  };

  return (
    <Forms
      forms={forms}
      handleSubmit={handleSubmit}
      valuesValidation={valuesValidation}
      btnName={"Add review"}
      initialValues={initialValues}
    />
  );
}

FormsReview.propTypes = {
  setIsRevewAdded: PropTypes.func,
};
