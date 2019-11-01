import { SET_CHART_TIME } from "./actionTypes";
import { CHART_TIME } from "../../../socket/eventTypes";

export const chartMiddleware = ({
  socketService
}) => store => next => action => {
  if (action.type === SET_CHART_TIME) {
    socketService
      .create()
      .emit(CHART_TIME, store.getState().search.symbol, action.payload);
  }
  return next(action);
};
