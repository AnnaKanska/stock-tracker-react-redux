import { SET_NEWS, SET_ERROR_NEWS } from "./actionTypes";
import { Action, ActionPayload } from "../../../types";
import { SetSymbol } from "features/search/redux/actions";

export interface NewsInterface {
  url: string;
  headline: string;
  source: string;
  datetime: string;
}

export type SetLatestNews = ActionPayload<typeof SET_NEWS, NewsInterface[]>;
export type SetLatestNewsError = Action<typeof SET_ERROR_NEWS>;

export const setLatestNewsAction = (
  latestNews: NewsInterface[]
): SetLatestNews => ({
  type: SET_NEWS,
  payload: latestNews
});

export const setErrorNewsAction = (): SetLatestNewsError => ({
  type: SET_ERROR_NEWS
});

export type LatestNewsActions = SetLatestNews | SetSymbol | SetLatestNewsError;
