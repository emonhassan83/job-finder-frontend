import { TQueryParam, TResponseRedux } from "../../types";
import { baseApi } from "../api/baseApi";

const applicationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createApplication: builder.mutation({
      query: (application) => {
        return {
          url: "/applications",
          method: "POST",
          body: application,
        };
      },
      invalidatesTags: ["Application"],
    }),

    getAllApplications: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/applications",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["Application"],
    }),

    getMyApplications: builder.query({
      query: () => ({
        url: "/applications/my-applications",
        method: "GET",
      }),
      providesTags: ["Application"],
    }),

    getAApplication: builder.query({
      query: (applicationId) => {
        return {
          url: `/applications/${applicationId}`,
          method: "GET",
        };
      },
      providesTags: ["Application"],
    }),

    updateAApplication: builder.mutation({
      query: ({ applicationId, applicationData }) => {
        return {
          url: `/applications/${applicationId}`,
          method: "PUT",
          body: applicationData,
        };
      },
      invalidatesTags: ["Application"],
    }),

    deleteAApplication: builder.mutation({
      query: (applicationId) => {
        return {
          url: `/applications/${applicationId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Application"],
    }),
  }),
});

export const {
  useCreateApplicationMutation,
  useGetAllApplicationsQuery,
  useGetMyApplicationsQuery,
  useGetAApplicationQuery,
  useUpdateAApplicationMutation,
  useDeleteAApplicationMutation,
} = applicationApi;
