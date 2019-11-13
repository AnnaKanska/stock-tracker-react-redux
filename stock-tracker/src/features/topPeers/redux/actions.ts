import {
  ADD_TOP_PEERS,
  SET_LOADING_PEERS,
  SET_ERROR_PEERS
} from "./actionTypes";
import { Action, ActionPayload } from "../../../types";

export type TopPeersType = string[];

export type AddTopPeers = ActionPayload<typeof ADD_TOP_PEERS, TopPeersType>;
export type SetLoading = Action<typeof SET_LOADING_PEERS>;
export type SetTopPeersError = Action<typeof SET_ERROR_PEERS>;

export const addTopPeersAction = (topPeers: TopPeersType) => ({
  type: ADD_TOP_PEERS,
  payload: topPeers
});

export const setLoadingPeersAction = () => ({ type: SET_LOADING_PEERS });

export const setErrorPeersAction = () => ({ type: SET_ERROR_PEERS });

export type TopPeersActions = AddTopPeers | SetLoading | SetTopPeersError;
