import { API_PATH, TAG_TASKS } from "@/constants/common.const";
import { ITask } from "@/interfaces/api.interface";
import { EndpointBuilder } from "@reduxjs/toolkit/query/react";

export const createTask = (build: EndpointBuilder<any, any, any>) =>
  build.mutation<ITask, Partial<ITask>>({
    query: (task) => ({
      url: `${API_PATH}/tasks`,
      method: "POST",
      body: task,
    }),
    invalidatesTags: [TAG_TASKS],
  });
