import { TQueryParam, TResponseRedux } from "../../types";
import { baseApi } from "../api/baseApi";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (job) => {
        return {
          url: "/jobs",
          method: "POST",
          body: job,
        };
      },
      invalidatesTags: ["job"],
    }),

    getAllJobs: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/jobs",
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
      providesTags: ["job"],
    }),

    getAJob: builder.query({
      query: (jobId) => {
        return {
          url: `/jobs/${jobId}`,
          method: "GET",
        };
      },
      providesTags: ["job"],
    }),

    updateAJob: builder.mutation({
      query: ({ jobId, jobData }) => {
        return {
          url: `/jobs/${jobId}`,
          method: "PUT",
          body: jobData,
        };
      },
      invalidatesTags: ["job"],
    }),

    deleteAJob: builder.mutation({
      query: (jobId) => {
        return {
          url: `/jobs/${jobId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["job"],
    }),
  }),
});

export const {
  useCreateJobMutation,
  useGetAllJobsQuery,
  useGetAJobQuery,
  useUpdateAJobMutation,
  useDeleteAJobMutation,
} = jobApi;
