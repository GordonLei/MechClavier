//import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from "../features/counter/counterSlice";

//  these were code for usign pure redux
/*
import rootReducer from "./reducer";
import { createStore } from "redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/

//  pure redux-toolkit
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counter/counterReducer";
import authenticationSlice from "./reducers/authentication";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: authenticationSlice.reducer,
  },
});

export default store;
