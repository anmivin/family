export interface UserSliceProps {
  userInfo: any;
  pendingUserInfo: boolean;
  errorUserInfo: string;
}

export const initialState: UserSliceProps = {
  userInfo: null,
  pendingUserInfo: false,
  errorUserInfo: '',
};
