import { screen, render } from "@testing-library/react";
import PopularProductCard from "../components/PopularProductCard";
import  "../mocks/intersectionObserverMock";
import { test, describe, expect } from "vitest";

describe("Popular product card", () => {
  test("should render correctly", () => {
    render(<PopularProductCard />);
    const starImgElement = screen.getByAltText(/rating/i);
    expect(starImgElement).toBeInTheDocument();

    const shoeNameElement = screen.getByRole("heading", { level: 3 });
    expect(shoeNameElement).toBeInTheDocument();
  });

  test("should render flawlessly with props", () => {
    render(
      <PopularProductCard
        imgURL="https://via.placeholder.com/300.png/09f/fff"
        name="Nike"
        price="$200.45"
        rating="4.4"
      />,
    );

    const shoeImageElement = screen.getByAltText(/nike/i);
    expect(shoeImageElement).toBeInTheDocument();

    const ratingNumberElement = screen.getByText("4.4");
    expect(ratingNumberElement).toHaveTextContent("4.4");

    const priceElement = screen.getByText("$200.45");
    expect(priceElement).toHaveTextContent("$200.45");
  });
});
