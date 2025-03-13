import { Typography, Box, Button, styled, Checkbox } from '@mui/material';
import { taskType } from './TaskCard.types';
import { getDefaultDate, getDateTime } from '../../helpers/dates';
import { RepeatIcon, ClockIcon } from '../Icons';
/* import { pluralizeString } from '@helpers/utils';
import { PeriodLabels } from '@features/TaskForm/TaskForm.types'; */
import { useAppDispatch } from '@stores/global.store';
import { fetchTask } from '@stores/tasks/tasks.fetchers';
import { setIsTaskFormOpen } from '@stores/modals/modals.store';
import { components } from '@api/Api';
import { StyledCard, StyledDescription } from './TaskCard.styled';

const TaskCard = (data: components['schemas']['OutputTaskListDto']) => {
  const dispatch = useAppDispatch();
  const onOpen = () => {
    dispatch(fetchTask(data.id));
    dispatch(setIsTaskFormOpen(true));
  };

  return (
    <StyledCard
      onClick={onOpen}
      isCompleted={data.isCompleted}
      isApproving={data.isApproving}
      isDeclined={data.isDeclined}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="body2">{data.name}</Typography>
        <Box display="flex" flexDirection="column" alignItems="end" justifyContent="space-between">
          {data.creatorId && <Typography variant="caption">от {data.creatorId}</Typography>}
          {data.isApproving && <Typography variant="caption">на одобрении</Typography>}
          {data.isDeclined && <Typography variant="caption">отклонено</Typography>}
        </Box>
      </Box>

      <StyledDescription variant="body1">{data.description}</StyledDescription>
      <Box display="flex" flexDirection="column" alignItems="end">
        {/*  {!!repeat?.currency && !!repeat.period && (
          <Box display="flex" alignItems="center" gap={1}>
            <RepeatIcon size={20} color="textMain" />
            <Typography>
              {repeat.currency} {pluralizeString(repeat.currency, PeriodLabels[repeat.period].labels)}
            </Typography>
          </Box>
        )} */}
        {!!data.date && (
          <Box display="flex" alignItems="center" gap={1}>
            <ClockIcon size={20} color="textMain" />
            <Typography>{/* timed ? getDateTime(date) :  */ getDefaultDate(data.date)}</Typography>
          </Box>
        )}
      </Box>
      {data.isActive && (
        <Box>
          <Button>готово</Button>
          <Button>отложить</Button>
        </Box>
      )}
    </StyledCard>
  );
};

export default TaskCard;
