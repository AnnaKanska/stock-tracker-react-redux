import { overviewReducer, OverviewState } from "./overviewReducer";
import { ADD_COMPANY_OVERVIEW, SET_ERROR_OVERVIEW } from "./actionTypes";
import { SetSymbol } from "features/search/redux/actions";
import { ADD_SYMBOL } from "features/search";
import { CompanyOverviewActions } from "./actions";

describe("testing company overview reducer", () => {
  let initialState: OverviewState = {
    companyDetails: null,
    loading: false,
    error: false
  };

  let newState: OverviewState;

  describe("returns loading as true after the ADD_SYMBOL action is called", () => {
    const action: SetSymbol = {
      type: ADD_SYMBOL,
      payload: "AAPL"
    };

    beforeAll(() => {
      newState = overviewReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.loading).toEqual(true);
    });
  });

  describe("returns expected payload when ADD_COMPANY_OVERVIEW action is called", () => {
    const action: CompanyOverviewActions = {
      type: ADD_COMPANY_OVERVIEW,
      payload: {
        companyName: "Apple",
        symbol: "aapl",
        website: "www.apple.com",
        description: "test description",
        exchange: "12345",
        industry: "test"
      }
    };

    beforeAll(() => {
      newState = overviewReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.companyDetails).toEqual({
        companyName: "Apple",
        symbol: "aapl",
        website: "www.apple.com",
        description: "test description",
        exchange: "12345",
        industry: "test"
      });
    });
  });

  describe("returns error as true after SET_ERROR_NEWS action is called", () => {
    const action: CompanyOverviewActions = {
      type: SET_ERROR_OVERVIEW
    };

    beforeAll(() => {
      newState = overviewReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.error).toBeTruthy();
    });
  });
});
