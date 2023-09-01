import "@testing-library/jest-dom";
// import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./app/store";

export function renderWithRedux(component) {
  return render(<Provider store={store}>{component}</Provider>);
}
