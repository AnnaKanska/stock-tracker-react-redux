import { SET_CHART_DATA, SET_CHART_TIME, SET_ERROR_CHART } from "./actionTypes";
import { Action, ActionPayload } from "../../../types";
import { SetSymbol } from "../../search/redux/actions";

export interface ChartData {
  close: number;
  date: string;
}

export type SetChartData = ActionPayload<typeof SET_CHART_DATA, ChartData[]>;
export type SetChartTime = ActionPayload<typeof SET_CHART_TIME, string>;
export type SetChartError = Action<typeof SET_ERROR_CHART>;

export const setChartDataAction = (chartData: ChartData[]): SetChartData => ({
  type: SET_CHART_DATA,
  payload: chartData
});

export const setChartTimeAction = (chartTime: string): SetChartTime => ({
  type: SET_CHART_TIME,
  payload: chartTime
});

export const setChartErrorAction = (): SetChartError => ({
  type: SET_ERROR_CHART
});

export type ChartActions =
  | SetChartData
  | SetChartTime
  | SetSymbol
  | SetChartError;
