import { Fab, styled } from '@mui/material';
import { PlusIcon } from '../Icons';

import { useAppDispatch } from '@stores/global.store';
import { setIsTaskFormOpen } from '@stores/modals/modals.store';
const StyledFab = styled(Fab)`
  position: fixed;
  bottom: 70px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.accentMain};
  &&:hover {
    background-color: ${({ theme }) => theme.color.accentMain};
  }
`;

const AddTaskButton = () => {
  const dispatch = useAppDispatch();
  const onOpen = () => dispatch(setIsTaskFormOpen(true));
  return (
    <StyledFab onClick={onOpen}>
      <PlusIcon size={30} color="textDark" />
    </StyledFab>
  );
};

export default AddTaskButton;
