import { chartReducer } from "./chartReducer";
import { SET_CHART_DATA, SET_CHART_TIME, SET_ERROR_CHART } from "./actionTypes";
import { ADD_SYMBOL } from "../../search/redux/actionTypes";

describe("testing chart reducer", () => {
  let initialState = {
    chartData: [],
    chartTime: "1Y",
    loading: false,
    error: false
  };

  describe("returns expected payload when SET_CHART_DATA action is called", () => {
    const action = {
      type: SET_CHART_DATA,
      payload: [{ close: "1", date: "2019/11/22" }]
    };

    let newState;

    beforeAll(() => {
      newState = chartReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.chartData).toEqual([{ close: "1", date: "2019/11/22" }]);
    });
  });

  describe("returns expected payload when SET_CHART_TIME action is called", () => {
    const action = {
      type: SET_CHART_TIME,
      payload: "5Y"
    };

    let newState;

    beforeAll(() => {
      newState = chartReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.chartTime).toEqual("5Y");
    });
  });

  describe("returns loading as true after the ADD_SYMBOL action is called", () => {
    const action = {
      type: ADD_SYMBOL
    };
    let newState;

    beforeAll(() => {
      newState = chartReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.loading).toBeTruthy();
    });
  });

  describe("returns error as true after SET_ERROR_CHART action is calle", () => {
    const action = {
      type: SET_ERROR_CHART
    };
    let newState;

    beforeAll(() => {
      newState = chartReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.error).toBeTruthy();
    });
  });
});
