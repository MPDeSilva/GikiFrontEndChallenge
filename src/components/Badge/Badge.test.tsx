import React from "react";
import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

test("Badge component renders correctly", () => {
  render(<Badge text="Your 2030 target is 2,500 kg" />);
  const badgeElement = screen.getByText("Your 2030 target is 2,500 kg");
  expect(badgeElement).toBeInTheDocument();
});
