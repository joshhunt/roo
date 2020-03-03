import React from "react";
import { render } from "@testing-library/react";
import Home from "./index";

import mockData from "../../data/restaurants";

jest.mock("../../api", () => ({
  useRestaurantAPI() {
    return mockData;
  }
}));

it("renders neighborhood name", () => {
  const { getByText } = render(<Home />);

  const linkElement = getByText("Fitzrovia");
  expect(linkElement).toBeInTheDocument();
});

it("renders the restaurant count", () => {
  const { getByText } = render(<Home />);

  const linkElement = getByText(`${mockData.restaurants.length} restaurants`);
  expect(linkElement).toBeInTheDocument();
});

it("renders a restaurant", () => {
  const { getByText } = render(<Home />);

  const linkElement = getByText(mockData.restaurants[0].name);
  expect(linkElement).toBeInTheDocument();
});
