import { SET_CHART_TIME } from "./actionTypes";
import { EventTypes } from "../../../socket/eventTypes";
import { MiddlewareType } from "../../../store/initialStartupMiddleware";

export const chartMiddleware: MiddlewareType = ({
  socketService
}) => store => next => action => {
  if (action.type === SET_CHART_TIME) {
    socketService
      .create()
      .emit(
        EventTypes.CHART_TIME,
        store.getState().search.symbol,
        action.payload
      );
  }
  return next(action);
};
