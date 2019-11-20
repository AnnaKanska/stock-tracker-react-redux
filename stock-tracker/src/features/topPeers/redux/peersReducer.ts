import { ADD_TOP_PEERS, SET_ERROR_PEERS } from "./actionTypes";
import { TopPeersType, TopPeersActions } from "./actions";
import { Reducer } from "redux";
import { ADD_SYMBOL } from "features/search";

export interface TopPeersState {
  topPeers: TopPeersType;
  loading: boolean;
  error: boolean;
}

const initialState: TopPeersState = {
  topPeers: [],
  loading: false,
  error: false
};

export const peersReducer: Reducer<TopPeersState, TopPeersActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_SYMBOL:
      return {
        ...initialState,
        loading: true
      };
    case ADD_TOP_PEERS:
      return {
        ...state,
        topPeers: action.payload,
        loading: false,
        error: false
      };
    case SET_ERROR_PEERS:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};
