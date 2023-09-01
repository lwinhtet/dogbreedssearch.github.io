import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "../components/Nav";

describe("Nav Component", () => {
  const mockProps = {
    search: "Bulldog",
    handleInputChange: jest.fn(),
    order: "name",
    setOrder: jest.fn(),
    orderBy: "asc",
    setOrderBy: jest.fn(),
  };

  test("Search input has the search prop", async () => {
    render(<Nav {...mockProps} />);
    const searchInput = await screen.getByPlaceholderText("eg. Bulldog");
    await waitFor(() => expect(searchInput).toHaveValue("Bulldog"));
  });

  it("handles search input change", async () => {
    render(<Nav {...mockProps} />);
    const searchInput = screen.getByPlaceholderText("eg. Bulldog");
    userEvent.type(searchInput, "golden");

    // Wait for the DOM to settle
    await waitFor(() => {
      expect(mockProps.handleInputChange).toHaveBeenCalled();
    });
  });

  it("handles order select change", async () => {
    render(<Nav {...mockProps} />);
    const orderBySelect = screen.getByRole("combobox", { name: "Order" });

    userEvent.selectOptions(orderBySelect, "lifespan");

    await waitFor(() => {
      expect(mockProps.setOrder).toHaveBeenCalledWith("lifespan");
    });
  });

  it("handles orderBy change", async () => {
    render(<Nav {...mockProps} />);
    const orderBySelect = screen.getByRole("combobox", { name: "Order By" });

    userEvent.selectOptions(orderBySelect, "desc");

    await waitFor(() => {
      expect(mockProps.setOrderBy).toHaveBeenCalledWith("desc");
    });
  });
});
