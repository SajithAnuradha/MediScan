// src/pages/Prediction/Prediction.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Prediction from "../../src/pages/Prediction/prediction";
import { BrowserRouter } from "react-router-dom";

// Mocked Prediction component wrapped with BrowserRouter
const MockedPrediction = () => (
  <BrowserRouter>
    <Prediction />
  </BrowserRouter>
);

describe("Prediction Component", () => {
  // Test for the heading
  it("renders the Results heading", () => {
    render(<MockedPrediction />);
    const heading = screen.getByText(/Results/i);
    expect(heading).toBeInTheDocument();
  });

  // Test for the prediction title
  it("renders the Prediction title", () => {
    render(<MockedPrediction />);
    const predictionTitle = screen.getByText(/Prediction/i);
    expect(predictionTitle).toBeInTheDocument();
  });

  // Test for the prediction content
  it("renders the prediction content with default result value", () => {
    render(<MockedPrediction />);
    const predictionContent = screen.getByText(
      /This is the result for your uploaded image:/i
    );
    expect(predictionContent).toBeInTheDocument();
  });

  // Test for the Go Back link
  it("renders the Go Back link and redirects correctly", () => {
    render(<MockedPrediction />);
    const goBackLink = screen.getByText(/Go Back/i);
    expect(goBackLink).toBeInTheDocument();
    expect(goBackLink).toHaveAttribute("href", "/home"); // Assuming it links to /home
  });
});
