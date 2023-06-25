import { configureStore } from "@reduxjs/toolkit";
import { movieListApi } from "./services/movieListApi";
import genreSlice from "./features/genreSlice";
import { tvSeriesApi } from "./services/tvSeriesApi";
import sideBar, { isOpenSidebar } from "./features/sidebarSlice";
import sidebarSlice from "./features/sidebarSlice";

export const store = configureStore({
  reducer: {
    genreSlice: genreSlice,
    sidebarSlice: sidebarSlice,
    [movieListApi.reducerPath]: movieListApi.reducer,
    [tvSeriesApi.reducerPath]: tvSeriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      movieListApi.middleware,
      tvSeriesApi.middleware
    ),
});
