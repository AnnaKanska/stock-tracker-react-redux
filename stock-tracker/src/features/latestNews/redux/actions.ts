import { SET_NEWS, SET_LOADING_NEWS, SET_ERROR_NEWS } from "./actionTypes";
import { Action, ActionPayload } from "../../../types";

export interface LatestNews {
  url: string;
  headline: string;
  source: string;
}

type SetLatestNews = ActionPayload<typeof SET_NEWS, LatestNews>;
type SetLoading = Action<typeof SET_LOADING_NEWS>;
type SetError = Action<typeof SET_ERROR_NEWS>;

export const setLatestNewsAction = (latestNews: LatestNews): SetLatestNews => ({
  type: SET_NEWS,
  payload: latestNews
});

export const setLoadingNewsAction = (): SetLoading => ({
  type: SET_LOADING_NEWS
});

export const setErrorNewsAction = (): SetError => ({ type: SET_ERROR_NEWS });

export type LatestNewsActions = SetLatestNews | SetLoading | SetError;
