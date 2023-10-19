import { render, screen } from "@testing-library/react";
import Nav from "../components/Nav";
import { describe, expect, test } from "vitest";
import { navLinks } from "../constants";
import userEvent from "@testing-library/user-event";


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

    navItemElements.forEach((navItemElement) => {
      expect(navItemElement).toBeInTheDocument();
    })

    const hamburgerIconElement = screen.getByAltText("hamburger-menu");
    expect(hamburgerIconElement).toBeInTheDocument();
  });

  test('ul element in nav should have the class sidebar-Out when hamburger-menu is clicked', async() => {
    render(<Nav onToggle={() => {}}/>);
    userEvent.setup()
    const navListElement = screen.getByRole("list");
    expect(navListElement).toHaveClass("sidebar-In");
    const hamburgerIconElement = screen.getByRole("button");
    await userEvent.click(hamburgerIconElement);
    expect(navListElement).toHaveClass("sidebar-Out");
  });
  
});
