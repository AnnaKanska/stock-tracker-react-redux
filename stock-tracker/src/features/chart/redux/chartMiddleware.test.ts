import { chartMiddleware } from "./chartMiddleware";
import { createStore, compose, applyMiddleware, Store } from "redux";
import { setChartTimeAction } from "./actions";
import { EventTypes } from "socket";

const __emit = jest.fn();
const socketServiceMock = {
  create: () => ({
    emit: __emit
  })
};

const mockReduxState = {
  search: {
    symbol: "TEST_SYMBOL_STRING"
  }
};

describe("chartMiddleware", () => {
  let store: Store;

  beforeEach(() => {
    __emit.mockClear();
    store = createStore(
      () => mockReduxState,
      undefined,
      compose(
        applyMiddleware(
          chartMiddleware({
            socketService: socketServiceMock as any
          })
        )
      )
    );
  });

  test("emits CHART_TIME event when the SET_CHART_TIME action is dispatched", () => {
    expect(__emit).not.toHaveBeenCalled();
    const expectedChartTime = "5d";

    store.dispatch(setChartTimeAction(expectedChartTime));

    expect(__emit.mock.calls[0]).toEqual([
      EventTypes.CHART_TIME,
      mockReduxState.search.symbol,
      expectedChartTime
    ]);
  });

  test("doesn't emit on random actions", () => {
    expect(__emit).not.toHaveBeenCalled();
    store.dispatch({ type: "NOT_A_REAL_ACTION" });
    expect(__emit).not.toHaveBeenCalled();
  });
});
