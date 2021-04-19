import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { link } from 'fs/promises';

test('renders user name po', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Po/i);  
  expect(linkElement).toBeInTheDocument();
});
