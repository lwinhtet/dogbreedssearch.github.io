import { renderHook, act } from "@testing-library/react";
import useBreedsData from "../hooks/useBreedsData";
import { useFetchBreedsQuery } from "../features/dogs/dogsApiSlice";

// Mock the useFetchBreedsQuery hook
jest.mock("../features/dogs/dogsApiSlice", () => ({
  useFetchBreedsQuery: jest.fn(),
}));

describe("useBreedsData", () => {
  it("should debounce user input and trigger API call", async () => {
    // Set the mock data for useFetchBreedsQuery
    const mockData = [
      { id: 1, name: "Bulldog" },
      { id: 2, name: "Labrador" },
      { id: 3, name: "Golden Retriever" },
    ];
    useFetchBreedsQuery.mockReturnValue({
      data: mockData,
      isFetching: false,
    });

    // Render the hook using renderHook
    const { result } = renderHook(() => useBreedsData());

    // Simulate user input
    act(() => {
      result.current.handleInputChange({
        target: { value: "gold" },
      });
    });

    // Wait for the .5s timer
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
    });

    expect(result.current.search).toBe("gold");
    expect(result.current.debouncedSearch).not.toBe("gold");

    // Simulate user input again
    act(() => {
      result.current.handleInputChange({
        target: { value: "golden retriever" },
      });
    });

    // Wait for the debounce timer to finish
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    expect(result.current.search).toBe("golden retriever");
    expect(result.current.debouncedSearch).toBe("golden retriever");
    expect(useFetchBreedsQuery).toHaveBeenCalledWith("golden retriever");
  });
});
