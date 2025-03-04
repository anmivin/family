export interface UserSliceProps {
  userTasks: any;
  pendingUserTasks: boolean;
  errorUserTasks: string;
}

export const initialState: UserSliceProps = {
  userTasks: null,
  pendingUserTasks: false,
  errorUserTasks: '',
};
