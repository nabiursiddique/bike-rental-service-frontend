import { baseApi } from '@/redux/api/baseApi';

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: () => {
        return {
          url: '/bikes',
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetAllBikesQuery } = bikeApi;
