import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSidebar: false,
};

export const storeSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    isOpenSidebar: (state, { payload }) => {
      state.openSidebar = payload;
    },
  },
});

export const { isOpenSidebar } = storeSlice.actions;
export default storeSlice.reducer;
