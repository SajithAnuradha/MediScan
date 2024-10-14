import { render, screen } from '@testing-library/react';
import Start from '../../src/pages/Start/Start';
import { describe, it, expect } from 'vitest';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('Start Component', () => {
    const renderComponent = () => render(
    <BrowserRouter>
    <Start /></BrowserRouter>);
  
    it('renders the MediScan title', () => {
      renderComponent();
      const titleElement = screen.getByText(/MediScan/i);
      expect(titleElement).toBeInTheDocument();
    });
  
    it("renders the 'Continue as a User' button", () => {
      renderComponent();
      const userButton = screen.getByText(/Continue as a User/i);
      expect(userButton).toBeInTheDocument();
    });
  
    it("renders the 'Continue as a Guest' button", () => {
      renderComponent();
      const guestButton = screen.getByText(/Continue as a Guest/i);
      expect(guestButton).toBeInTheDocument();
    });
  
    it('renders the medical image', () => {
      renderComponent();
      const imageElement = screen.getByAltText(/Medical Illustration/i);
      expect(imageElement).toBeInTheDocument();
    });
  });