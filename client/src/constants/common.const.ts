import { GridColDef } from "@mui/x-data-grid";
import _ from "lodash";
import { Clock, Grid3x3, List, Table } from "lucide-react";

export const TAG_PROJECTS = "Projects";
export const TAG_TASKS = "Tasks";
export const TAG_USERS = "Users";
export const TAG_TEAMS = "Teams";

export const TAG_TYPES = [TAG_PROJECTS, TAG_TASKS, TAG_USERS, TAG_TEAMS];

export const TASK_STATUS = {
  TO_DO: "To Do",
  WORK_IN_PROGRESS: "Work In Progress",
  UNDER_REVIEW: "Under Review",
  COMPLETED: "Completed",
};

export const TASK_STATUS_LIST = [
  TASK_STATUS.TO_DO,
  TASK_STATUS.WORK_IN_PROGRESS,
  TASK_STATUS.UNDER_REVIEW,
  TASK_STATUS.COMPLETED,
];

export const API_PATH = "/api/v1";

export const REDUCER_PATH = "api";

export const SIDEBAR_CLASS_NAMES =
  "fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white transition-transform duration-700 ";

export const INPUT_STYLES =
  "w-full rounded border border-gray-300 p-2 shadow-sm dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-white dark:focus:outline-none";

export const GROUPED_PROJECT_TABS = {
  BOARD: {
    name: "Board",
    code: "BOARD",
    icon: Grid3x3,
  },
  LIST: {
    name: "List",
    code: "LIST",
    icon: List,
  },
  TIME_LINE: {
    name: "Timeline",
    code: "TIME_LINE",
    icon: Clock,
  },
  TABLE: {
    name: "Table",
    code: "TABLE",
    icon: Table,
  },
};

export const PROJECT_TABS = [
  GROUPED_PROJECT_TABS.BOARD,
  GROUPED_PROJECT_TABS.LIST,
  GROUPED_PROJECT_TABS.TIME_LINE,
  GROUPED_PROJECT_TABS.TABLE,
];
