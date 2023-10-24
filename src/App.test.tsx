import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App component renders correctly", () => {
  render(<App />);

  const navBarElement = screen.getByRole("banner");
  const gikiBadgeElement = screen.getByAltText("Giki Badge");
  const footprintElement = screen.getByText("Your footprint");
  const takeAStepButtonElement = screen.getByText("Take a step");

  expect(navBarElement).toBeInTheDocument();
  expect(gikiBadgeElement).toBeInTheDocument();
  expect(footprintElement).toBeInTheDocument();
  expect(takeAStepButtonElement).toBeInTheDocument();
});
