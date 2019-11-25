import { chartReducer, ChartState } from "./chartReducer";
import { SET_CHART_DATA, SET_CHART_TIME, SET_ERROR_CHART } from "./actionTypes";
import { ADD_SYMBOL } from "features/search/redux/actionTypes";
import { ChartActions } from "./actions";
import { SetSymbol } from "features/search/redux/actions";

describe("testing chart reducer", () => {
  let initialState: ChartState = {
    chartData: [],
    chartTime: "1Y",
    loading: false,
    error: false
  };
  let newState: ChartState;

  describe("returns expected payload when SET_CHART_DATA action is called", () => {
    const action: ChartActions = {
      type: SET_CHART_DATA,
      payload: [{ close: 1, date: "2019/11/22" }]
    };

    beforeAll(() => {
      newState = chartReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.chartData).toEqual([{ close: 1, date: "2019/11/22" }]);
    });
  });

  describe("returns expected payload when SET_CHART_TIME action is called", () => {
    const action: ChartActions = {
      type: SET_CHART_TIME,
      payload: "5Y"
    };

    beforeAll(() => {
      newState = chartReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.chartTime).toEqual("5Y");
    });
  });

  describe("returns loading as true after the ADD_SYMBOL action is called", () => {
    const action: SetSymbol = {
      type: ADD_SYMBOL,
      payload: "AAPL"
    };

    beforeAll(() => {
      newState = chartReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.loading).toEqual(true);
    });
  });

  describe("returns error as true after SET_ERROR_CHART action is called", () => {
    const action: ChartActions = {
      type: SET_ERROR_CHART
    };

    beforeAll(() => {
      newState = chartReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.error).toBeTruthy();
    });
  });
});
