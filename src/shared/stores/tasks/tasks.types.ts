import { components } from '@api/Api';

export interface TasksSliceProps {
  userTasks: (components['schemas']['OutputTaskDto'] & { id: string })[];
  pendingUserTasks: boolean;
  errorUserTasks: string;

  selectedTask: (components['schemas']['OutputTaskDto'] & { id: string }) | null;
  pendingSelectedTask: boolean;
  errorSelectedTask: string;

  taskTypes: {
    isActive?: boolean;
    isCompleted?: boolean;
    isApproving?: boolean;
    isDeclined?: boolean;
    isHabit?: boolean;
  } | null;
}

export const initialState: TasksSliceProps = {
  userTasks: [],
  pendingUserTasks: false,
  errorUserTasks: '',

  selectedTask: null,
  pendingSelectedTask: false,
  errorSelectedTask: '',

  taskTypes: null,
};
