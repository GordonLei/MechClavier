import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter/counterReducer";

const reducers = combineReducers({ counter: counterReducer });

export default reducers;
