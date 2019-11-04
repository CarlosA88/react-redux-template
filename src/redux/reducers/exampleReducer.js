import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function exampleReducer(state = initialState.text, action) {
  
  switch (action.type) {
    case types.EXAMPLE_ACTION: {
      return [...state, { ...action.text }];
    }
    default:
      return state;
  }
}
