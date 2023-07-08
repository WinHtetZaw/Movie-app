import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genreNum: 0,
  activeGenreIds: [],
};

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    setNumber: (state, { payload }) => {
      state.genreNum = payload;
    },
    addGenreId: (state, { payload }) => {
      if (payload == 0) {
        state.activeGenreIds = [];
        return;
      }
      const sameLists = state.activeGenreIds.filter((el) => el == payload);
      if (sameLists.length > 0) {
        const prevLists = state.activeGenreIds.filter((el) => el != payload);
        console.log(prevLists);
        state.activeGenreIds = [...prevLists];
      } else {
        state.activeGenreIds = [...state.activeGenreIds, payload];
      }
    },
    removeGenreId: (state, { payload }) => {
      const prev = state.activeGenreIds.filter((el) => el.id != payload.id);
      state.activeGenreIds = [...prev];
    },
  },
});

export const { setNumber, addGenreId, removeGenreId } = genreSlice.actions;
export default genreSlice.reducer;
