import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://help-center-liart.vercel.app/api/",
  }),
  tagTypes: ["card"],
  endpoints: () => ({}),
});
