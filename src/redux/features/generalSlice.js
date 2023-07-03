import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPageLoading: false,
  showNavbar: true,
  scrollable: true,
};

export const generalSlice = createSlice({
  name: "generalSlice",
  initialState,
  reducers: {
    toggleShowNavbar: (state, { payload }) => {
      state.showNavbar = payload;
    },
    setIsPageLoading: (state, { payload }) => {
      state.isPageLoading = payload;
    },
    setScrollable: (state, { payload }) => {
      state.scrollable = payload;
    },
  },
});

export const { toggleShowNavbar, setIsPageLoading ,setScrollable} = generalSlice.actions;
export default generalSlice.reducer;
