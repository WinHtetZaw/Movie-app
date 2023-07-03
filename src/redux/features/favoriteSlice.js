import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFavorite : false,
  movieLists: [],
  tvLists: [],
};

export const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }) => {
      const lists = state.movieLists.filter((el) => el.id === payload.id);
      if (lists.length > 0) {
        return state;
      }
      state.movieLists = [...state.movieLists, payload];
      localStorage.setItem("theMovieDb-fav", JSON.stringify(state.movieLists));
    },
    removeFromFavorite: (state, { payload }) => {
      const lists = state.movieLists.filter((el) => el.id != payload.id);
      state.movieLists = [...lists];
      localStorage.setItem("theMovieDb-fav", JSON.stringify(state.movieLists));
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
