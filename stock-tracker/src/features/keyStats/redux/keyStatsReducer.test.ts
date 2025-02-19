import { keyStatsReducer, KeyStatsState } from "./keyStatsReducer";
import { SET_RESPONSE, SET_ERROR_KEYSTATS } from "./actionTypes";
import { ADD_SYMBOL } from "../../search/redux/actionTypes";
import { SetSymbol } from "../../search/redux/actions";
import { Response, KeyStatsActions } from "./actions";

describe("testing keyStats reducer", () => {
  let initialState: KeyStatsState = {
    response: undefined,
    loading: false,
    error: false
  };

  let newState: KeyStatsState;

  describe("returns loading as true after the ADD_SYMBOL action is called", () => {
    const action: SetSymbol = {
      type: ADD_SYMBOL,
      payload: "AAPL"
    };

    beforeAll(() => {
      newState = keyStatsReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.loading).toEqual(true);
    });
  });

  describe("returns expected payload when SET_RESPONSE action is called", () => {
    const payload = {} as Response;
    const action: KeyStatsActions = {
      type: SET_RESPONSE,
      payload
    };

    beforeAll(() => {
      newState = keyStatsReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.response).toEqual(payload);
    });
  });

  describe("returns error as true after SET_ERROR_KEYSTATS action is called", () => {
    const action: KeyStatsActions = {
      type: SET_ERROR_KEYSTATS
    };

    beforeAll(() => {
      newState = keyStatsReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.error).toBeTruthy();
    });
  });
});
