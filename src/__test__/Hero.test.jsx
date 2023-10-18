import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Hero from "../sections/Hero";
import { shoes, statistics } from "../constants";

describe("Hero - Component", () => {
  test("should render with props correctly", () => {
    render(<Hero theme="dark" />);

    //test for the presences of some element
    const paragraphElement1 = screen.getByText(/Our summer collections/i);
    expect(paragraphElement1).toBeInTheDocument();

    const titleElement = screen.getByRole("heading");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(/Nike/i);

    const paragraphElement2 = screen.getByText(
      "Discover stylish Nike arrivals, quality comfort and innovation for your active life",
    );
    expect(paragraphElement2).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", {
      name: "Shop Now arrow-right",
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/Shop Now/i);

    const statisticsContainerElement = screen.getByTestId("statistics");
    expect(statisticsContainerElement).toBeInTheDocument();

    const statsElements = screen.getAllByTestId(/stats/i);
    expect(statsElements).toHaveLength(statistics.length);

    const bigShoeImgElement = screen.getByRole("img", {
      name: "Big shoe collection",
    });
    expect(bigShoeImgElement).toBeInTheDocument();

    const thumnailShoeImgElements = screen.getAllByAltText("shoe collection");
    expect(thumnailShoeImgElements).toHaveLength(shoes.length);
  });
});
