import {
  SET_RESPONSE,
  SET_LOADING_KEYSTATS,
  SET_ERROR_KEYSTATS
} from "./actionTypes";

import { Action } from "../../../types";

export interface KeyStatsState {
  response: any;
  loading: boolean;
  error: boolean;
}

const initialState: KeyStatsState = {
  response: false,
  loading: false,
  error: false
};

export const keyStatsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_LOADING_KEYSTATS:
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

keyStatsReducer(initialState, { type: "hey", payload: 234 });
