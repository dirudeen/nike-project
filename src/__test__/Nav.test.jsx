import { render, screen } from "@testing-library/react"
import Nav from "../components/Nav"
import { describe, expect, test } from "vitest"

describe('Nav component', () => {
    
    test('should render correctly', () => {
       render(<Nav />)
       const headerElement = screen.getByRole("banner")
       expect(headerElement).toBeInTheDocument() 
    });
    
});
