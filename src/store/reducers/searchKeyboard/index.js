import { createSlice } from "@reduxjs/toolkit";
const initialState = { searchQuery: "", currentPage: "", data: {} };

const searchKeyboardSlice = createSlice({
  name: "searchKeyboard",
  initialState,
  reducers: {
    updateQuery(state) {
      state.searchQuery = state;
    },
    updatePageName(state, action) {
      state.currentPage = action.payload.currentPage;
    },
    updateData(state, action) {
      state.data = action.payload.data;
    },
  },
});

export const searchKeyboardActions = searchKeyboardSlice.actions;
export default searchKeyboardSlice;
