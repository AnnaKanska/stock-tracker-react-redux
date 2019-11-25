import { peersReducer, TopPeersState } from "./peersReducer";
import { ADD_TOP_PEERS, SET_ERROR_PEERS } from "./actionTypes";
import { SetSymbol } from "features/search/redux/actions";
import { ADD_SYMBOL } from "features/search";
import { TopPeersActions } from "./actions";

describe("testing top peers reducer", () => {
  let initialState: TopPeersState = {
    topPeers: [],
    loading: false,
    error: false
  };

  let newState: TopPeersState;

  describe("returns loading as true after the ADD_SYMBOL action is called", () => {
    const action: SetSymbol = {
      type: ADD_SYMBOL,
      payload: "AAPL"
    };

    beforeAll(() => {
      newState = peersReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.loading).toEqual(true);
    });
  });

  describe("returns expected payload when ADD_TOP_PEERS action is called", () => {
    const action: TopPeersActions = {
      type: ADD_TOP_PEERS,
      payload: ["test payload"]
    };

    beforeAll(() => {
      newState = peersReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.topPeers).toEqual(["test payload"]);
    });
  });

  describe("returns error as true after SET_ERROR_PEERS action is called", () => {
    const action: TopPeersActions = {
      type: SET_ERROR_PEERS
    };

    beforeAll(() => {
      newState = peersReducer(initialState, action);
    });

    it("should update the state", () => {
      expect(newState.error).toBeTruthy();
    });
  });
});
