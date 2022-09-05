import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

describe("Footer Section", () => {
  it("should render the footer", () => {
    render(<Footer />);

    const titleInFooter = screen.getByText("Proudly made in");
    const copyrightInFooter = screen.getByText(
      "Hemanth Kumar, 2022 All Rights Reserved"
    );

    expect(titleInFooter).toBeInTheDocument();
    expect(copyrightInFooter).toBeInTheDocument();
  });
});
