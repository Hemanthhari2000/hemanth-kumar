import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ConnectLinks from "../components/Connect/ConnectLink";

describe("Connect Page Render Test", () => {
  it("should be able to render social media links", () => {
    render(<ConnectLinks />);

    const actualLinksWrapper = screen.getByTestId("connect_links");

    expect(actualLinksWrapper).toHaveTextContent("/hemanthhari2000");
    expect(actualLinksWrapper).toHaveTextContent("/hemi_hydrate");
    expect(actualLinksWrapper).toHaveTextContent("@hemanthhari2000");
  });
});
