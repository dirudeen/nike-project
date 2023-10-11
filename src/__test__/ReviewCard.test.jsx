import { screen, render } from "@testing-library/react";
import ReviewCard from "../components/ReviewCard";
import { test, describe, expect } from "vitest";

describe("Review card", () => {
  test("should render correctly", () => {
    render(<ReviewCard />);
    const customerImgElement = screen.getByAltText(/customer/i);
    expect(customerImgElement).toBeInTheDocument();
  });

  test("should render correctly with props ", () => {
    render(
      <ReviewCard
        imgURL="https://via.placeholder.com/300.png/09f/fff"
        customerName="Hadiru"
        feedback="Good product"
        rating="4.6"
      />,
    );

    const starIconImgElement = screen.getByAltText(/star/i);
    expect(starIconImgElement).toBeInTheDocument();

    const ratingNumberElement = screen.getByText("4.6");
    expect(ratingNumberElement).toHaveTextContent("4.6");

    const customerNameElement = screen.getByRole("heading");
    expect(customerNameElement).toBeInTheDocument();
  });
});
