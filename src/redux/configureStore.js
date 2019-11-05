import { createStore, compose } from "redux";
import rootReducer from "./reducers";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//This line allow redux devtools to work

  return createStore(rootReducer, initialState, composeEnhancers());
}
