import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function exampleReducer(state = initialState.example, action) {
  debugger;
  switch (action.type) {
    case types.EXAMPLE_ACTION: {
      return {
        ...state,
        examplePropOne: "newPropOne"
      }
      //   return [...state, { ...action.example }];
    }
    default:
      return state;
  }
}
