import { Box, Select, MenuItem } from '@mui/material';
import TaskCard from '@ui/TaskCard/TaskCard';
import PlusButton from '@ui/PlusButton';
import { debounce } from 'lodash';

import { TaskType, TaskStatus } from '@shared/api/Api';

import { useIntersectionObserver } from '@shared/helpers/useIntersectionObserver';
import { useState, useCallback, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@shared/stores/global.store';
import useSwr from '@shared/swr/useSwr';

import { setTaskTypes, setTaskStatus } from '@shared/stores/tasks/tasks.store';

import { setIsTaskFormOpen } from '@shared/stores/modals/modals.store';
const TasksTab = () => {
  const [limit, setLimit] = useState(10);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  const onOpen = () => dispatch(setIsTaskFormOpen(true));
  const { taskStatus, taskType } = useAppSelector((state) => state.taskSlice);
  const { data: userTasks } = useSwr({
    url: '/tasks',
    query: { limit, offset: 0, type: taskType, status: taskStatus },
  });

  const debouncedLoad = useMemo(() => {
    return debounce(() => {
      setLimit((prev) => prev + 10);
    }, 3000);
  }, []);

  const handleIntersect = useCallback(() => {
    if (userTasks && userTasks.total > userTasks.items.length) {
      debouncedLoad();
    }
  }, [userTasks, debouncedLoad]);

  useIntersectionObserver(ref, handleIntersect);

  const setTaskFilters = (props?: { type?: TaskType; status?: TaskStatus }) => {
    if (props?.type) {
      dispatch(setTaskTypes(props.type));
      dispatch(setTaskStatus(undefined));
      return;
    }
    if (props?.status) {
      dispatch(setTaskTypes(undefined));
      dispatch(setTaskStatus(props.status));
      return;
    }
    dispatch(setTaskTypes(undefined));
    dispatch(setTaskStatus(undefined));
  };
  return (
    <Box display="flex" flexDirection="column" gap={2} p={2} sx={{ overflow: 'visible' }}>
      <Select>
        <MenuItem onClick={() => setTaskFilters()}>Все</MenuItem>
        <MenuItem onClick={() => setTaskFilters({ status: TaskStatus.IN_PROGRESS })}>Открытые</MenuItem>
        <MenuItem onClick={() => setTaskFilters({ status: TaskStatus.PENDING })}>На согласовании</MenuItem>
        <MenuItem onClick={() => setTaskFilters({ status: TaskStatus.COMPLETED })}>Завершённые</MenuItem>
        <MenuItem onClick={() => setTaskFilters({ status: TaskStatus.REJECTED })}>Отклонённые</MenuItem>
        <MenuItem onClick={() => setTaskFilters({ type: TaskType.SMALL })}>Простые</MenuItem>
      </Select>

      {!userTasks?.total ? (
        <>Давайте создавайте задачи</>
      ) : (
        <Box display="flex" flexDirection="column" gap={2} sx={{ overflow: 'visible' }}>
          {userTasks?.items.map((task) => (
            <TaskCard {...task} key={task.id} />
          ))}
          <Box ref={setRef} />
        </Box>
      )}

      <PlusButton onOpen={onOpen} />
    </Box>
  );
};

export default TasksTab;
