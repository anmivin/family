import { Button } from '@mui/material';
import ChangeRoutes from '@entities/ChangeRoutes';
import ChangeTheme from '@entities/ChangeTheme';
import QrCode from '@features/QrCode/QrCode';
import { useAppDispatch } from '../shared/stores/global.store';
import { setIsQrCodeOpen } from '../shared/stores/modals.store';
const Settings = () => {
  const dispatch = useAppDispatch();
  const onOpen = () => dispatch(setIsQrCodeOpen(true));
  return (
    <>
      <ChangeTheme />
      <ChangeRoutes />
      <Button onClick={onOpen}>сгенерить код для семьи</Button>
      <>премиумы</>
      <>разделы на главной</>
      <>настройки (пуши, язык, сбросить)</>
      <>тема</>
      <>другие разделы</>
      <QrCode />
    </>
  );
};

export default Settings;
