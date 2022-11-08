import Button from "../../Component/Button/Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

describe("<Button/> component", () => {
  const btn = [{ id: 1, text: "Add to cart" }];

  const onChange = jest.fn();
  const BtnComponent = <Button btn={btn} actionWithModal={onChange} />;

  it("renders correctly", () => {
    const tree = renderer.create(BtnComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render component", () => {
    render(BtnComponent);
    screen.getByRole("button");
  });

  it("should render text in component", () => {
    render(BtnComponent);
    screen.getByText(/add to cart/i);
  });

  it("should pass OnClick if btn is clicked", () => {
    render(BtnComponent);

    userEvent.pointer({
      keys: "[MouseLeft]",
      target: screen.getByRole("button"),
    });

    expect(onChange).toHaveBeenCalled();
  });
});
