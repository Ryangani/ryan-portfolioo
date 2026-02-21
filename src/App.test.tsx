import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('renders navigation links', () => {
  render(<App />);
  const homeLink = screen.getByText(/home/i);
  const aboutLink = screen.getByText(/about/i);
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});
