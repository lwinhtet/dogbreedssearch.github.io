import { screen } from "@testing-library/react";
import { renderWithRedux } from "../setupTests";
import App from "../App";

describe("App", () => {
  it("renders header, nav, and feed components", () => {
    renderWithRedux(<App />);

    const headerElement = screen.getByText("Search Dogs By Breed");
    const navElement = screen.getByRole("navigation");
    const feedElement = screen.getByRole("main");

    expect(headerElement).toBeInTheDocument();
    expect(navElement).toBeInTheDocument();
    expect(feedElement).toBeInTheDocument();
  });
});
