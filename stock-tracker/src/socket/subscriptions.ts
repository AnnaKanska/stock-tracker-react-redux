import { socketService } from ".";
import { eventActions } from "./eventActions";
import { Dispatch } from "redux";
import { AppState } from "../store/rootReducer";

interface PayloadType {
  isError: boolean;
  data: AppState;
}

export const createSocketSubscriptions = (dispatch: Dispatch) => {
  socketService.create();
  const unsubscribeSockets = eventActions.map(
    ([event, actionCreator, errorActionCreator]) =>
      socketService.createSocketSubscription(event, (payload: PayloadType) => {
        if (payload.data) {
          dispatch(actionCreator(payload.data));
        } else {
          dispatch(errorActionCreator(payload.isError));
        }
      })
  );
  return () => unsubscribeSockets.forEach(fn => fn());
};
