import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { link } from "fs/promises";

test("Renders Login Anonymously Button", () => {
  render(<App />);
  const linkElement = screen.getByText(/Login Anonymously/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders Login With Google Button", () => {
  render(<App />);
  const linkElement = screen.getByText(/Login With Google/i);
  expect(linkElement).toBeInTheDocument();
});
