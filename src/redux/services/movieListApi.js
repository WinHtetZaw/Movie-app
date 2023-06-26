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
    getGenres: builder.query({
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
      query: (query, include_adult = false) =>
        `/search/movie?api_key=75646841a0d1a2eb783fc0ad070dcec4&query=${query}&include_adult=${include_adult}&&language=en-US&page=1`,
      providesTags: ["movie"],
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetGenresQuery,
  useGetMovieDetailQuery,
  useGetTrendingMoviesQuery,
  useSearchMovieQuery,
} = movieListApi;
// https://api.themoviedb.org/3/movie/popular?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1
// https://api.themoviedb.org/3/trending/movie/{time_window}
