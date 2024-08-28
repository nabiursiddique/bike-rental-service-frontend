import { baseApi } from '@/redux/api/baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => {
        return {
          method: 'GET',
          url: '/users/allUsers',
        };
      },
      providesTags: ['user'],
    }),
    getUserProfile: builder.query({
      query: () => {
        return {
          method: 'GET',
          url: '/users/me',
        };
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserProfileQuery } = userApi;
