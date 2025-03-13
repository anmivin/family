import { Box, Select, MenuItem } from '@mui/material';
import TaskCard from '@ui/TaskCard/TaskCard';
import AddTaskButton from '@ui/AddTaskButton';
import axios, { AxiosRequestConfig } from 'axios';
import Tabs from '../shared/ui/Tabs';
import { groupBy, keyBy } from 'lodash';
import HabitTable from '@entities/HabitTable/HabitTable';
import Routine from '@entities/Routine/Routine';
import { useEffect, useState, useMemo } from 'react';

import { eachDayOfInterval, format, getDaysInMonth, isSameDay } from 'date-fns';
import { useAppDispatch, useAppSelector } from '@stores/global.store';
import useSwr from '../shared/swr/useSwr';
import { fetchTasks } from '@stores/tasks/tasks.fetchers';
import { setTaskTypes } from '@stores/tasks/tasks.store';
import { components } from '@api/Api';
const Tasks = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const dispatch = useAppDispatch();

  const { userTasks, pendingUserTasks, errorUserTasks } = useAppSelector((state) => state.taskSlice);
  const { taskTypes } = useAppSelector((state) => state.taskSlice);
  useEffect(() => {
    console.log('taskTypes', taskTypes);
    dispatch(fetchTasks(taskTypes));
  }, [taskTypes]);
  useEffect(() => {
    console.log('userTasks', userTasks);
  }, [userTasks]);
  return (
    <>
      <Tabs
        tabs={[
          { label: 'Все', value: 1 },
          { label: 'Привычки', value: 2 },
          { label: 'Навыки', value: 3 },
        ]}
        value={selectedTab}
        onChange={setSelectedTab}
      />
      {selectedTab === 1 && (
        <Box display="flex" flexDirection="column" gap={2} p={2} sx={{ overflow: 'visible' }}>
          <Select>
            <MenuItem onClick={() => dispatch(setTaskTypes(null))}>Все</MenuItem>
            <MenuItem onClick={() => dispatch(setTaskTypes({ isActive: true }))}>Открытые</MenuItem>
            <MenuItem onClick={() => dispatch(setTaskTypes({ isApproving: true }))}>На согласовании</MenuItem>
            <MenuItem onClick={() => dispatch(setTaskTypes({ isHabit: true }))}>Привычки</MenuItem>
          </Select>
          {/*       <>кнопа создания таски</>
    <>кнопа редактирования порядка, показывать ли прошедшие</> */}

          {!userTasks.length ? (
            <>dkdkd</>
          ) : (
            <Box display="flex" flexDirection="column" gap={2} sx={{ overflow: 'visible' }}>
              {userTasks?.map((task) => (
                <TaskCard {...task} key={task.id} />
              ))}
            </Box>
          )}

          <AddTaskButton />
        </Box>
      )}
      {selectedTab === 2 /*  <Routine /> */ && <HabitTable />}
    </>
  );
};

export default Tasks;
