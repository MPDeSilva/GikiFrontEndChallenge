import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StatBlock from "./StatBlock";

describe("StatBlock", () => {
  it("renders correctly with large size", async () => {
    render(
      <StatBlock
        heading="Test Stat"
        amount={0}
        unit="kg"
        subHeading="Test subheading"
        size="large"
      />
    );

    expect(screen.getByText("Test Stat")).toBeInTheDocument();
    expect(screen.getByText("kg")).toBeInTheDocument();
  });

  it("renders correctly with small size", async () => {
    render(
      <StatBlock
        heading="Test Stat"
        amount={0}
        unit="kg"
        subHeading="Test subheading"
        size="small"
      />
    );

    expect(screen.getByText("Test Stat")).toBeInTheDocument();
    expect(screen.getByText("kg")).toBeInTheDocument();
  });
});
