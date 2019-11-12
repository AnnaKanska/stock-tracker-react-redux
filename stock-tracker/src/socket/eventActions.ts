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

import { SetChartData, SetChartError } from "../features/chart/redux/actions";
import {
  SetKeyStatsResponse,
  SetKeyStatsError
} from "../features/keyStats/redux/actions";
import {
  SetLatestNews,
  SetLatestNewsError
} from "../features/latestNews/redux/actions";

export const eventActions = [
  {
    event: EventType.STOCK_DATA,
    action: setResponseAction,
    errorAction: setErrorKeyStatsAction
  },
  {
    event: EventType.COMPANY_OVERVIEW,
    action: setCompanyOverviewAction,
    errorAction: setErrorOverviewAction
  },
  {
    event: EventType.LATEST_NEWS,
    action: setLatestNewsAction,
    errorAction: setErrorNewsAction
  },
  {
    event: EventType.SUGGESTIONS,
    action: setSuggestionsAction,
    errorAction: setErrorSearchAction
  },
  {
    event: EventType.CHART_DATA,
    action: setChartDataAction,
    errorAction: setChartErrorAction
  },
  {
    event: EventType.TOP_PEERS,
    action: addTopPeersAction,
    errorAction: setErrorPeersAction
  }
];
