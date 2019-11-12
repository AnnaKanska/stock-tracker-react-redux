import { INITIAL_STARTUP } from "./actionTypes";
import { createSocketSubscriptions } from "../socket/subscriptions";
import { Middleware } from "redux";
import { AppState } from "./rootReducer";
import { SocketServiceType } from "../socket/socketService";

type Dependencies = {
  socketService: SocketServiceType;
};

type MiddlewareType = (dependencies: Dependencies) => Middleware<{}, AppState>;

export const initialStartupMiddlware: MiddlewareType = ({
  socketService
}) => store => next => action => {
  if (action.type === INITIAL_STARTUP) {
    console.info("Application has started ");
    createSocketSubscriptions(store.dispatch);
  }
  return next(action);
};
