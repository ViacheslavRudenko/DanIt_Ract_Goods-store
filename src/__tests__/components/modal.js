import Modal from "../../Component/Modal/Modal";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../../store/reducers/modal/modal";
import renderer from "react-test-renderer";

const product = {
  Id: "selinazawacki-shirt",
  Maker: "selinazawacki",
  img: "https://user-images.githubusercontent.com/41929050/61567058-142c1c80-aa33-11e9-89fb-b4f30d84d69d.png",
  Url: "https://www.instagram.com/p/BEXlpiZCnJ3",
  Title: "Floppy Crop",
  Description: "Used up the Diskette fabric today to make 2 of these crops.",
  Ratings: null,
  article: "3c260",
  price: 23000,
  color: "blue",
};

const store = createStore(reducer, {
  modal: { btn: [{ id: 1, text: "Add to cart" }], title: "TITLE" },
});
const onChange = jest.fn();
const Component = (
  <Provider store={store}>
    <Modal closeModal={onChange} actionWithModal={onChange} product={product} />
  </Provider>
);

describe("<Modal/> component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render component", () => {
    render(Component);
    screen.getByRole("button");
  });

  it("should render text in component", () => {
    render(Component);
    screen.getByText(/TITLE/);
    screen.getByText(/Floppy Crop/i);
    screen.getByText(/3c260/i);
    screen.getAllByText(/23000/);
  });

  it("should pass OnClick if btn is clicked", () => {
    render(Component);
    userEvent.pointer({
      keys: "[MouseLeft]",
      target: screen.getByRole("button"),
    });
    expect(onChange).toHaveBeenCalled();
  });
});
