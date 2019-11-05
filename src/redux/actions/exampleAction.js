import * as types from "./actionTypes";

export function exampleAction(text) {
  //Actions dispatch an actions so reducers that care can update state
  return { type: types.EXAMPLE_ACTION, text };
}
