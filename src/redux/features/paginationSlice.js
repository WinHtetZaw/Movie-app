import { createSlice } from "@reduxjs/toolkit";
import { getSessionStorage, setSessionStorage } from "../../data/share";

const initialState = {
  movie: { popular: 1, nowPlaying: 1, upcoming: 1, topRated: 1 },
  tv: { popular: 1, airingToday: 1, onTheAir: 1, topRated: 1 },
};

if (getSessionStorage("active_paginate_number")) {
  initialState.movie = { ...getSessionStorage("active_paginate_number").movie };
  initialState.tv = { ...getSessionStorage("active_paginate_number").tv };
}

export const paginationSlice = createSlice({
  name: "paginationSlice",
  initialState,
  // payload = {type1 : movie, type2: popular, num: 3}
  reducers: {
    setActivePaginateNumber: (state, { payload }) => {
      let data;

      if (payload.type1 === "movie") {
        switch (payload.type2) {
          case "popular":
            state.movie = { ...state.movie, popular: payload.num };
            data = { movie: { ...state.movie }, tv: { ...state.tv } };
            setSessionStorage("active_paginate_number", data);
            break;

          case "now playing":
            state.movie = { ...state.movie, nowPlaying: payload.num };
            data = { movie: { ...state.movie }, tv: { ...state.tv } };
            setSessionStorage("active_paginate_number", data);
            break;

          case "upcoming":
            state.movie = { ...state.movie, upcoming: payload.num };
            data = { movie: { ...state.movie }, tv: { ...state.tv } };
            setSessionStorage("active_paginate_number", data);
            break;

          case "top rated":
            state.movie = { ...state.movie, topRated: payload.num };
            data = { movie: { ...state.movie }, tv: { ...state.tv } };
            setSessionStorage("active_paginate_number", data);
            break;
        }
      } else {
        switch (payload.type2) {
          case "popular":
            state.tv = { ...state.tv, popular: payload.num };
            data = { movie: { ...state.movie }, tv: { ...state.tv } };
            setSessionStorage("active_paginate_number", data);
            break;

          case "airing today":
            state.tv = { ...state.tv, airingToday: payload.num };
            data = { movie: { ...state.movie }, tv: { ...state.tv } };
            setSessionStorage("active_paginate_number", data);
            break;

          case "on the air":
            state.tv = { ...state.tv, onTheAir: payload.num };
            data = { movie: { ...state.movie }, tv: { ...state.tv } };
            setSessionStorage("active_paginate_number", data);
            break;

          case "top rated":
            state.tv = { ...state.tv, topRated: payload.num };
            data = { movie: { ...state.movie }, tv: { ...state.tv } };
            setSessionStorage("active_paginate_number", data);
            break;
        }
      }
    },
  },
});

export const {
  setMoviePopularPaginateActiveNum,
  setMovieNowPlayingPaginateActiveNum,
  setActivePaginateNumber,
} = paginationSlice.actions;
export default paginationSlice.reducer;
