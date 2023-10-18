import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "../mocks/intersectionObserverMock";
import SuperQuality from "../sections/SuperQuality";

describe("Super Quality - component", () => {
  test("should render properly", () => {
    render(<SuperQuality />);

    const titleElement = screen.getByRole("heading", { level: 2 });
    expect(titleElement).toBeInTheDocument();

    const paragraphElement1 = screen.getByText(/Ensuring.*elegance\./i);
    expect(paragraphElement1).toBeInTheDocument();

    const paragraphElement2 = screen.getByText(/our.*satisfaction/i);
    expect(paragraphElement2).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();

    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("alt", "Shoe8");
  });
});
