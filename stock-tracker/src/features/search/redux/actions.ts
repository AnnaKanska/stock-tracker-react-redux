import {
  ADD_SYMBOL,
  ADD_SEARCH_INPUT,
  ADD_SUGGESTIONS,
  SET_ERROR_SEARCH
} from "./actionTypes";
import { Action, ActionPayload } from "../../../types";

export type SuggestionType = {
  symbol: string;
  name: string;
  exchange: string;
};
export type SetSymbol = ActionPayload<typeof ADD_SYMBOL, string>;
export type SetSearch = ActionPayload<typeof ADD_SEARCH_INPUT, string>;
export type SetSuggestions = ActionPayload<
  typeof ADD_SUGGESTIONS,
  SuggestionType[]
>;
export type SetSearchError = Action<typeof SET_ERROR_SEARCH>;

export const setSymbolAction = (symbol: string): SetSymbol => ({
  type: ADD_SYMBOL,
  payload: symbol
});

export const setSearchInputAction = (searchInput: string): SetSearch => ({
  type: ADD_SEARCH_INPUT,
  payload: searchInput
});

export const setSuggestionsAction = (
  suggestions: SuggestionType[]
): SetSuggestions => ({
  type: ADD_SUGGESTIONS,
  payload: suggestions
});

export const setErrorSearchAction = (): SetSearchError => ({
  type: SET_ERROR_SEARCH
});

export type SearchActions =
  | SetSymbol
  | SetSearch
  | SetSuggestions
  | SetSearchError;
