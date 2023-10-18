import { render, screen } from "@testing-library/react";
import ServiceCard from "../components/ServiceCard";
import { test, describe, expect } from "vitest";
import "../mocks/intersectionObserverMock";

describe("Service card", () => {
  test("should render correctly with props", () => {
    render(
      <ServiceCard
        imgURL=" https://via.placeholder.com/300.png/09f/fff"
        label="Free shipping"
        subText="Some piece of subtext"
      />,
    );
    const iconElement = screen.getByAltText("Free shipping");
    expect(iconElement).toBeInTheDocument();

    const labelElement = screen.getByRole("heading");
    expect(labelElement).toBeInTheDocument();

    const subTextElement = screen.getByText(/some piece of subtext/i);
    expect(subTextElement).toBeInTheDocument();
  });
});
