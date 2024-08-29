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
    }),
  }),
});

export const { useCreateRentalMutation } = rentalApi;
