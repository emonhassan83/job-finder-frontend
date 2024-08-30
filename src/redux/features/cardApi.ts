import { TCard, TQueryParam, TResponseRedux } from "../../types";
import { baseApi } from "../api/baseApi";

const cardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCard: builder.mutation({
      query: (card) => {
        return {
          url: "/cards",
          method: "POST",
          body: card,
        };
      },
      invalidatesTags: ["card"],
    }),

    getAllCards: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/cards",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TCard[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["card"],
    }),

    getACard: builder.query({
      query: (title) => {
        return {
          url: `/cards/${title}`,
          method: "GET",
        };
      },
      providesTags: ["card"],
    }),
  }),
});

export const {
  useCreateCardMutation,
  useGetAllCardsQuery,
  useGetACardQuery
} = cardApi;
