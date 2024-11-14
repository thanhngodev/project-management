import { API_PATH, TAG_PROJECTS } from "@/constants/common.const";
import { IProject } from "@/interfaces/api.interface";
import { EndpointBuilder } from "@reduxjs/toolkit/query/react";

export const getProjects = (build: EndpointBuilder<any, any, any>) =>
  build.query<IProject[], void>({
    query: () => `${API_PATH}/projects`,
    providesTags: [TAG_PROJECTS],
  });
