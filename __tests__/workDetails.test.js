import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WorkDetails from "../pages/works/[slug]";

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

describe("Work Details render Test", () => {
  it("should be able to render work details", () => {
    const work = {
      id: 1,
      URL: "/videos/fc_loaders.mp4",
      title: "FC Loaders",
      oneLineDescription: "Animated Loaders package purely built on Flutter",
      fullDescription:
        "An Open Source Flutter package containing a variety of animated loaders purely implemented in Dart. These Loaders are customizable to a certain extent. This flutter package was built in order to explore how animations in flutter works.",
      techStack: ["Flutter", "Dart"],
      source: "https://github.com/Four-Cups/FC-Loaders",
      slug: "fc-loaders",
    };

    render(<WorkDetails work={work} />);

    const titleInCard = screen.getByText(work.title);
    const fullDescriptionInCard = screen.getByText(work.fullDescription);

    expect(titleInCard).toBeInTheDocument();
    expect(fullDescriptionInCard).toBeInTheDocument();
  });
});
