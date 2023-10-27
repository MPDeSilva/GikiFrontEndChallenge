import React from "react";
import { render, screen } from "@testing-library/react";
import TargetBadge from "./TargetBadge";

test("TargetBadge component renders correctly", () => {
  render(<TargetBadge targetYear={2030} targetAmount={2500} />);
  const badgeElement = screen.getByText("Your 2030 target is 2,500 kg");
  expect(badgeElement).toBeInTheDocument();
});
