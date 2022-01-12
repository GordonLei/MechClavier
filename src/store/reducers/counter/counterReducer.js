import { createSlice } from "@reduxjs/toolkit";
const initialState = { counterValue: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counterValue++;
    },
    decrement(state) {
      state.counterValue--;
    },
    increase(state, action) {
      state.counterValue += action.payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//  Below is old React-Redux reducer code
//  The new version (above) uses redux-toolkit
/*
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counterValue: state.counterValue + 1,
    };
  }

  if (action.type === "increase") {
    return {
      ...state,
      counterValue: state.counterValue + action.amount,
    };
  }

  if (action.type === "decrement") {
    return {
      ...state,
      counterValue: state.counterValue - 1,
    };
  }

  if (action.type === "toggle") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
};
export default counterReducer;
*/
export const counterActions = counterSlice.actions;
export default counterSlice;
