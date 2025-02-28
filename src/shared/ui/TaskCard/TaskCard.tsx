import { Typography, Box, Button, styled, Checkbox } from '@mui/material';
import { TaskCardProps } from './TaskCard.types';
import { getDefaultDate, getDateTime } from '../../helpers/dates';
import { RepeatIcon, ClockIcon } from '../Icons';
const StyledCard = styled(Box)`
  background-color: ${({ theme }) => theme.color.secondaryLight};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  border-radius: 8px;
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
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="body2">{name}</Typography>
        {creator && <Typography variant="caption">от {creator}</Typography>}
      </Box>

      <StyledDescription variant="body1">{description}</StyledDescription>
      <Box display="flex" flexDirection="column" alignItems="end">
        {!!repeat && (
          <Box display="flex" alignItems="center" gap={1}>
            <RepeatIcon size={20} color="textMain" />
            <Typography>{repeat.currency}</Typography>
          </Box>
        )}
        {!!date && (
          <Box display="flex" alignItems="center" gap={1}>
            <ClockIcon size={20} color="textMain" />
            <Typography>{/* timed ? getDateTime(date) :  */ getDefaultDate(date)}</Typography>
          </Box>
        )}
      </Box>
      <Box>
        <Button>готово</Button>
        <Button>отложить</Button>
      </Box>
    </StyledCard>
  );
};

export default TaskCard;
