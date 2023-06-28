import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPageLoading: false,
  showNavbar: true,
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
  },
});

export const { toggleShowNavbar, setIsPageLoading } = generalSlice.actions;
export default generalSlice.reducer;
