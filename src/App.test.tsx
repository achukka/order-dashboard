import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { link } from "fs/promises";

test("renders hello", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders another div", () => {
  render(<App />);
  const linkElement = screen.getByText(/Another div/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders firebase auth provider", () => {
  render(<App />);
  const linkElement = screen.getByText(/Firebase Auth Provider Child/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders not signed in", () => {
  render(<App />);
  const linkElement = screen.getByText(/not signed in/i);
  expect(linkElement).toBeInTheDocument();
});
