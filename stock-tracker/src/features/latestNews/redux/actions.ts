import { SET_NEWS, SET_LOADING_NEWS, SET_ERROR_NEWS } from "./actionTypes";
import { Action, ActionPayload } from "../../../types";

export interface NewsInterface {
  url: string;
  headline: string;
  source: string;
  datetime: string;
}

export type SetLatestNews = ActionPayload<typeof SET_NEWS, NewsInterface[]>;
export type SetLatestNewsLoading = Action<typeof SET_LOADING_NEWS>;
export type SetLatestNewsError = Action<typeof SET_ERROR_NEWS>;

export const setLatestNewsAction = (
  latestNews: NewsInterface[]
): SetLatestNews => ({
  type: SET_NEWS,
  payload: latestNews
});

export const setLoadingNewsAction = (): SetLatestNewsLoading => ({
  type: SET_LOADING_NEWS
});

export const setErrorNewsAction = (): SetLatestNewsError => ({
  type: SET_ERROR_NEWS
});

export type LatestNewsActions =
  | SetLatestNews
  | SetLatestNewsLoading
  | SetLatestNewsError;
