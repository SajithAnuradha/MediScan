// src/pages/History/History.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import History from "../../src/pages/History/History";

describe("History Component", () => {
  // Test for the Medical History heading
  it("renders the Medical History heading", () => {
    render(<History />);
    const heading = screen.getByText(/Medical History/i);
    expect(heading).toBeInTheDocument();
  });

  // Test for the profile name
  it("renders the profile name", () => {
    render(<History />);
    const profileName = screen.getByText(/Muhammad Anas/i);
    expect(profileName).toBeInTheDocument();
  });

  // Test for the location details
  it("renders the location details", () => {
    render(<History />);
    const location = screen.getByText(/Islamabad, Pakistan/i);
    expect(location).toBeInTheDocument();
  });

  // Test for the age details
  it("renders the age details", () => {
    render(<History />);
    const age = screen.getByText(/14 years/i);
    expect(age).toBeInTheDocument();
  });
});
