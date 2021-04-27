import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { link } from "fs/promises";

test("Renders Never Changing Div", () => {
  render(<App />);
  const linkElement = screen.getByText(/This div does not answer to firebase/i);
  expect(linkElement).toBeInTheDocument();
});
