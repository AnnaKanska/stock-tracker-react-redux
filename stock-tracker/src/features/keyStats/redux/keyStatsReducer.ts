import { SET_RESPONSE, SET_ERROR_KEYSTATS } from "./actionTypes";
import { Reducer } from "redux";
import { KeyStatsActions } from "./actions";
import { Response } from "./actions";
import { ADD_SYMBOL } from "features/search";

export interface KeyStatsState {
  response?: Response;
  loading: boolean;
  error: boolean;
}

const initialState: KeyStatsState = {
  response: undefined,
  loading: false,
  error: false
};

export const keyStatsReducer: Reducer<KeyStatsState, KeyStatsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_SYMBOL:
      return {
        ...initialState,
        loading: true
      };
    case SET_RESPONSE:
      return {
        ...state,
        response: action.payload,
        loading: false,
        error: false
      };
    case SET_ERROR_KEYSTATS:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};
