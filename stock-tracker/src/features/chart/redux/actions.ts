import {
  SET_CHART_DATA,
  SET_CHART_TIME,
  LOADING_CHART,
  SET_ERROR_CHART
} from "./actionTypes";
import { Action, ActionPayload } from "../../../types";

type SetData = ActionPayload<typeof SET_CHART_DATA, string>;
type SetTime = ActionPayload<typeof SET_CHART_TIME, string>;
type SetLoading = Action<typeof LOADING_CHART>;
type SetError = Action<typeof SET_ERROR_CHART>;

export const setChartDataAction = (chartData: string): SetData => ({
  type: SET_CHART_DATA,
  payload: chartData
});

export const setChartTimeAction = (chartTime: string): SetTime => ({
  type: SET_CHART_TIME,
  payload: chartTime
});

export const setChartLoadingAction = (): SetLoading => ({
  type: LOADING_CHART
});

export const setChartErrorAction = (): SetError => ({ type: SET_ERROR_CHART });

export type ChartActions = SetData | SetTime | SetLoading | SetError;
