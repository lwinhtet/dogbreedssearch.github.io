import { render, screen, act } from "@testing-library/react";
import ImageComponent from "../components/ImageComponent";

const src = "https://example.com/image.jpg";
const alt = "Image Alt Text";

describe("ImageComponent", () => {
  it("renders with the given src and alt attributes", () => {
    render(<ImageComponent src={src} alt={alt} />);

    const imageElement = screen.getByAltText(alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", src);
  });

  it("displays loading spinner while image is loading", async () => {
    render(<ImageComponent src={src} alt={alt} />);

    await act(async () => {
      const loadingSpinner = await screen.findByTestId("loading-spinner");
      expect(loadingSpinner).toBeInTheDocument();
    });
  });

  it("hides loading spinner once image is loaded", async () => {
    render(<ImageComponent src={src} alt={alt} />);

    const loadingSpinner = screen.getByTestId("loading-spinner");
    const imageElement = screen.getByAltText(alt);

    await act(async () => {
      imageElement.dispatchEvent(new Event("load"));
    });

    expect(loadingSpinner).not.toBeInTheDocument();
  });

  it("applies additional class to image element", () => {
    const imageClass = "custom-image-class";
    render(<ImageComponent src={src} alt={alt} imageClass={imageClass} />);

    const imageElement = screen.getByAltText(alt);
    expect(imageElement).toHaveClass(imageClass);
  });
});
