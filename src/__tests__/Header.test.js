import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders Header component with the provided title", () => {
  const title = "Search Dogs By Breeds";
  
  render(<Header title={title} />);

  const headerEl = screen.getByRole("heading", { name: title });

  expect(headerEl).toBeInTheDocument();
});