import { Middleware, createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./rootReducer";
import { initialStartupMiddlware } from "./initialStartupMiddleware";
import { searchMiddleware } from "../features/search";
import { chartMiddleware } from "../features/chart";
import { socketService } from "../socket";

const middleware = [
  initialStartupMiddlware({ socketService }),
  searchMiddleware({ socketService }),
  chartMiddleware({ socketService })
];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(...middleware))
);
