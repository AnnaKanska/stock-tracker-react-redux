import { searchMiddleware } from "./searchMiddleware";
import { createStore, compose, applyMiddleware, Store } from "redux";
import {
  setSymbolAction,
  setSearchInputAction
} from "features/search/redux/actions";
import { EventTypes } from "socket";

const __emit = jest.fn();
const socketServiceMock = {
  create: () => ({
    emit: __emit
  })
};

const mockReduxState = {
  chart: {
    chartTime: "TEST_CHART_TIME_STRING"
  }
};

describe("searchMiddleware", () => {
  let store: Store;

  beforeEach(() => {
    __emit.mockClear();
    store = createStore(
      () => mockReduxState,
      undefined,
      compose(
        applyMiddleware(
          searchMiddleware({ socketService: socketServiceMock as any })
        )
      )
    );
  });

  test("it emits a SYMBOL_INPUT event when the ADD_SYMBOL actions gets distpatch", () => {
    expect(__emit).not.toHaveBeenCalled();
    const expectedSymbol = "foo";
    store.dispatch(setSymbolAction(expectedSymbol));
    expect(__emit.mock.calls[0]).toEqual([
      EventTypes.SYMBOL_INPUT,
      expectedSymbol,
      mockReduxState.chart.chartTime
    ]);
  });

  test("it emits a ADD_SEARCH_INPUT event when the ADD_SEARCH_INPUT actions gets distpatch", () => {
    expect(__emit).not.toHaveBeenCalled();
    const expectedInput = "bar";
    store.dispatch(setSearchInputAction(expectedInput));
    expect(__emit.mock.calls[0]).toEqual([
      EventTypes.SEARCH_INPUT,
      expectedInput
    ]);
  });

  test("it doesn't emit on random actions", () => {
    expect(__emit).not.toHaveBeenCalled();
    store.dispatch({ type: "RANDOM_ACTION" });
    expect(__emit).not.toHaveBeenCalled();
  });
});
