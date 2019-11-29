import React from "react";
import { createStore } from "redux";
import "@testing-library/jest-dom/extend-expect";
import { rootReducer } from "../../../store/rootReducer";
import { LatestNews } from "./LatestNews";
import { setLatestNewsAction, setErrorNewsAction } from "../redux/actions";
import { renderWithRedux } from "../../renderWithRedux";
import { setSymbolAction } from "features/search/redux/actions";
import { act } from "react-dom/test-utils";

describe("LatestNews component testing", () => {
  test("inserts expected href value", () => {
    const store = createStore(rootReducer);
    const { getByText } = renderWithRedux(<LatestNews />, {
      store
    });

    act(() => {
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
    });

    expect(getByText("test-headline").getAttribute("href")).toBe("test.com");
  });
  test("displays error component", () => {
    const store = createStore(rootReducer);
    store.dispatch(setErrorNewsAction());
    const { getByText } = renderWithRedux(<LatestNews />, {
      store
    });
    expect(getByText(/Error/)).toBeInTheDocument();
  });

  test("displays loading component while the data hasn't loaded", () => {
    const store = createStore(rootReducer);

    const { getByRole } = renderWithRedux(<LatestNews />, {
      store
    });
    store.dispatch(setSymbolAction("AAPL"));
    expect(getByRole("loading-animation")).toBeInTheDocument();

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

    expect(() => getByRole("loading-animation")).toThrow();
  });
});
