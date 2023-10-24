import React from "react";
import { render, screen } from "@testing-library/react";
import StatBlock from "./StatBlock";

test("StatBlock component renders correctly", () => {
  render(
    <StatBlock
      heading="Your footprint"
      amount="7,565"
      unit="kg"
      subHeading="of carbon emissions"
    />
  );
  const headingElement = screen.getByText("Your footprint");
  const amountElement = screen.getByText("7,565");
  const subHeadingElement = screen.getByText("of carbon emissions");
  expect(headingElement).toBeInTheDocument();
  expect(amountElement).toBeInTheDocument();
  expect(subHeadingElement).toBeInTheDocument();
});
