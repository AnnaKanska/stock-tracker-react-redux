import { socketService } from ".";
import { EventActionInterface } from "./eventActions";
import { Dispatch } from "redux";
import { AppState } from "../store/rootReducer";

interface PayloadType {
  isError: boolean;
  data: AppState;
}

export const createSocketSubscriptions = (
  dispatch: Dispatch,
  eventActions: EventActionInterface[]
) => {
  socketService.create();
  const unsubscribeSockets = eventActions.map(
    ({ event, action, errorAction }) =>
      socketService.createSocketSubscription(event, (payload: PayloadType) => {
        if (payload.data) {
          dispatch(action(payload.data));
        } else {
          dispatch(errorAction(payload.isError));
        }
      })
  );
  return () => unsubscribeSockets.forEach(fn => fn());
};
