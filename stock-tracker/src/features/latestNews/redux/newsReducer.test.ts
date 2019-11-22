import { newsReducer, NewsState } from "./newsReducer";
import { SET_NEWS, SET_ERROR_NEWS } from "./actionTypes";
import { ADD_SYMBOL } from "features/search";
import { SetSymbol } from "features/search/redux/actions";
import { LatestNewsActions } from "./actions";

describe("testing news reducer", () => {
  let initialState: NewsState = {
    latestNews: [],
    loading: false,
    error: false
  };

  let newState: NewsState;

  describe("returns loading as true after the ADD_SYMBOL action is called", () => {
    const action: SetSymbol = {
      type: ADD_SYMBOL,
      payload: "AAPL"
    };

    beforeAll(() => {
      newState = newsReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.loading).toBeTruthy();
    });
  });

  describe("returns expected payload when SET_NEWS action is called", () => {
    const action: LatestNewsActions = {
      type: SET_NEWS,
      payload: [
        {
          url: "news.com",
          headline: "headline",
          source: "news",
          datetime: "22/11/2019"
        }
      ]
    };

    beforeAll(() => {
      newState = newsReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.latestNews).toEqual([
        {
          url: "news.com",
          headline: "headline",
          source: "news",
          datetime: "22/11/2019"
        }
      ]);
    });
  });

  describe("returns error as true after SET_ERROR_NEWS action is called", () => {
    const action: LatestNewsActions = {
      type: SET_ERROR_NEWS
    };

    beforeAll(() => {
      newState = newsReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.error).toBeTruthy();
    });
  });
});
