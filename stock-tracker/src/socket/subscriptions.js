import { socketService } from ".";
import { eventActions } from "./eventActions";
import { Dispatch } from "redux";
import { AppState } from "../store/rootReducer";

// type PayloadType = {
//   isError: boolean;
//   data: AppState;
// };
// type TestType = ActionPayload<"ADD_RESPONSE", Response>
// }

export const createSocketSubscriptions = dispatch => {
  socketService.create();
  const unsubscribeSockets = eventActions.map(
    ([event, actionCreator, errorActionCreator]) =>
      socketService.createSocketSubscription(event, payload => {
        if (payload.data) {
          dispatch(actionCreator(payload.data));
        } else {
          dispatch(errorActionCreator(payload.isError));
        }
      })
  );
  return () => unsubscribeSockets.forEach(fn => fn());
};
