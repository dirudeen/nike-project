import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "../mocks/intersectionObserverMock";
import { SpecialOffer } from "../sections";

describe("Special Offer - Component", () => {
  test("Should render component correctly", () => {
    render(<SpecialOffer />);

    const imgElement = screen.getByAltText("Special-Offer");
    expect(imgElement).toBeInTheDocument();

    const headingElement = screen.getByRole("heading", { level: 2 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(/Special Offer/i);

    const paragraphElement = screen.getByText(/Embark.*deals\. From.*apart\./i);
    expect(paragraphElement).toBeInTheDocument();

    const paragraphElement2 = screen.getByText(
      /Navigate.*short of exceptional\./i,
    );
    expect(paragraphElement2).toBeInTheDocument();
  });

  test('should render button component correctly', () => {
    render(<SpecialOffer />);

    const buttonElement = screen.getByRole("button", {
        name: "Learn More"
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/learn more/i);
    expect(buttonElement).toHaveClass(
      "bg-white border-slate-grey text-slate-gray"
    );
  
  });
  
});
