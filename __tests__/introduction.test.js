import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Introduction from "../components/Introduction";

describe("Introduction Component Testing", () => {
  it("should be able to render the introduction component", () => {
    const title = "Hemanth Kumar";
    const subtitle =
      "and I'am an Application Developer {" &
      "} AI/ML Researcher based in India";
    render(<Introduction title={title} subtitle={subtitle} />);

    const headingInIntroduction = screen.getByText("Hemanth Kumar");

    expect(headingInIntroduction).toBeInTheDocument();
  });

  it("should be able to render the button component", () => {
    const title = "Hemanth Kumar";
    const subtitle =
      "and I'am an Application Developer {" &
      "} AI/ML Researcher based in India";
    render(<Introduction title={title} subtitle={subtitle} />);

    const buttonTextInIntroduction = screen.getByText("My Portfolio");

    expect(buttonTextInIntroduction).toBeInTheDocument();
  });
});
