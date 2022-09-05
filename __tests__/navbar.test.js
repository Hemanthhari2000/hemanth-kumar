import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Navbar from "../components/Navbar";

describe("Navbar Testing", () => {
  it("should be able to render navbar", () => {
    render(<Navbar />);

    const navbarElementInNavbarComponent = screen.getByTestId("navbar");

    expect(navbarElementInNavbarComponent).toBeInTheDocument();
  });
  it("should be able to render the logo component", () => {
    render(<Navbar />);

    const logoComponentInNavbarComponent = screen.getByText("Hemanth Kumar");

    expect(logoComponentInNavbarComponent).toBeInTheDocument();
  });
  it("should be able to render navlinks", () => {
    render(<Navbar />);

    const navlinksInNavbarComponent = screen.getAllByTestId("navlink");

    expect(navlinksInNavbarComponent.length).toBe(3);
  });

  it("should be able to render color mode toggle button", () => {
    render(<Navbar />);

    const colorModeToggleButtonInNavbar =
      screen.getByTestId("color_mode_toggle");

    expect(colorModeToggleButtonInNavbar).toBeInTheDocument();
  });
});
