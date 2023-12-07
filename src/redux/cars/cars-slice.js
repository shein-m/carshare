import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65716c37d61ba6fcc01278bc.mockapi.io/api/",
  }),
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => ({ url: "cars" }),
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
