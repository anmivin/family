export interface ModalsSliceProps {
  isTaskFormOpen: boolean;
  isQrCodeOpen: boolean;
  isSkillFormOpen: boolean;
  isMenuDrawerOpen: boolean;
}

export const initialState: ModalsSliceProps = {
  isTaskFormOpen: false,
  isQrCodeOpen: false,
  isSkillFormOpen: false,
  isMenuDrawerOpen: false,
};
