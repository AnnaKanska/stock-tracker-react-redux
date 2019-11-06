import {
  SET_RESPONSE,
  SET_LOADING_KEYSTATS,
  SET_ERROR_KEYSTATS
} from "./actionTypes";

import { Action } from "../../../types";

export const setResponseAction = (response: any): Action => ({
  type: SET_RESPONSE,
  payload: response
});

export const setLoadingKeyStatsAction = (): Action => ({
  type: SET_LOADING_KEYSTATS
});

export const setErrorKeyStatsAction = (): Action => ({
  type: SET_ERROR_KEYSTATS
});
