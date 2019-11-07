import { SET_NEWS, SET_LOADING_NEWS, SET_ERROR_NEWS } from "./actionTypes";
import { LatestNews } from "./actions";
import { LatestNewsActions } from "./actions";
import { Reducer } from "react";

interface NewsState {
  latestNews?: LatestNews;
  loading: boolean;
  error: boolean;
}

const initialState: NewsState = {
  latestNews: undefined,
  loading: false,
  error: false
};

export const newsReducer: Reducer<NewsState, LatestNewsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_LOADING_NEWS:
      return {
        ...initialState,
        loading: true
      };
    case SET_NEWS:
      return {
        ...state,
        latestNews: action.payload,
        loading: false,
        error: false
      };
    case SET_ERROR_NEWS:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};
