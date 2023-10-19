import { screen, render } from "@testing-library/react";
import "../mocks/intersectionObserverMock";
import { test, describe, expect } from "vitest";
import { CustomerReviews } from "../sections";

describe("Customer Reviews - Component", () => {

    test('should render component correctly', () => {
        render(<CustomerReviews />);

        const headingElement = screen.getByRole("heading",{name: "What Our Customers Says?"})
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent(/What our customers says\?/i);
    });
    
})
