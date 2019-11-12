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

export type SetKeyStatsResponse = ActionPayload<typeof SET_RESPONSE, Response>;
export type SetKeyStatsLoading = Action<typeof SET_LOADING_KEYSTATS>;
export type SetKeyStatsError = Action<typeof SET_ERROR_KEYSTATS>;

export const setResponseAction = (response: Response): SetKeyStatsResponse => ({
  type: SET_RESPONSE,
  payload: response
});

export const setLoadingKeyStatsAction = (): SetKeyStatsLoading => ({
  type: SET_LOADING_KEYSTATS
});

export const setErrorKeyStatsAction = (): SetKeyStatsError => ({
  type: SET_ERROR_KEYSTATS
});

export type KeyStatsActions =
  | SetKeyStatsResponse
  | SetKeyStatsLoading
  | SetKeyStatsError;
