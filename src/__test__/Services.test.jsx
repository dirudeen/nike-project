import { screen, render } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import { Services } from "../sections";
import "../mocks/intersectionObserverMock";
import { services } from "../constants";

describe("Services - Component", () => {
  test("should render correctly", () => {
    render(<Services />);
    const sectionElemnt = screen.getByTestId("Services");
    expect(sectionElemnt).toBeInTheDocument();

    const servicesElement = screen.getAllByRole("heading");
    expect(servicesElement).toHaveLength(services.length);
  });
});
