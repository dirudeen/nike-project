import { screen, render } from "@testing-library/react";
import "../mocks/intersectionObserverMock";
import { test, describe, expect } from "vitest";
import { CustomerReviews } from "../sections";
import { reviews } from "../constants";

describe("Customer Reviews - Component", () => {
  test("should render component correctly", () => {
    render(<CustomerReviews />);

    const headingElement = screen.getByRole("heading", {
      name: "What Our Customers Says?",
    });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(/What our customers says\?/i);

    const paragraphElement = screen.getByText(/Hear.*us\./i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test("should render 3 review cards correctly", () => {
    render(<CustomerReviews />);

    const reviewCards = screen.getAllByTestId("review-card");
    expect(reviewCards).toHaveLength(reviews.length);

    reviewCards.forEach((card) => {
      expect(card).toBeInTheDocument();
    });

    const customerImages = screen.getAllByAltText("customer");

    customerImages.forEach((image, i) => {
      expect(image).toHaveAttribute("src", `${reviews[i].imgURL}`);
    });
  });
  
});
