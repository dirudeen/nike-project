import {render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "../mocks/intersectionObserverMock";
import { Subscribe } from "../sections";
import userEvent from "@testing-library/user-event";

describe("Subscribe - Component", () => {
  test("should render correctly", () => {
    render(<Subscribe />);
    const sectionElement = screen.getByTestId("subscribe-section");
    expect(sectionElement).toBeInTheDocument();

    const headingElement = screen.getByRole("heading", { level: 3 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(
      /Sign up for updates & newsletter/i,
    );

    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();

    const inputTextElement = screen.getByRole("textbox");
    expect(inputTextElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button", {
      name: "Sign Up",
    });
    expect(submitButtonElement).toBeInTheDocument();
  });
  
  test('form element should have coral red border when input is clicked', async() => {
    render(<Subscribe />);
    userEvent.setup()
    const inputElement = screen.getByRole("textbox");

    expect(screen.getByRole("form")).toHaveClass("sm:border-slate-gray");

    await userEvent.click(inputElement)

    const formElement = screen.getByRole("form");
    expect(formElement).toHaveClass("sm:border-coral-red")
  });
  
  test('input should have the value test@gmail.com', async() => {
    render(<Subscribe />);
    userEvent.setup()
    const inputElement = screen.getByRole("textbox");
    await userEvent.type(inputElement, "test@gmail.com");
    expect(inputElement).toHaveValue("test@gmail.com")
  });
  
});
