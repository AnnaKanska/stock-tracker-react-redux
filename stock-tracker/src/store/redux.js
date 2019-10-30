import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./rootReducer";
import {
  setChartDataAction,
  setChartLoadingAction,
  setChartErrorAction
} from "../features/chart/redux/actions";
import {
  setCompanyOverviewAction,
  setLoadingOverviewAction,
  setErrorOverviewAction
} from "../features/overview/redux/actions";
import {
  setLatestNewsAction,
  setLoadingNewsAction,
  setErrorNewsAction
} from "../features/latestNews/redux/actions";
import {
  setResponseAction,
  setLoadingKeyStatsAction,
  setErrorKeyStatsAction
} from "../features/keyStats/redux/actions";
import {
  addTopPeersAction,
  setLoadingPeersAction,
  setErrorPeersAction
} from "../features/topPeers/redux/actions";
import {
  ADD_SYMBOL,
} from "../features/search/redux/actionTypes";
import chartSideEffect from "../features/chart/redux/sideEffect";
import searchSideEffect from "../features/search/redux/sideEffect"

import io from "socket.io-client";

const socket = io(`http://${window.location.hostname}:5000`);

const getSocketSubscription = (event, fn) => {
  socket.on(event, fn);
  const unsubscribeFn = () => socket.off(fn);
  return unsubscribeFn
}

export const getTopSubscription = (dispatch) => {
  const unsubscribeFns = [
    ['StockData', setResponseAction],
    ['CompanyOverview', setCompanyOverviewAction],
    ['LatestNews', setLatestNewsAction],
    ['ChartData', setChartDataAction],
    ['TopPeers', addTopPeersAction],
    ['StockError', setErrorKeyStatsAction],
    ['CompanyOverviewError', setErrorOverviewAction],
    ['LatestNewsError', setErrorNewsAction],
    ['ChartDataError', setChartErrorAction],
    ['TopPeersError', setErrorPeersAction]
  ].map(
    ([event, actionCreator]) =>
      getSocketSubscription(event, payload => dispatch(actionCreator(payload)))
  );

  return () => unsubscribeFns.forEach(fn => fn());

}


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
