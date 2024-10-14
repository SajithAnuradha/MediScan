// src/pages/Home/Home.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Home from "../../src/pages/Home/Home";
import { BrowserRouter } from "react-router-dom";

// Wrap the Home component with BrowserRouter to allow Link components to function
const MockedHome = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

describe("Home Component", () => {
  beforeEach(() => {
    render(<MockedHome />);
  });

  // Test for the Home link
  it("renders the Home link", () => {
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/home"); // Assuming it links to /home
  });

  // Test for the Setting link
  it("renders the Setting link", () => {
    const settingLink = screen.getByText(/setting/i);
    expect(settingLink).toBeInTheDocument();
    expect(settingLink).toHaveAttribute("href", "/setting"); // Assuming it links to /setting
  });

  // Test for the History link
  it("renders the History link", () => {
    const historyLink = screen.getByText(/history/i);
    expect(historyLink).toBeInTheDocument();
    expect(historyLink).toHaveAttribute("href", "/history"); // Assuming it links to /history
  });

  // Test for the User Greeting
  it("renders the User Greeting section", () => {
    const greetingText = screen.getByText(/How are you feeling today?/i);
    expect(greetingText).toBeInTheDocument();
  });

  // Test for the User Avatar
  it("renders the User Avatar image", () => {
    const userImage = screen.getByAltText(/User/i);
    expect(userImage).toBeInTheDocument();
    expect(userImage).toHaveAttribute(
      "src",
      expect.stringContaining("profile_photo.png")
    ); // Ensure the correct image is used
  });
});
