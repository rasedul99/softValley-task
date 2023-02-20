import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({});

const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;
