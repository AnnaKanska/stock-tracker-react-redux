import { SET_NEWS, SET_ERROR_NEWS } from "./actionTypes";
import { NewsInterface, LatestNewsActions } from "./actions";
import { Reducer } from "redux";
import { ADD_SYMBOL } from "features/search";

export interface NewsState {
  latestNews: NewsInterface[];
  loading: boolean;
  error: boolean;
}

const initialState: NewsState = {
  latestNews: [],
  loading: false,
  error: false
};

export const newsReducer: Reducer<NewsState, LatestNewsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_SYMBOL:
      return {
        ...state,
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
