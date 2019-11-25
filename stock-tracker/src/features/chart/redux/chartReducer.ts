import { SET_CHART_DATA, SET_CHART_TIME, SET_ERROR_CHART } from "./actionTypes";
import { ADD_SYMBOL } from "../../search/redux/actionTypes";
import { Reducer } from "redux";
import { ChartActions, ChartData } from "./actions";

export interface ChartState {
  chartData: ChartData[];
  chartTime: string;
  loading: boolean;
  error: boolean;
}

const initialState: ChartState = {
  chartData: [],
  chartTime: "1Y",
  loading: false,
  error: false
};

export const chartReducer: Reducer<ChartState, ChartActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_SYMBOL:
      return {
        ...initialState,
        loading: true
      };
    case SET_CHART_DATA:
      return {
        ...state,
        chartData: action.payload,
        loading: false
      };
    case SET_CHART_TIME:
      return {
        ...initialState,
        chartTime: action.payload,
        loading: false
      };
    case SET_ERROR_CHART:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};
