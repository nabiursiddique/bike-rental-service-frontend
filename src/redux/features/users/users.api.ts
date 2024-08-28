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
      providesTags: ['user'],
    }),
    updateProfile: builder.mutation({
      query: (updatedUserInfo) => {
        return {
          method: 'PUT',
          url: '/users/me',
          body: updatedUserInfo,
        };
      },
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserProfileQuery,
  useUpdateProfileMutation,
} = userApi;
