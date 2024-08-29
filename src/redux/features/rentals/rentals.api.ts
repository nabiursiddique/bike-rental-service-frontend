import { baseApi } from '@/redux/api/baseApi';

const rentalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRental: builder.mutation({
      query: (rentalInfo) => {
        return {
          method: 'POST',
          url: '/rentals',
          body: rentalInfo,
        };
      },
      invalidatesTags: ['bike', 'rental'],
    }),
    myRentals: builder.query({
      query: () => {
        return {
          method: 'GET',
          url: '/rentals',
        };
      },
      providesTags: ['rental'],
    }),
    getAllRentals: builder.query({
      query: () => {
        return {
          method: 'GET',
          url: '/rentals/allRentals',
        };
      },
      providesTags: ['rental'],
    }),
  }),
});

export const {
  useCreateRentalMutation,
  useMyRentalsQuery,
  useGetAllRentalsQuery,
} = rentalApi;
