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
      invalidatesTags: ['bike'],
    }),
    myRentals: builder.query({
      query: () => {
        return {
          method: 'GET',
          url: '/rentals',
        };
      },
    }),
  }),
});

export const { useCreateRentalMutation, useMyRentalsQuery } = rentalApi;
