import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieListApi = createApi({
  reducerPath: "movieListApi",
  tagTypes: ["movie"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: (page) =>
        `/movie/popular?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=${page}`,
      providesTags: ["movie"],
    }),

    getNowPlayingMovies: builder.query({
      query: (page) =>
        `/movie/now_playing?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=${page}`,
      providesTags: ["movie"],
    }),

    getUpcomingMovies: builder.query({
      query: (page) =>
        `/movie/upcoming?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=${page}`,
      providesTags: ["movie"],
    }),

    getTopRatedMovies: builder.query({
      query: (page) =>
        `/movie/top_rated?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=${page}`,
      providesTags: ["movie"],
    }),

    getMovieGenres: builder.query({
      query: () =>
        `/genre/movie/list?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1`,
      providesTags: ["movie"],
    }),

    getMovieDetail: builder.query({
      query: (id) =>
        `/movie/${id}?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1`,
      providesTags: ["movie"],
    }),

    getTrendingMovies: builder.query({
      query: (name) =>
        `/trending/movie/${name}?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1`,
      providesTags: ["movie"],
    }),

    searchMovie: builder.query({
      query: ({ query, page }) =>
        `/search/movie?api_key=75646841a0d1a2eb783fc0ad070dcec4&query=${query}&include_adult=false&&language=en-US&page=${page}`,
      providesTags: ["movie"],
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetMovieGenresQuery,
  useGetMovieDetailQuery,
  useGetTrendingMoviesQuery,
  useSearchMovieQuery,
  useGetNowPlayingMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetTopRatedMoviesQuery,
} = movieListApi;
// https://api.themoviedb.org/3/movie/popular?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1
// https://api.themoviedb.org/3/trending/movie/{time_window}
