import { configureStore } from "@reduxjs/toolkit";
import { movieListApi } from "./services/movieListApi";
import genreSlice from "./features/genreSlice";
import { tvSeriesApi } from "./services/tvSeriesApi";
import sideBar, { isOpenSidebar } from "./features/sidebarSlice";
import sidebarSlice from "./features/sidebarSlice";
import storeSlice from "./features/storeSlice";
import searchSlice from "./features/searchSlice";
import generalSlice from "./features/generalSlice";

export const store = configureStore({
  reducer: {
    genreSlice: genreSlice,
    sidebarSlice: sidebarSlice,
    storeSlice: storeSlice,
    searchSlice : searchSlice,
    generalSlice : generalSlice,
    [movieListApi.reducerPath]: movieListApi.reducer,
    [tvSeriesApi.reducerPath]: tvSeriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      movieListApi.middleware,
      tvSeriesApi.middleware
    ),
});
