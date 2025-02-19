import { ADD_COMPANY_OVERVIEW, SET_ERROR_OVERVIEW } from "./actionTypes";
import { Reducer } from "redux";
import { OverviewInterface, CompanyOverviewActions } from "./actions";
import { ADD_SYMBOL } from "features/search";

export interface OverviewState {
  companyDetails: OverviewInterface | null;
  loading: boolean;
  error: boolean;
}

const initialState: OverviewState = {
  companyDetails: null,
  loading: false,
  error: false
};

export const overviewReducer: Reducer<OverviewState, CompanyOverviewActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_SYMBOL:
      return {
        ...initialState,
        loading: true
      };
    case ADD_COMPANY_OVERVIEW:
      return {
        ...state,
        companyDetails: action.payload,
        loading: false
      };
    case SET_ERROR_OVERVIEW:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};
