import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../components/About";

describe("About Section", () => {
  it("should render about section", () => {
    render(<About />);

    const titleInAboutComponent = screen.getByText("About");

    expect(titleInAboutComponent).toBeInTheDocument();
  });
});
