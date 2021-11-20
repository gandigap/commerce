import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
export const gameAPI = createApi({
  reducerPath: 'gameAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.rawg.io/api' }),
  endpoints: (build) => ({
    fetchAllGames: build.query({
      query: () => ({
        url: '/games',
      }),
    }),
  }),
});
