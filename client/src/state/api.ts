import { REDUCER_PATH, TAG_TYPES } from "@/constants/common.const";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: REDUCER_PATH,
  tagTypes: TAG_TYPES,
  endpoints: (build) => ({

  }),
});
