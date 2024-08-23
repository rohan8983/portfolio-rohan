import React from "react";
import Main from "../../components/Main";
import { render, screen } from "@testing-library/react";

describe("Should render main component", () => {
  it("should render Main and header", () => {
    render(<Main />);
    expect(
      screen.getByText(/LET'S BUILD SOMETHING unbelievable TOGETHER/i)
    ).toBeInTheDocument();
  });
});
