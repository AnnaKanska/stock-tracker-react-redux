import { SET_CHART_TIME } from "./actionTypes";

function chartSideEffect(action, store, socket) {
    if(action.type === SET_CHART_TIME) {
    socket.emit(
        "chartTime",
        store.getState().search.symbol,
        store.getState().chart.chartTime
      );
}
}

export default chartSideEffect