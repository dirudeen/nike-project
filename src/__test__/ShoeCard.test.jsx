import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ShoeCard from "../components/ShoeCard";
import { describe, expect, test, vitest } from "vitest";
import { shoes } from "../constants";

const mockFn = vitest.fn();

describe("Shoe card", () => {
  test("should render correctly with image props", () => {
    render(<ShoeCard imgURL={shoes[1].thumbnail} />);
    const thumnailElement = screen.getByRole("img");
    expect(thumnailElement).toBeInTheDocument();
  });

  test("should run the function after clicking once", async () => {
    userEvent.setup();
    render(
      <ShoeCard
        changeBigShoeImg={mockFn}
        bigShoeImg={shoes[2].bigShoe}
        imgURL={shoes}
      />,
    );
    const wrapperElement = screen.getByRole("button");
    await userEvent.click(wrapperElement);
    expect(mockFn).toBeCalledTimes(1);
  });
});
