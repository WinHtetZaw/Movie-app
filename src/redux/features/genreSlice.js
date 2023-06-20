import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genreNum : 0
};

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    setNumber: (state, { payload }) => {
      state.genreNum = payload
    },
  },
});

export const { setNumber } = genreSlice.actions;
export default genreSlice.reducer;
