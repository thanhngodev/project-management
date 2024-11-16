import { API_PATH, TAG_TASKS } from "@/constants/common.const";
import { ITask } from "@/interfaces/api.interface";
import { EndpointBuilder } from "@reduxjs/toolkit/query/react";

export const getTasksByUser = (build: EndpointBuilder<any, any, any>) =>
  build.query<ITask[], number>({
    query: (userId) => `${API_PATH}/tasks/user/${userId}`,
    providesTags: (result, error, userId) =>
      result
        ? result.map(({ id }) => ({ type: TAG_TASKS, id }))
        : [{ type: TAG_TASKS, id: userId }],
  });
