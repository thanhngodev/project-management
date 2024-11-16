import { API_PATH, TAG_TEAMS } from "@/constants/common.const";
import { ITeam } from "@/interfaces/api.interface";
import { EndpointBuilder } from "@reduxjs/toolkit/query/react";

export const getTeams = (build: EndpointBuilder<any, any, any>) =>
  build.query<ITeam[], void>({
    query: () => `${API_PATH}/teams`,
    providesTags: [TAG_TEAMS],
  });
