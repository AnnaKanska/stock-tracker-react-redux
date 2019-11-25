import { searchReducer, SearchState } from "./searchReducer";
import {
  ADD_SYMBOL,
  ADD_SEARCH_INPUT,
  ADD_SUGGESTIONS,
  SET_ERROR_SEARCH
} from "./actionTypes";
import { SearchActions } from "./actions";

describe("testing search reducer", () => {
  let initialState: SearchState = {
    symbol: "",
    searchInput: "",
    suggestions: undefined,
    error: false
  };

  let newState: SearchState;

  describe("returns expected payload when ADD_SYMBOL is called", () => {
    const action: SearchActions = {
      type: ADD_SYMBOL,
      payload: "AAPL"
    };
    beforeAll(() => {
      newState = searchReducer(initialState, action);
    });

    it("should change the state", () => {
      expect(newState.symbol).toEqual("AAPL");
    });
  });

  describe("returns expected payload when ADD_SEARCH_INPUT is called", () => {
    const action: SearchActions = {
      type: ADD_SEARCH_INPUT,
      payload: "test input"
    };
    beforeAll(() => {
      newState = searchReducer(initialState, action);
    });

    it("should change the state", () => {
      expect(newState.searchInput).toEqual("test input");
    });
  });

  describe("returns expected payload when ADD_SUGGESTIONS is called", () => {
    const action: SearchActions = {
      type: ADD_SUGGESTIONS,
      payload: [
        {
          symbol: "aapl",
          name: "apple",
          exchange: "q"
        }
      ]
    };
    beforeAll(() => {
      newState = searchReducer(initialState, action);
    });

    it("should change the state", () => {
      expect(newState.suggestions).toEqual([
        {
          symbol: "aapl",
          name: "apple",
          exchange: "q"
        }
      ]);
    });
  });

  describe("returns error as true after SET_ERROR_SEARCH action is called", () => {
    const action: SearchActions = {
      type: SET_ERROR_SEARCH
    };

    beforeAll(() => {
      newState = searchReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.error).toBeTruthy();
      expect(newState.symbol).toEqual("");
    });
  });
});
