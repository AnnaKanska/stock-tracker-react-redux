import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./rootReducer";
import { addCompaniesAction, initialStartupAction } from "./actions";
import { addChartDataAction } from "../features/chart/redux/actions";
import { getErrorsAction } from "../features/error/redux/actions";
import { addCompanyOverviewAction } from "../features/overview/redux/actions";
import { addLatestNewsAction } from "../features/latestNews/redux/actions";
import { addResponseAction } from "../features/keyStats/redux/actions";
import { addTopPeersAction } from "../features/topPeers/redux/actions";
import { addSuggestionsAction } from "../features/search/redux/actions";

const io = require("socket.io-client");
const socket = io(`http://${window.location.hostname}:5000`);

const getSocketSubscription = (event, fn) => {
  socket.on(event, fn);
  return () => socket.off(fn);
}

export const getTopSubscription = (dispatch) => {
  const unsubscribeFns = [
    ['StockData', addResponseAction],
    ['CompanyOverview', addCompanyOverviewAction],
    ['LatestNews', addLatestNewsAction],
    ['suggestions', addSuggestionsAction],
    ['ChartData', addChartDataAction],
    ['TopPeers', addTopPeersAction],
    ['StockError', (error) => getErrorsAction('stockData', error)],
    ['CompaniesError', (error) => getErrorsAction('companies', error)],
    ['CompanyOverviewError', (error) => getErrorsAction('companiesOverview', error)],
    ['LatestNewsError', (error) => getErrorsAction('latestNews', error)],
    ['ChartDataError', (error) => getErrorsAction('chartData', error)],
    ['TopPeersError', (error) => getErrorsAction('topPeers', error)],
  ].map(
    ([event, actionCreator]) =>
      getSocketSubscription(event, payload => dispatch(actionCreator(payload)))
  );

  return () => unsubscribeFns.forEach(fn => fn());
}

const stockMiddleware = store => next => action => {
  if (action.type === "ADD_SYMBOL") {
    socket.emit("symbol", store.getState().symbol, store.getState().chartTime);
  } else if (action.type === "ADD_CHARTTIME") {
    socket.emit(
      "chartTime",
      store.getState().symbol,
      store.getState().chartTime
    );
    store.dispatch(addChartDataAction(store.getState().chartData));
  } else if (action.type === "ADD_SEARCH_INPUT") {
    
    socket.emit("search", store.getState().searchInput);
    console.log(store.getState().searchInput);
    socket.on("suggestions", suggestions => {
      store.dispatch(addSuggestionsAction(suggestions));
    });
  }

  return next(action);
};

const initialStartupMiddlware = store => next => action => {
  if (action.type === "INITIAL_STARTUP") {
    console.log("Application has started ");
    // socket.on("companies", companies => {
    //   store.dispatch(addCompaniesAction(companies));
    // }); 
  }
  const result = next(action);
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(initialStartupMiddlware, stockMiddleware))
);

store.dispatch(initialStartupAction());
