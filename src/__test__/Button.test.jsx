import { render, screen } from "@testing-library/react";
import Button from "../components/Button";
import { describe, expect, test } from "vitest";

describe("Button", () => {
  test("should render correctly", () => {
    render(<Button />);
    const buttonElment = screen.getByRole("button");
    expect(buttonElment).toBeInTheDocument();
  });

  test("should render correctly with props", () => {
    render(
      <Button
      label="Sign up"
      icon={"https://www.gstatic.com/webp/gallery3/1.sm.png"}
      bgClr="#fffff"
      borderClr="#fffff"
      textClr="#fffff"
      />,
    );

    const buttonElment = screen.getByRole("button")
    expect(buttonElment).toHaveTextContent("Sign up")

    const imgElement = screen.getByAltText(/arrow-right/i)
    expect(imgElement).toHaveAttribute("src")
  });
});
