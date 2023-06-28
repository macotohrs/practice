import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import Default from "../src/app/@analytics/default";
import Page from "../src/app/@analytics/page";

// Test for the Default component
test("renders Default @Analytics Page", () => {
  render(<Default />);
  const defaultElement = screen.getByText(/Default @Analytics Page/i);
  expect(defaultElement).toBeInTheDocument();
});

// Test for the Page component
test("renders @Analytics Page with heading and subheading", () => {
  render(<Page />);
  const headingElement = screen.getByText(/@Analytics/i);
  const subheadingElement = screen.getByText(/Parallel Routing/i);
  expect(headingElement).toBeInTheDocument();
  expect(subheadingElement).toBeInTheDocument();
});
