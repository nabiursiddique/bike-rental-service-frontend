import { baseApi } from '@/redux/api/baseApi';

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: () => {
        return {
          method: 'GET',
          url: '/bikes',
        };
      },
    }),
    getSingleBike: builder.query({
      query: (id) => {
        return {
          method: 'GET',
          url: `/bikes/${id}`,
        };
      },
    }),
  }),
});

export const { useGetAllBikesQuery, useGetSingleBikeQuery } = bikeApi;
