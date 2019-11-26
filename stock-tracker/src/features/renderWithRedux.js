import React from "react";
import { createStore } from "redux";
import { rootReducer } from "../store/rootReducer";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

const initialState = {};

export function renderWithRedux(component, options = {}) {
  const {
    state = initialState,
    store = createStore(rootReducer, state)
  } = options;

  return {
    ...render(<Provider store={store}> {component} </Provider>),
    store
  };
}
