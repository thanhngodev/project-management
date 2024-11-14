import { API_PATH, TAG_TASKS } from "@/constants/common.const";
import { ITask } from "@/interfaces/api.interface";
import { EndpointBuilder } from "@reduxjs/toolkit/query/react";

export const updateTaskStatus = (build: EndpointBuilder<any, any, any>) =>
  build.mutation<ITask, { taskId: number; status: string }>({
    query: ({ taskId, status }) => ({
      url: `${API_PATH}/tasks/${taskId}/status`,
      method: "PATCH",
      body: { status },
    }),
    invalidatesTags: (result, error, { taskId }) => [
      { type: TAG_TASKS, id: taskId },
    ],
  });
