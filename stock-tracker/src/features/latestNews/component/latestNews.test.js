import React from "react";
import { createStore } from "redux";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { rootReducer } from "../../../store/rootReducer";
import { LatestNews } from "./LatestNews";
import { setLatestNewsAction } from "../redux/actions";
import { renderWithRedux } from "../../renderWithRedux";

afterEach(cleanup);

describe("LatestNews component testing", () => {
  test("inserts expected href value", () => {
    const store = createStore(rootReducer);
    store.dispatch(
      setLatestNewsAction([
        {
          headline: "test-headline",
          datetime: 123,
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
});
