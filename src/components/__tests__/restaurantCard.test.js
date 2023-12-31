import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { withOpenLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("Should render restaurant card component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Meridian Restaurant");
  expect(name).toBeInTheDocument();
});

test("Should render the component with Open label", () => {
  const Component = withOpenLabel(RestaurantCard);
  render(<Component resData={MOCK_DATA} />);
  const name = screen.getByText("Open");
  expect(name).toBeInTheDocument();
});
