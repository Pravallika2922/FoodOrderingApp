import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Load contact us component", () => {
  render(<ContactUs />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
test("should load button inside contact component", () => {
  render(<ContactUs />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});
test("Should load two input boxes", () => {
  render(<ContactUs />);
  const inputBoxes = screen.getAllByRole("textbox");
  console.log(inputBoxes); // consoles an array of React elements which is in turn an object.
  expect(inputBoxes.length).toBe(2);
});
