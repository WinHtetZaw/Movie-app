import { configureStore } from "@reduxjs/toolkit";
import { movieListApi } from "./services/movieListApi";
import genreSlice from "./features/genreSlice";
import { tvSeriesApi } from "./services/tvSeriesApi";
import sideBar, { isOpenSidebar } from "./features/sidebarSlice";
import sidebarSlice from "./features/sidebarSlice";
import searchSlice from "./features/searchSlice";
import generalSlice from "./features/generalSlice";
import favoriteSlice from "./features/favoriteSlice";
import paginationSlice from "./features/paginationSlice";

export const store = configureStore({
  reducer: {
    genreSlice: genreSlice,
    sidebarSlice: sidebarSlice,
    searchSlice : searchSlice,
    generalSlice : generalSlice,
    favoriteSlice : favoriteSlice,
    paginationSlice:paginationSlice,
    [movieListApi.reducerPath]: movieListApi.reducer,
    [tvSeriesApi.reducerPath]: tvSeriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      movieListApi.middleware,
      tvSeriesApi.middleware
    ),
});
