import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {
  render,
  fireEvent,
  cleanup,
  getAllByTestId
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { rootReducer } from "../../../store/rootReducer";
// import { initialState } from "../redux/newsReducer";
import { LatestNews } from "./LatestNews";

afterEach(cleanup);

describe("LatestNews component testing", () => {
  const initialState = {
    latestNews: [],
    loading: false,
    error: false
  };
  function renderWithRedux(
    component,
    { state = initialState, store = createStore(rootReducer, state) } = {}
  ) {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
      store
    };
  }

  test("inserts expected href value", () => {
    const newState = {
      latestNews: [
        {
          headline: "test-headline",
          datetime: 123,
          source: "test",
          url: "test.com"
        }
      ],
      loading: false,
      error: false
    };

    const store = createStore(rootReducer, newState);

    const { getByTestId } = renderWithRedux(<LatestNews />, { store });
    expect(getByTestId("testHeadline").getAttribute("href")).toBe("test.com");
  });
});
