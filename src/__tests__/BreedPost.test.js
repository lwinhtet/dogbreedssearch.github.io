import { render, screen } from "@testing-library/react";
import BreedPost from "../components/BreedPost";

const mockBreed = {
  id: 1,
  name: "Bulldog",
  image: { url: "https://example.com/bulldog.jpg" },
  bred_for: "Guarding",
  breed_group: "Working",
};

describe("BreedPost component", () => {
  it("renders breed name", () => {
    render(<BreedPost breed={mockBreed} />);
    const nameElement = screen.getByText(mockBreed.name);
    expect(nameElement).toBeInTheDocument();
  });

  it("renders breed image with alt text", () => {
    render(<BreedPost breed={mockBreed} />);
    const imageElement = screen.getByAltText(mockBreed.name);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockBreed.image.url);
  });

  it("renders the correct breed information", () => {
    render(<BreedPost breed={mockBreed} />);

    const bredForElement = screen.getByTestId("bred-for");

    expect(bredForElement).toHaveTextContent(
      `Breed For : ${mockBreed.bred_for}`
    );
  });

  it("renders the correct breed group information", () => {
    render(<BreedPost breed={mockBreed} />);

    const bredForElement = screen.getByTestId("breed-group");

    expect(bredForElement).toHaveTextContent(
      `Breed Group : ${mockBreed.breed_group}`
    );
  });

  it("renders 'N.A' when bred_for is not available", () => {
    const breedWithoutBredFor = { ...mockBreed, bred_for: undefined };
    render(<BreedPost breed={breedWithoutBredFor} />);
    const bredForElement = screen.getByTestId("bred-for");

    expect(bredForElement).toHaveTextContent(`Breed For : N.A`);
  });

  it("renders 'N.A' when breed_group is not available", () => {
    const breedWithoutBreedGroup = { ...mockBreed, breed_group: undefined };
    render(<BreedPost breed={breedWithoutBreedGroup} />);
    const bredGroupElement = screen.getByTestId("breed-group");

    expect(bredGroupElement).toHaveTextContent(`Breed Group : N.A`);
  });
});
