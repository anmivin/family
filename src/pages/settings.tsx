import { Box, Button, Typography } from '@mui/material';
import ChangeRoutes from '@entities/ChangeRoutes';
import ChangeTheme from '@entities/ChangeTheme';
import QrCode from '@features/QrCode/QrCode';
import { useAppDispatch } from '@shared/stores/global.store';
import { setIsQrCodeOpen } from '@shared/stores/modals/modals.store';
import AccordionState from '@shared/ui/AccordionState';
import { clearInfo } from '@shared/helpers/fetcher';
const Settings = () => {
  const dispatch = useAppDispatch();
  const onOpen = () => dispatch(setIsQrCodeOpen(true));
  return (
    <Box display="flex" flexDirection="column" gap={2} p={5}>
      <AccordionState collapsedNode="Тема">
        <ChangeTheme />
      </AccordionState>
      <AccordionState collapsedNode="Разделы">
        <ChangeRoutes />
      </AccordionState>
      <AccordionState collapsedNode="Семья">
        <></>
      </AccordionState>
      <AccordionState collapsedNode="Профиль">
        <></>
      </AccordionState>
      <AccordionState collapsedNode="Уведомления">
        <></>
      </AccordionState>
      <AccordionState collapsedNode="Другое">
        <> язык</>
      </AccordionState>
      <Button onClick={clearInfo}>Сбросить данные</Button>
      <Button onClick={onOpen}>Пригласить в приложение</Button>
      <QrCode />
    </Box>
  );
};

export default Settings;
