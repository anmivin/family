import { Fab, styled } from '@mui/material';
import { PlusIcon } from '@ui/Icons';

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

const PlusButton = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <StyledFab onClick={onOpen}>
      <PlusIcon size={30} color="textDark" />
    </StyledFab>
  );
};

export default PlusButton;
