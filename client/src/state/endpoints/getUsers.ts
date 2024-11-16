import { API_PATH, TAG_USERS } from "@/constants/common.const";
import { IUser } from "@/interfaces/api.interface";
import { EndpointBuilder } from "@reduxjs/toolkit/query/react";

export const getUsers = (build: EndpointBuilder<any, any, any>) =>
  build.query<IUser[], void>({
    query: () => `${API_PATH}/users`,
    providesTags: [TAG_USERS],
  });
