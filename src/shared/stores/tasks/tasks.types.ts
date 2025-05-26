import { TaskType, TaskStatus } from '@api/Api';
export interface TasksSliceProps {
  selectedTaskId: string | null;
  taskStatus?: TaskStatus;
  taskType?: TaskType;
}

export const initialState: TasksSliceProps = {
  selectedTaskId: null,
  taskStatus: undefined,
  taskType: undefined,
};
