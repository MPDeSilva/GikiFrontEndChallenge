import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("Button component renders correctly", () => {
  render(<Button label="Click Me" />);
  const buttonElement = screen.getByText("Click Me");
  expect(buttonElement).toBeInTheDocument();
});

test("Button onClick function is called", () => {
  const onClickMock = jest.fn();
  render(<Button label="Click Me" onClick={onClickMock} />);
  const buttonElement = screen.getByText("Click Me");
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});
