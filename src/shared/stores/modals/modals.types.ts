export interface ModalsSliceProps {
  isTaskFormOpen: boolean;
  isQrCodeOpen: boolean;
  isSkillFormOpen: boolean;
}

export const initialState: ModalsSliceProps = {
  isTaskFormOpen: false,
  isQrCodeOpen: false,
  isSkillFormOpen: false,
};
