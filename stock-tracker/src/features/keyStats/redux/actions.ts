import {
  SET_RESPONSE,
  SET_LOADING_KEYSTATS,
  SET_ERROR_KEYSTATS
} from "./actionTypes";
import { Action, ActionPayload } from "../../../types";

export interface Response {
  avgTotalVolume: number;
  change: number;
  changePercent: number;
  companyName: string;
  currency: string;
  earningsPerShare: number;
  high: null | number;
  isUSMarketOpen: boolean;
  latestPrice: number;
  latestTime: string;
  latestUpdate: number;
  low: null | number;
  marketCap: number;
  open: null | number;
  peRatio: number;
  previousClose: number;
  previousVolume: number;
  symbol: string;
  week52High: number;
  week52Low: number;
  ytdChange: number;
}

export type SetResponse = ActionPayload<typeof SET_RESPONSE, Response>;

export const setResponseAction = (response: Response): SetResponse => ({
  type: SET_RESPONSE,
  payload: response
});

export type SetLoading = Action<typeof SET_LOADING_KEYSTATS>;

export const setLoadingKeyStatsAction = (): SetLoading => ({
  type: SET_LOADING_KEYSTATS
});

export type SetError = Action<typeof SET_ERROR_KEYSTATS>;

export const setErrorKeyStatsAction = (): SetError => ({
  type: SET_ERROR_KEYSTATS
});

export type KeyStatsActions = SetResponse | SetLoading | SetError;
