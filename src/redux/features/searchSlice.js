import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchMovies: [],
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    addSearchMovies: (state, { payload }) => {
      state.searchMovies = [...payload];
    },
  },
});

export const { addSearchMovies } = searchSlice.actions;
export default searchSlice.reducer;
