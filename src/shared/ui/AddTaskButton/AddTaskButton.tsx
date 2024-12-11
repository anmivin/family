import { Fab, styled } from '@mui/material';
import { PlusIcon } from '../Icons';
const StyledFab = styled(Fab)`
  position: fixed;
  bottom: 70px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.accentMain};
`;

const AddTaskButton = () => {
  return (
    <StyledFab>
      <PlusIcon size={30} />
    </StyledFab>
  );
};

export default AddTaskButton;
