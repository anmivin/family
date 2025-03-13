export interface ModalsSliceProps {
  isTaskFormOpen: boolean;
  isQrCodeOpen: boolean;
}

export const initialState: ModalsSliceProps = {
  isTaskFormOpen: false,
  isQrCodeOpen: false,
};
