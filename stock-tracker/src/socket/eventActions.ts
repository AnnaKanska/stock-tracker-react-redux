import { ActionCreator, AnyAction } from "redux";
import { EventTypes } from "./eventTypes";
import { setChartDataAction, setChartErrorAction } from "features/chart";
import {
  setCompanyOverviewAction,
  setErrorOverviewAction
} from "features/overview";
import { setLatestNewsAction, setErrorNewsAction } from "features/latestNews";
import { setResponseAction, setErrorKeyStatsAction } from "features/keyStats";
import { addTopPeersAction, setErrorPeersAction } from "features/topPeers";
import { setSuggestionsAction, setErrorSearchAction } from "features/search";

export interface EventActionInterface {
  event: EventTypes;
  action: ActionCreator<AnyAction>;
  errorAction: ActionCreator<AnyAction>;
}

export const eventActions: EventActionInterface[] = [
  {
    event: EventTypes.CHART_DATA,
    action: setChartDataAction,
    errorAction: setChartErrorAction
  },
  {
    event: EventTypes.STOCK_DATA,
    action: setResponseAction,
    errorAction: setErrorKeyStatsAction
  },
  {
    event: EventTypes.LATEST_NEWS,
    action: setLatestNewsAction,
    errorAction: setErrorNewsAction
  },
  {
    event: EventTypes.COMPANY_OVERVIEW,
    action: setCompanyOverviewAction,
    errorAction: setErrorOverviewAction
  },
  {
    event: EventTypes.SUGGESTIONS,
    action: setSuggestionsAction,
    errorAction: setErrorSearchAction
  },
  {
    event: EventTypes.TOP_PEERS,
    action: addTopPeersAction,
    errorAction: setErrorPeersAction
  }
];
