import { Box, Button } from '@mui/material';
import { useToast } from '@ui/Toast/ToastProvider';
const Achievements = () => {
  const { successToast, errorToast, infoToast, warningToast } = useToast();
  return (
    <Box>
      <Button onClick={() => successToast({ title: 'jkskjfsksfs' })}>suc</Button>
      <Button onClick={() => errorToast({ title: 'jkskjfsksfs' })}>err</Button>
      <Button onClick={() => infoToast({ title: 'jkskjfsksfs' })}>info</Button>
      <Button onClick={() => warningToast({ title: 'jkskjfsksfs' })}>warn</Button>
      <Box display="flex" flexDirection="row">
        табы достпные\востребованные
      </Box>
    </Box>
  );
};

export default Achievements;
