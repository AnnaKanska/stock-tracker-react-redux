import * as EventType from "./eventTypes";
import { setChartDataAction, setChartErrorAction } from "../features/chart";
import {
  setCompanyOverviewAction,
  setErrorOverviewAction
} from "../features/overview";
import {
  setLatestNewsAction,
  setErrorNewsAction
} from "../features/latestNews";
import {
  setResponseAction,
  setErrorKeyStatsAction
} from "../features/keyStats";
import { addTopPeersAction, setErrorPeersAction } from "../features/topPeers";
import { setSuggestionsAction, setErrorSearchAction } from "../features/search";

export const eventActions = [
  [EventType.STOCK_DATA, setResponseAction, setErrorKeyStatsAction],
  [
    EventType.COMPANY_OVERVIEW,
    setCompanyOverviewAction,
    setErrorOverviewAction
  ],
  [EventType.LATEST_NEWS, setLatestNewsAction, setErrorNewsAction],
  [EventType.SUGGESTIONS, setSuggestionsAction, setErrorSearchAction],
  [EventType.CHART_DATA, setChartDataAction, setChartErrorAction],
  [EventType.TOP_PEERS, addTopPeersAction, setErrorPeersAction]
];
