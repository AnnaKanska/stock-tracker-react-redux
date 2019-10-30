import {
    setChartDataAction,
    setChartErrorAction
  } from "../features/chart/redux/actions";
  import {
    setCompanyOverviewAction,
    setErrorOverviewAction
  } from "../features/overview/redux/actions";
  import {
    setLatestNewsAction,
    setErrorNewsAction
  } from "../features/latestNews/redux/actions";
  import {
    setResponseAction,
    setErrorKeyStatsAction
  } from "../features/keyStats/redux/actions";
  import {
    addTopPeersAction,
    setErrorPeersAction
  } from "../features/topPeers/redux/actions";
  import { socket } from "./redux"


const getSocketSubscription = (event, fn) => {
    socket.on(event, fn);
    const unsubscribeFn = () => socket.off(fn);
    return unsubscribeFn
  }
  
const getTopSubscription = (dispatch) => {
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

  export default getTopSubscription