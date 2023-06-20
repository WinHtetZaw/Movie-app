import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sampleApi = createApi({
  reducerPath: "sampleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getExample: builder.query({
      query: () => ``,
    }),
  }),
});

export const { useGetExampleQuery } = sampleApi;

// if mutation 
//need tagType and 
//builder.mutation and 
//every endpoints need tagType which is given in the above tagType
// query has curly braces and query property is url and
// also need method and
// header for authentication
