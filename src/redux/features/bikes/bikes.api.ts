import { baseApi } from '@/redux/api/baseApi';

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBike: builder.mutation({
      query: (bikeInfo) => {
        return {
          method: 'POST',
          url: '/bikes',
          body: bikeInfo,
        };
      },
      invalidatesTags: ['bike'],
    }),
    getAllBikes: builder.query({
      query: () => {
        return {
          method: 'GET',
          url: '/bikes',
        };
      },
      providesTags: ['bike'],
    }),
    getSingleBike: builder.query({
      query: (id) => {
        return {
          method: 'GET',
          url: `/bikes/${id}`,
        };
      },
    }),
    deleteBike: builder.mutation({
      query: (id) => {
        return {
          method: 'DELETE',
          url: `/bikes/${id}`,
        };
      },
      invalidatesTags: ['bike'],
    }),
  }),
});

export const {
  useCreateBikeMutation,
  useGetAllBikesQuery,
  useGetSingleBikeQuery,
  useDeleteBikeMutation,
} = bikeApi;
