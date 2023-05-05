import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CacheTags = {
  Link: "Link",
};

export const root = createApi({
  reducerPath: "rootReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
  }),
  tagTypes: [CacheTags.Link],
  endpoints: () => ({}),
});
