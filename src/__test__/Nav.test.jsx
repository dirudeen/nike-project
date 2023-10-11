import { render, screen } from "@testing-library/react";
import Nav from "../components/Nav";
import { describe, expect, test } from "vitest";
import { navLinks } from "../constants";

describe("Nav component", () => {
  test("should render correctly", () => {
    render(<Nav />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();

    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();

    const logoImgElement = screen.getByAltText(/nike logo/i);
    expect(logoImgElement).toBeInTheDocument();

    const navItemElements = screen.getAllByRole("listitem");
    expect(navItemElements).toHaveLength(navLinks.length);

    const hamburgerIconElement = screen.getByAltText("hamburger-menu");
    expect(hamburgerIconElement).toBeInTheDocument();
  });
});
