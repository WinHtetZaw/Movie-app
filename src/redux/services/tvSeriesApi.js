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
    getAiringTodayTvSeries: builder.query({
      query: (page) =>
        `/tv/airing_today?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=${page}`,
      providesTags: ["tvseries"],
    }),
    getOnTheAirTvSeries: builder.query({
      query: (page) =>
        `/tv/on_the_air?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=${page}`,
      providesTags: ["tvseries"],
    }),
    getTopRatedTvSeries: builder.query({
      query: (page) =>
        `/tv/top_rated?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=${page}`,
      providesTags: ["tvseries"],
    }),
    getTvGenres: builder.query({
      query: () =>
        `/genre/tv/list?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1`,
      providesTags: ["tvseries"],
    }),
    getTrendingTvSeries: builder.query({
      query: (name) =>
        `/trending/tv/${name}?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1`,
      providesTags: ["tvseries"],
    }),
    getTvDetail: builder.query({
      query: (id) =>
        `/tv/${id}?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1`,
      providesTags: ["tvseries"],
    }),
    searchTv: builder.query({
      query: ({ query, page }) =>
        `search/tv?api_key=75646841a0d1a2eb783fc0ad070dcec4&query=${query}&include_adult=false&&language=en-US&page=${page}`,
      providesTags: ["tvseries"],
    }),
  }),
});

export const {
  useGetPopularTvSeriesQuery,
  useGetAiringTodayTvSeriesQuery,
  useGetOnTheAirTvSeriesQuery,
  useGetTopRatedTvSeriesQuery,
  useGetTvGenresQuery,
  useGetTrendingTvSeriesQuery,
  useGetTvDetailQuery,
  useSearchTvQuery,
} = tvSeriesApi;
// https://api.themoviedb.org/3/movie/popular?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1
// https://api.themoviedb.org/3/trending/tv/{time_window}
// https://api.themoviedb.org/3/genre/tv/list?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1
