import React from "react";
import { createStore } from "redux";
import "@testing-library/jest-dom/extend-expect";
import { rootReducer } from "../../../store/rootReducer";
import {
  setChartDataAction,
  setChartTimeAction,
  setChartErrorAction
} from "../redux/actions";
import { Chart } from "./chart";
import { renderWithRedux } from "../../renderWithRedux";
import { setSymbolAction } from "features/search/redux/actions";
import { act } from "react-dom/test-utils";
import { fireEvent, getByText } from "@testing-library/dom";

describe("Chart component testing", () => {
  // test("inserts expected close value based on according string value", () => {
  //   const store = createStore(rootReducer);
  //   const { getByText } = renderWithRedux(<Chart />, { store });
  //   act(() => {
  //     store.dispatch(
  //       setChartDataAction([
  //         {
  //           close: 185.97,
  //           date: "2018-11-28"
  //         }
  //       ])
  //     );
  //   });
  //   expect(getByText("2018-11-28").getAttribute("value")).toBe("185.97");
  // });

  test("displays the desired range on button click", () => {
    const store = createStore(rootReducer);
    const { getByText, getByTestId } = renderWithRedux(<Chart />, { store });
    fireEvent.click(getByText("1D"));
    expect(getByTestId("test").getAttribute("tickFormatter")).toBe("1D");
  });

  test("displays error component", () => {
    const store = createStore(rootReducer);
    const { getByText } = renderWithRedux(<Chart />, { store });
    store.dispatch(setChartErrorAction());
    expect(getByText(/Error/)).toBeInTheDocument();
  });

  test("displays loading component while the data hasn't loaded", () => {
    const store = createStore(rootReducer);
    const { getByRole } = renderWithRedux(<Chart />, { store });

    store.dispatch(setSymbolAction("AAPL"));
    expect(getByRole("loading-animation")).toBeInTheDocument();

    store.dispatch(
      setChartDataAction([
        {
          close: 185.97,
          date: "2018-11-28"
        }
      ])
    );
    expect(() => getByRole("loading-animation")).toThrow();
  });
});
