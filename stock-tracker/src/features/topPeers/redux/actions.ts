import { ADD_TOP_PEERS, SET_ERROR_PEERS } from "./actionTypes";
import { Action, ActionPayload } from "../../../types";
import { SetSymbol } from "features/search/redux/actions";

export type TopPeersType = string[];

export type AddTopPeers = ActionPayload<typeof ADD_TOP_PEERS, TopPeersType>;
export type SetTopPeersError = Action<typeof SET_ERROR_PEERS>;

export const addTopPeersAction = (topPeers: TopPeersType): AddTopPeers => ({
  type: ADD_TOP_PEERS,
  payload: topPeers
});

export const setErrorPeersAction = (): SetTopPeersError => ({
  type: SET_ERROR_PEERS
});

export type TopPeersActions = AddTopPeers | SetSymbol | SetTopPeersError;
