import { combineReducers } from "redux";
import { chartReducer } from "../features/chart";
import { keyStatsReducer } from "../features/keyStats";
import { newsReducer } from "../features/latestNews";
import { overviewReducer } from "../features/overview";
import { searchReducer } from "../features/search";
import { peersReducer } from "../features/topPeers";

export const rootReducer = combineReducers({
  chart: chartReducer,
  keyStats: keyStatsReducer,
  news: newsReducer,
  companyOverview: overviewReducer,
  search: searchReducer,
  topPeers: peersReducer
});

export type AppState = ReturnType<typeof rootReducer>;
