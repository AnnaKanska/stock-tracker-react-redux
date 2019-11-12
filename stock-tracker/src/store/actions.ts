import { INITIAL_STARTUP } from "./actionTypes";
import { Action } from "../types";

export type InitialStartupType = Action<typeof INITIAL_STARTUP>;

export const initialStartupAction = (): InitialStartupType => ({
  type: INITIAL_STARTUP
});
