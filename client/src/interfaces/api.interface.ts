import { Priority, Status } from "@/enums/api.enum";

export interface IProject {
  id: number;
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}

export interface IUser {
  userId?: number;
  username: string;
  email: string;
  profilePictureUrl?: string;
  cognitoId?: string;
  teamId?: number;
}

export interface IAttachment {
  id: number;
  fileURL: string;
  fileName: string;
  taskId: number;
  uploadedById: number;
}

export interface ITask {
  id: number;
  title: string;
  description?: string;
  status?: Status;
  priority?: Priority;
  tags?: string;
  startDate?: string;
  dueDate?: string;
  points?: number;
  projectId: number;
  authorUserId?: number;
  assignedUserId?: number;
  author?: IUser;
  assignee?: IUser;
  comments?: Comment[];
  attachments?: IAttachment[];
}

export interface ISearchResults {
  tasks?: ITask[];
  projects?: IProject[];
  users?: IUser[];
}

export interface ITeam {
  teamId: number;
  teamName: string;
  productOwnerUserId?: number;
  projectManagerUserId?: number;
}
