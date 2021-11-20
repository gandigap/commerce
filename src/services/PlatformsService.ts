import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPlatforms } from 'models/IPlatform';

export const platformAPI = createApi({
  reducerPath: 'platformAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.rawg.io/api' }),
  endpoints: (build) => ({
    fetchAllPlatforms: build.query<IPlatforms, number>({
      query: (page_size: number = 5) => ({
        url: '/platforms',
        params: {
          key: 'dc31c2a55aa444959f74eb7bc96b0617',
          page: 1,
          page_size: page_size,
        },
      }),
    }),
  }),
});
