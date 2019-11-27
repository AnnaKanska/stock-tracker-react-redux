import React from "react";
import { createStore } from "redux";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { rootReducer } from "../../../store/rootReducer";
import { LatestNews } from "./LatestNews";
import { setLatestNewsAction, setErrorNewsAction } from "../redux/actions";
import { renderWithRedux } from "../../renderWithRedux";
import { setSymbolAction } from "features/search/redux/actions";

afterEach(cleanup);

describe("LatestNews component testing", () => {
  test("inserts expected href value", () => {
    const store = createStore(rootReducer);
    store.dispatch(
      setLatestNewsAction([
        {
          headline: "test-headline",
          datetime: "123",
          source: "test",
          url: "test.com"
        }
      ])
    );

    const { getByText } = renderWithRedux(<LatestNews />, {
      store
    });
    expect(getByText("test-headline").getAttribute("href")).toBe("test.com");
  });
  describe("displays error component", () => {
    const store = createStore(rootReducer);
    store.dispatch(setErrorNewsAction());
    const { getByText } = renderWithRedux(<LatestNews />, {
      store
    });
    expect(getByText(/Error/)).toBeInTheDOM();
  });

  describe("displays loading component", () => {
    const store = createStore(rootReducer);
    store.dispatch(setSymbolAction("AAPL"));
    const { getByRole } = renderWithRedux(<LatestNews />, {
      store
    });
    expect(getByRole("loading-animation")).toBeInTheDOM();
  });
});
