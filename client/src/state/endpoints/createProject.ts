import { API_PATH, TAG_PROJECTS } from "@/constants/common.const";
import { IProject } from "@/interfaces/api.interface";
import { EndpointBuilder } from "@reduxjs/toolkit/query/react";

export const createProject = (build: EndpointBuilder<any, any, any>) =>
  build.mutation<IProject, Partial<IProject>>({
    query: (project) => ({
      url: `${API_PATH}/projects`,
      method: "POST",
      body: project,
    }),
    invalidatesTags: [TAG_PROJECTS],
  });
