import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ErrorPage from "../pages/404";

describe("404 Error Page Render Test", () => {
  it("should render the 3d model video", () => {
    render(<ErrorPage />);

    const actualVideoElement = screen.getByTestId("404_video");

    expect(actualVideoElement).toBeInTheDocument();
  });
});
