import { Typography, Box, Button } from '@mui/material';

import { getDefaultDate } from '@shared//helpers/dates';
import { ClockIcon } from '@ui/Icons';

import { useAppDispatch } from '@shared/stores/global.store';

import { setIsTaskFormOpen } from '@shared/stores/modals/modals.store';
import { setSelectedTask } from '@shared/stores/tasks/tasks.store';
import { components, TaskStatus } from '@shared/api/Api';
import { StyledCard } from './TaskCard.styled';

const TaskCard = (data: components['schemas']['OutputTaskDto']) => {
  const dispatch = useAppDispatch();
  const onOpen = (id: string) => {
    dispatch(setSelectedTask(id));
    dispatch(setIsTaskFormOpen(true));
  };

  return (
    <StyledCard
      onClick={() => onOpen(data.id)}
      isCompleted={data.status === TaskStatus.COMPLETED}
      isApproving={data.status === TaskStatus.PENDING}
      isDeclined={data.status === TaskStatus.REJECTED}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="body2">{data.title}</Typography>
        <Box display="flex" flexDirection="column" alignItems="end" justifyContent="space-between">
          {data.creator && <Typography variant="caption">от {data.creator?.name}</Typography>}
          {data.status === TaskStatus.PENDING && <Typography variant="caption">на одобрении</Typography>}
          {data.status === TaskStatus.REJECTED && <Typography variant="caption">отклонено</Typography>}
        </Box>
      </Box>

      <Box display="flex" alignItems="start" justifyContent="space-between">
        {!!data.deadline && (
          <Box display="flex" alignItems="center" gap={1}>
            <ClockIcon size={20} color="textMain" />
            <Typography>{getDefaultDate(data.deadline)}</Typography>
          </Box>
        )}
      </Box>

      {data.status === TaskStatus.IN_PROGRESS && (
        <Box>
          <Button>готово</Button>
          <Button>отложить</Button>
        </Box>
      )}
    </StyledCard>
  );
};

export default TaskCard;
