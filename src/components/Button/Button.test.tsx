import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button label="Click Me" />);
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  it("executes the provided onClick function", () => {
    const onClick = jest.fn();
    render(<Button label="Click Me" onClick={onClick} />);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
