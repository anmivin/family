import { Dialog, DialogProps, Modal, ModalProps, styled, Box, Button } from '@mui/material';

interface AddItemModalProps<T extends Record<string, any>> extends Omit<DialogProps, 'children'> {
  values: T;
  onSave: (payload: T) => void;
}

const ModalBody = styled(Box)(({ theme }) => ({
  backgroundColor: theme.color.primaryDark,
  minWidth: '200px',
  minHeight: '200px',
}));
const AddItemModal = <T extends Record<string, any>>(props: AddItemModalProps<T>) => {
  return (
    <Dialog {...props}>
      <ModalBody>
        {props.title}
        <Button onClick={() => props.onSave?.()}>Ok</Button>
        <Button onClick={() => props.onClose?.()}>ne ok</Button>
      </ModalBody>
    </Dialog>
  );
};

export default AddItemModal;
