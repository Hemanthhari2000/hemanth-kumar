import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../components/About";

describe("About Section", () => {
  it("should render about section", () => {
    render(<About />);

    const titleInAboutComponent = screen.getByText("About");
    const contentInAboutComponent = screen.getByTestId("about-content");

    expect(titleInAboutComponent).toBeInTheDocument();
    expect(contentInAboutComponent).toBeInTheDocument();
  });
});
