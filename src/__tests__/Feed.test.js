import { render, screen } from "@testing-library/react";
import Feed from "../components/Feed";

const mockData = [
  { id: 1, name: "Bulldog" },
  { id: 2, name: "Labrador" },
];

describe("Feed component", () => {
  it("renders the number of dog breeds fetched", () => {
    render(<Feed total={5} data={mockData} isFetching={false} />);
    const numBreedsText = screen.getByText(/Numbers of dog fetched:/i);
    expect(numBreedsText).toBeInTheDocument();
  });

  it("renders the list of breed posts", () => {
    render(<Feed total={5} data={mockData} isFetching={false} />);
    const breedPosts = screen.getAllByRole("article");
    expect(breedPosts).toHaveLength(mockData.length);
  });

  it("renders loading message when fetching data", () => {
    render(<Feed total={5} data={mockData} isFetching={true} />);
    const loadingMessage = screen.getByText(/Loading.../i);
    expect(loadingMessage).toBeInTheDocument();
  });

  it("renders 'Breed Not Found' message when data is empty", () => {
    render(<Feed total={0} data={[]} isFetching={false} />);
    const notFoundMessage = screen.getByText(/Oops! Breed Not Found!/i);
    expect(notFoundMessage).toBeInTheDocument();
  });

  it("renders 'No Dog Yet!' message when data is not available", () => {
    render(<Feed total={0} data={undefined} isFetching={false} />);
    const noDogMessage = screen.getByText(/No Dog Yet!/i);
    expect(noDogMessage).toBeInTheDocument();
  });
});
