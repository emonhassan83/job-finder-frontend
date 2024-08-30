import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://job-finder-backend-coral.vercel.app/api/",
    credentials: "include"
  }),
  tagTypes: ["Users", "job", "Application", "card"],
  endpoints: () => ({}),
});
