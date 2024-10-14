import React from "react";
import { render, screen } from "@testing-library/react";
import Confident from "../../src/pages/Confiedent/Confident"; // Path to your Confident component
import "@testing-library/jest-dom"; // for extended matchers like toBeInTheDocument

describe("Confident Component", () => {
  // Test 1: Heading Render
  it("renders the 'Model Confidence' heading", () => {
    render(<Confident confidence={80} />);

    const heading = screen.getByText(/Model Confidence/i);
    expect(heading).toBeInTheDocument();
  });

  // Test 2: Circular Progress with Confidence 50%
  it("displays 50% in the Circular Progressbar", () => {
    render(<Confident confidence={50} />);

    const progressText = screen.getByText("50%");
    expect(progressText).toBeInTheDocument();
  });

  // Test 3: Circular Progress with Confidence 100%
  it("displays 100% in the Circular Progressbar", () => {
    render(<Confident confidence={100} />);

    const progressText = screen.getByText("100%");
    expect(progressText).toBeInTheDocument();
  });

  // Test 4: Circular Progress with Confidence 0%
  it("displays 0% in the Circular Progressbar", () => {
    render(<Confident confidence={0} />);

    const progressText = screen.getByText("0%");
    expect(progressText).toBeInTheDocument();
  });
});
