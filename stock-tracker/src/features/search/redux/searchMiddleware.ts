import { setChartLoadingAction } from "../../chart";
import { setLoadingOverviewAction } from "../../overview";
import { setLoadingNewsAction } from "../../latestNews";
import { setLoadingKeyStatsAction } from "../../keyStats";
import { setLoadingPeersAction } from "../../topPeers";
import { ADD_SYMBOL, ADD_SEARCH_INPUT } from "./actionTypes";
import { EventTypes } from "../../../socket/eventTypes";
import { MiddlewareType } from "../../../store/initialStartupMiddleware";

export const searchMiddleware: MiddlewareType = ({
  socketService
}) => store => next => action => {
  if (action.type === ADD_SYMBOL) {
    const socket = socketService.create();
    socket.emit(
      EventTypes.SYMBOL_INPUT,
      action.payload,
      store.getState().chart.chartTime
    );
    store.dispatch(setChartLoadingAction());
    store.dispatch(setLoadingKeyStatsAction());
    store.dispatch(setLoadingNewsAction());
    store.dispatch(setLoadingOverviewAction());
    store.dispatch(setLoadingPeersAction());
  } else if (action.type === ADD_SEARCH_INPUT) {
    const socket = socketService.create();
    socket.emit(EventTypes.SEARCH_INPUT, action.payload);
  }
  return next(action);
};
