import { Typography, Box, styled, Checkbox } from '@mui/material';
import { TaskCardProps } from './TaskCard.types';
import { getDefaultDate } from '../../libs/dates';

const StyledCard = styled(Box)`
  background-color: ${({ theme }) => theme.color.pink300};
  padding: 16px;
`;

export const StyledDescription = styled(Typography)`
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TaskCard = ({ id, name, description, date, creator, repeat }: TaskCardProps) => {
  return (
    <StyledCard>
      <Typography variant="body2">{name}</Typography>
      <StyledDescription variant="body1">{description}</StyledDescription>
      <Typography variant="body1" sx={{ textAlign: 'end' }}>
        {!!repeat && <>{repeat}</>}
        {getDefaultDate(date)}
      </Typography>
    </StyledCard>
  );
};

export default TaskCard;
