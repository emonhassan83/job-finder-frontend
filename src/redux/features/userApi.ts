import { TQueryParam, TResponseRedux, TUser } from "../../types";
import { baseApi } from "../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
       
        if (args) {
          args?.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/user/users",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["Users"],
    }),

    getMyProfile: builder.query({
        query: () => {
          return {
            url: "/user/profile",
            method: "GET",
          };
        },
        providesTags: ["Users"],
      }),

    changeUserRole: builder.mutation({
        query: (userInfo) => {
          return {
            url: "/user/change-role",
            method: "PATCH",
            body: userInfo,
          };
        },
        invalidatesTags: ["Users"],
      }),

    deleteUser: builder.mutation({
        query: (userInfo) => {   
          return {
            url: `/user/soft-delete`,
            method: "PATCH",
            body: userInfo,
          };
        },
        invalidatesTags: ["Users"],
      }),
  }),
});

export const { useGetUsersQuery, useGetMyProfileQuery, useChangeUserRoleMutation, useDeleteUserMutation } = userApi;
