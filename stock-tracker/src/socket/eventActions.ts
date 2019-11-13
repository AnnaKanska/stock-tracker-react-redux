import { ActionCreator } from "redux";
import * as EventType from "./eventTypes";
import { setChartDataAction, setChartErrorAction } from "features/chart";
import {
  setCompanyOverviewAction,
  setErrorOverviewAction
} from "features/overview";
import { setLatestNewsAction, setErrorNewsAction } from "features/latestNews";
import { setResponseAction, setErrorKeyStatsAction } from "features/keyStats";
import { addTopPeersAction, setErrorPeersAction } from "features/topPeers";
import { setSuggestionsAction, setErrorSearchAction } from "features/search";

import { SetChartData, SetChartError } from "features/chart/redux/actions";
import {
  SetKeyStatsResponse,
  SetKeyStatsError
} from "features/keyStats/redux/actions";
import {
  SetLatestNews,
  SetLatestNewsError
} from "features/latestNews/redux/actions";
import {
  SetCompanyOverview,
  SetCompanyOverviewError
} from "features/overview/redux/actions";
import { SetSuggestions, SetSearchError } from "features/search/redux/actions";
import { AddTopPeers, SetTopPeersError } from "features/topPeers/redux/actions";

interface EventActionInterface {
  event:
    | typeof EventType.CHART_DATA
    | typeof EventType.STOCK_DATA
    | typeof EventType.LATEST_NEWS
    | typeof EventType.COMPANY_OVERVIEW
    | typeof EventType.SUGGESTIONS
    | typeof EventType.TOP_PEERS;
  action: ActionCreator<
    | SetChartData
    | SetKeyStatsResponse
    | SetLatestNews
    | SetCompanyOverview
    | SetSuggestions
    | AddTopPeers
  >;
  errorAction: ActionCreator<
    | SetChartError
    | SetKeyStatsError
    | SetLatestNewsError
    | SetCompanyOverviewError
    | SetSearchError
    | SetTopPeersError
  >;
}

export const eventActions: EventActionInterface[] = [
  {
    event: EventType.CHART_DATA,
    action: setChartDataAction,
    errorAction: setChartErrorAction
  },
  {
    event: EventType.STOCK_DATA,
    action: setResponseAction,
    errorAction: setErrorKeyStatsAction
  },
  {
    event: EventType.LATEST_NEWS,
    action: setLatestNewsAction,
    errorAction: setErrorNewsAction
  },
  {
    event: EventType.COMPANY_OVERVIEW,
    action: setCompanyOverviewAction,
    errorAction: setErrorOverviewAction
  },
  {
    event: EventType.SUGGESTIONS,
    action: setSuggestionsAction,
    errorAction: setErrorSearchAction
  },
  {
    event: EventType.TOP_PEERS,
    action: addTopPeersAction,
    errorAction: setErrorPeersAction
  }
];
