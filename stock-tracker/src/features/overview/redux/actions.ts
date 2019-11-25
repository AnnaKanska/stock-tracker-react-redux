import { ADD_COMPANY_OVERVIEW, SET_ERROR_OVERVIEW } from "./actionTypes";
import { Action, ActionPayload } from "../../../types";
import { SetSymbol } from "features/search/redux/actions";

export interface OverviewInterface {
  companyName: string;
  symbol: string;
  website: string;
  description: string;
  exchange: string;
  industry: string;
}

export type SetCompanyOverview = ActionPayload<
  typeof ADD_COMPANY_OVERVIEW,
  OverviewInterface
>;
export type SetCompanyOverviewError = Action<typeof SET_ERROR_OVERVIEW>;

export const setCompanyOverviewAction = (
  companyOverview: OverviewInterface
): SetCompanyOverview => ({
  type: ADD_COMPANY_OVERVIEW,
  payload: companyOverview
});

export const setErrorOverviewAction = (): SetCompanyOverviewError => ({
  type: SET_ERROR_OVERVIEW
});

export type CompanyOverviewActions =
  | SetCompanyOverview
  | SetSymbol
  | SetCompanyOverviewError;
