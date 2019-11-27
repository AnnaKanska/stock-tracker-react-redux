import React from "react";
import { createStore, Store } from "redux";
import { rootReducer, AppState } from "../store/rootReducer";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

const initialState = {};

interface Options {
  state?: AppState;
  store?: Store;
}

export function renderWithRedux(
  component: React.ReactElement,
  options: Options = {}
) {
  const {
    state = initialState,
    store = createStore(rootReducer, state)
  } = options;

  return {
    ...render(<Provider store={store}> {component} </Provider>),
    store
  };
}
