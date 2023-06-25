import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tvSeriesApi = createApi({
  reducerPath: "tvSeriesApi",
  tagTypes: ["tvseries"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getPopularTvSeries: builder.query({
      query: (page) =>
        `/tv/popular?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=${page}`,
      providesTags: ["tvseries"],
    }),
    getGenres: builder.query({
      query: () =>
        `/genre/tv/list?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1`,
      providesTags: ["tvseries"],
    }),
    getTrendingTvSeries: builder.query({
      query: (name) => `/trending/tv/${name}?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1`,
      providesTags: ["tvseries"],
    }),
  }),
});

export const {
  useGetPopularTvSeriesQuery,
  useGetGenresQuery,
  useGetTrendingTvSeriesQuery,
} = tvSeriesApi;
// https://api.themoviedb.org/3/movie/popular?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1
// https://api.themoviedb.org/3/trending/tv/{time_window}
