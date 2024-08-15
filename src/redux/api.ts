import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ProductsResponse, StatusResponse } from '../mocks/handlers';

const STATUS = 'Status';

export const consumerApi = createApi({
  reducerPath: 'consumerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173/v1' }),
  tagTypes: [STATUS],
  endpoints: (builder) => ({
    getStatus: builder.query<StatusResponse, void>({
      query: () => `status/`,
      providesTags: [STATUS],
    }),
    getProducts: builder.query<ProductsResponse, void>({
      query: () => `products/`,
    }),
  }),
});

export const { useGetProductsQuery, useGetStatusQuery } = consumerApi;
