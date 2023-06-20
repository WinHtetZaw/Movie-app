import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieListApi = createApi({
  reducerPath: "movieListApi",
  tagTypes : ['movie'],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => `/movie/popular?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1`,
      providesTags : ['movie']
    }),
    getGenres : builder.query({
      query : () => `/genre/movie/list?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1`,
      providesTags : ['movie']
    }),
    getDetail : builder.query({
      query : (id) => `/movie/${id}?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1`,
      providesTags : ['movie']
    })
  }),
});

export const {useGetPopularMoviesQuery,useGetGenresQuery,useGetDetailQuery} = movieListApi;
// https://api.themoviedb.org/3/movie/popular?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1