import { REDUCER_PATH, TAG_TYPES } from "@/constants/common.const";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getProjects } from "./endpoints/getProject";
import { createProject } from "./endpoints/createProject";
import { getTasks } from "./endpoints/getTasks";
import { getTasksByUser } from "./endpoints/getTasksByUser";
import { createTask } from "./endpoints/createTask";
import { updateTaskStatus } from "./endpoints/updateTaskStatus";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: REDUCER_PATH,
  tagTypes: TAG_TYPES,
  endpoints: (build) => ({
    getProjects: getProjects(build),
    createProject: createProject(build),
    getTasks: getTasks(build),
    getTasksByUser: getTasksByUser(build),
    createTask: createTask(build),
    updateTaskStatus: updateTaskStatus(build),
  }),
});

export const {
  useGetProjectsQuery,
  useCreateProjectMutation,
  useGetTasksQuery,
  useGetTasksByUserQuery,
  useCreateTaskMutation,
  useUpdateTaskStatusMutation,
} = api;
