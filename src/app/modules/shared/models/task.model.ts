export interface TaskData {
  data: TaskResponse[];
}

export interface TaskResponse {
  title: string;
  description: string;
  dueDate: string;
  _id: string;
}
