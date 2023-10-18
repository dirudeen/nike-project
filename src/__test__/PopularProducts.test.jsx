import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import PopularProducts from "../sections/PopularProducts";
import "../mocks/intersectionObserverMock";
import { products } from "../constants";

describe("PopularProducts - Component", () => {
  test("should render correctly", () => {
    render(<PopularProducts />);

    const headingElement = screen.getByRole("heading", { level: 2 });
    expect(headingElement).toBeInTheDocument();

    const paragraphElement = screen.getByText(
      /Experience.*selections\. Discover.*value/i,
    );
    expect(paragraphElement).toBeInTheDocument();

    const productsContainerElement = screen.getByTestId(
      "popular-products-container",
    );

    expect(productsContainerElement).toBeInTheDocument();
  });

  test("should return 4 popular products", () => {
    render(<PopularProducts />);
    const popularProductsElements = screen.getAllByTestId(
      "popular-product-card",
    );
    expect(popularProductsElements).toHaveLength(products.length);
  });
});
