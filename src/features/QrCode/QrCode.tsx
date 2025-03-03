import DefaultDrawer from '@ui/Drawer';
import { useAppSelector, useAppDispatch } from '../../shared/stores/global.store';
import { setIsQrCodeOpen } from '../../shared/stores/modals.store';
import QRCode from 'react-qr-code';
import { Button, useTheme } from '@mui/material';
const QrCode = () => {
  const dispatch = useAppDispatch();
  const onClose = () => dispatch(setIsQrCodeOpen(false));
  const { isQrCodeOpen } = useAppSelector((state) => state.modalsSlice);
  const theme = useTheme();
  return (
    <DefaultDrawer footer={<Button onClick={onClose}>оке</Button>} open={isQrCodeOpen} onClose={onClose}>
      <QRCode
        size={256}
        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        value={`http://google.com`}
        viewBox={`0 0 256 256`}
        fgColor={theme.color.textDark}
        bgColor={theme.color.primaryLight}
      />
    </DefaultDrawer>
  );
};

export default QrCode;
