import { CacheTags, root } from "./root";

export interface CreateLinkPayloadContract {
  url: string;
}

export interface CredateLinkResponseContract {
  url: string;
  shortCode: string;
}

export const linkApi = root.injectEndpoints({
  endpoints: (build) => ({
    createLink: build.mutation<
      CredateLinkResponseContract,
      CreateLinkPayloadContract
    >({
      query: (payload) => ({
        url: `/links/new`,
        method: "POST",
        body: payload,
      }),
      // transformResponse: (response: { data: CredateLinkResponseContract }) =>
      //   response.data,
      // transformErrorResponse: (response: { status: string | number }) =>
      //   response.status,
      invalidatesTags: [CacheTags.Link],
    }),
  }),
});

export const { useCreateLinkMutation } = linkApi;
