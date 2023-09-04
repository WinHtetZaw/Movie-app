import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPageLoading: false,
  showNavbar: true,
  scrollable: true,
  isImgLoading: true,
  activeUrl: "",
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
    setIsImgLoading: (state, { payload }) => {
      state.isImgLoading = payload;
    },
    setActiveUrl: (state, { payload }) => {
      state.activeUrl = payload;
    },
  },
});

export const {
  toggleShowNavbar,
  setIsPageLoading,
  setScrollable,
  setIsImgLoading,
  setActiveUrl,
} = generalSlice.actions;
export default generalSlice.reducer;
