import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import WorkCard from "../components/WorkCard";

jest.mock("@chakra-ui/react", () => {
  const originalModule = jest.requireActual("@chakra-ui/react");

  return {
    __esModule: true,
    ...originalModule,
    useBreakpointValue: jest.fn().mockImplementation(() => ({
      base: "none",
      md: "translate(0, -8px)",
    })),
  };
});

describe("Work Card render Test", () => {
  it("should be able to render the contents of the card", () => {
    const work = {
      URL: "testURL",
      title: "FC Loaders",
      oneLineDescription: "Animated Loaders package purely built on Flutter",
    };

    render(<WorkCard work={work} />);

    const titleInCard = screen.getByText(work.title);
    const descriptionInCard = screen.getByText(work.oneLineDescription);

    expect(titleInCard).toBeInTheDocument();
    expect(descriptionInCard).toBeInTheDocument();
  });
});
