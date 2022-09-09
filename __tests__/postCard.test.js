import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PostCard from "../components/Cards/postCard";

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

describe("Post Card render test", () => {
  it("should be able to render the contents of the post card.", () => {
    const post = {
      URL: "https://miro.medium.com/max/788/1*_7Zr5MciHA03yniuIbzoBQ.jpeg",
      title: "Object Detection using SSD and DNN",
      description:
        "Understanding about Single Shot MultiBox Detector and OpenCV's Deep Neural Network for Object Detection",
      source:
        "https://medium.com/featurepreneur/object-detection-using-single-shot-multibox-detection-ssd-and-opencvs-deep-neural-network-dnn-d983e9d52652",
      readTime: "6",
      published: "Apr 4, 2021",
    };
    render(<PostCard post={post} />);

    const actualTitle = screen.getByText(post.title);
    const actualDescription = screen.getByText(post.description);
    const actualPUblishedAndReadTime = screen.getByTestId(
      "published_and_read_time"
    );

    expect(actualTitle).toBeInTheDocument();
    expect(actualDescription).toBeInTheDocument();
    expect(actualPUblishedAndReadTime).toBeInTheDocument();
  });
});
