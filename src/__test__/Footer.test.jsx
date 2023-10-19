import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Footer } from "../sections";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

describe("Footer - Component", () => {
  test("should render correctly", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();

    const logoImglink = screen.getByAltText("footer Logo");
    expect(logoImglink).toBeInTheDocument();
    expect(logoImglink).toHaveAttribute("src", `${footerLogo}`);

    const textElement = screen.getByText(/Get.*store\. Find.*Rewards/i);
    expect(textElement).toBeInTheDocument();
  });

  test("should render 3 social media icons", () => {
    render(<Footer />);
    const socialMediaIcons = screen.getAllByTestId("social-media-icon");
    expect(socialMediaIcons.length).toBe(socialMedia.length);

    socialMediaIcons.forEach((icon) => {
      expect(icon).toBeInTheDocument();
    });

    for (let i = 0; i < socialMedia.length; i++) {
      expect(screen.getByAltText(`${socialMedia[i].alt}`)).toHaveAttribute(
        "src",
        `${socialMedia[i].src}`,
      );
    }
  });

  test("should all footer links correctly", () => {
    render(<Footer />);

    const footerLinkSectionElements = screen.getAllByTestId("footer-link");
    expect(footerLinkSectionElements.length).toBe(footerLinks.length);

    footerLinkSectionElements.forEach((link) => {
      expect(link).toBeInTheDocument();
    });

    const sectionHeadingElements = screen.getAllByRole("heading");

    sectionHeadingElements.forEach((heading) => {
      expect(heading).toBeInTheDocument();
    });

    const anchorElements = screen.getAllByTestId("link-element");
    anchorElements.forEach((anchorElement) => {
        expect(anchorElement).toBeInTheDocument()
    })
  });

  test('should render copyright texts and image', () => {
    render(<Footer />)

    const copyrightSignElement = screen.getByAltText("copyright Sign")
    expect(copyrightSignElement).toBeInTheDocument()
    expect(copyrightSignElement).toHaveAttribute("src", `${copyrightSign}`)

    const textElement = screen.getByText("CopyRight. All rights reserved.");
    expect(textElement).toBeInTheDocument();

    const TermsElement = screen.getByText("Terms & conditions");
    expect(TermsElement).toBeInTheDocument();
  
  });
  
});
