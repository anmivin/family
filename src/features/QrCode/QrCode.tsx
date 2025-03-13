import DefaultDrawer from '@ui/Drawer';
import { useAppSelector, useAppDispatch } from '@stores/global.store';
import { setIsQrCodeOpen } from '@stores/modals/modals.store';
import QRCode from 'react-qr-code';
import { Button, useTheme } from '@mui/material';

const url = import.meta.env.VITE_APP_UTL;
const QrCode = () => {
  const dispatch = useAppDispatch();
  const onClose = () => dispatch(setIsQrCodeOpen(false));
  const { isQrCodeOpen } = useAppSelector((state) => state.modalsSlice);
  const { userInfo } = useAppSelector((state) => state.userSlice);
  const theme = useTheme();
  return (
    <DefaultDrawer footer={<Button onClick={onClose}>окэй</Button>} open={isQrCodeOpen} onClose={onClose}>
      <QRCode
        size={256}
        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        value={`${url}/login/${userInfo?.familyId}`}
        viewBox={`0 0 256 256`}
        fgColor={theme.color.textDark}
        bgColor={theme.color.primaryLight}
      />
    </DefaultDrawer>
  );
};

export default QrCode;
