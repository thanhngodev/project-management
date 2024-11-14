import { API_PATH, TAG_TASKS } from "@/constants/common.const";
import { ITask } from "@/interfaces/api.interface";
import { EndpointBuilder } from "@reduxjs/toolkit/query/react";

export const getTasks = (build: EndpointBuilder<any, any, any>) =>
  build.query<ITask[], { projectId: number }>({
    query: ({ projectId }) => `${API_PATH}/tasks?projectId=${projectId}`,
    providesTags: (result) =>
      result
        ? result.map(({ id }) => ({ type: TAG_TASKS, id }))
        : [{ type: TAG_TASKS }],
  });
