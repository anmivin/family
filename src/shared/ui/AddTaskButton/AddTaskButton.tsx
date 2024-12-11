import { Fab, styled } from '@mui/material';

const StyledFab = styled(Fab)`
  position: fixed;
  bottom: 110px;
  right: 30px;
  width: 70px;
  height: 70px;
`;

const AddTaskButton = () => {
  return <StyledFab />;
};

export default AddTaskButton;
