import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchParams: "",
  searchMovies: [],
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    addSearchMovies: (state, { payload }) => {
      state.searchMovies = [...payload];
    },
    addSearchParams: (state, { payload }) => {
      state.searchParams = payload;
    },
  },
});

export const { addSearchMovies, addSearchParams } = searchSlice.actions;
export default searchSlice.reducer;
