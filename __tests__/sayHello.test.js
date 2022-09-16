import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SayHello from "../components/SayHello";

describe("Say Hello Component render test", () => {
  it("should be able to render the say hello component", () => {
    render(<SayHello />);

    const actualWannaConnectText = screen.getByText("Wanna Connect?");

    expect(actualWannaConnectText).toBeInTheDocument();
  });
});
