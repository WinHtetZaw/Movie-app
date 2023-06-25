import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSidebar: false,
};

export const sidebarSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    isOpenSidebar: (state, { payload }) => {
      state.openSidebar = payload;
    },
  },
});

export const { isOpenSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
