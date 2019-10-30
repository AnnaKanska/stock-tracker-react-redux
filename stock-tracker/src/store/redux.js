import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./rootReducer";
import { setChartLoadingAction } from "../features/chart/redux/actions";
import { setLoadingOverviewAction } from "../features/overview/redux/actions";
import { setLoadingNewsAction } from "../features/latestNews/redux/actions";
import { setLoadingKeyStatsAction } from "../features/keyStats/redux/actions";
import { setLoadingPeersAction } from "../features/topPeers/redux/actions";
import { ADD_SYMBOL } from "../features/search/redux/actionTypes";
import chartSideEffect from "../features/chart/redux/sideEffect";
import searchSideEffect from "../features/search/redux/sideEffect"

import io from "socket.io-client";

export const socket = io(`http://${window.location.hostname}:5000`);



const stockMiddleware = store => next => {
  // startup things
  // getTopSubscription(store.dispatch)

  return action => {

    const result = next(action);

    chartSideEffect(action, store, socket);
    searchSideEffect(action, store, socket);

    if (action.type === ADD_SYMBOL) {
      socket.emit(
        "symbol",
        store.getState().search.symbol,
        store.getState().chart.chartTime
      );
      store.dispatch(setChartLoadingAction());
      store.dispatch(setLoadingKeyStatsAction());
      store.dispatch(setLoadingNewsAction());
      store.dispatch(setLoadingOverviewAction());
      store.dispatch(setLoadingPeersAction());
    } 
    return result;
  };;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(stockMiddleware))
);
